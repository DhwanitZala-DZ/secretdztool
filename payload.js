(function() {
    // Create main container
    const container = document.createElement('div');
    container.id = 'vip-video-studio';
    document.body.appendChild(container);

    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'vip-loading-overlay';
    document.body.appendChild(loadingOverlay);

    // Create video preview container
    const previewContainer = document.createElement('div');
    previewContainer.id = 'vip-video-preview-container';
    document.body.appendChild(previewContainer);

    // Styles
    const style = document.createElement('style');
    style.innerHTML = `
        /* Main Container */
        #vip-video-studio {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 95%;
            max-width: 1200px;
            height: 90vh;
            max-height: 700px;
            background: linear-gradient(135deg, #0a0a0a 0%, #151515 100%);
            border: 3px solid #ff3366;
            border-radius: 20px;
            box-shadow: 0 25px 100px rgba(255, 51, 102, 0.5);
            z-index: 999999;
            font-family: 'Segoe UI', system-ui, sans-serif;
            overflow: hidden;
            display: none;
            color: #ffffff;
        }

        #vip-video-studio.visible {
            display: block;
            animation: vipSlideIn 0.4s ease;
        }

        /* Header */
        .vip-studio-header {
            background: linear-gradient(135deg, #ff3366 0%, #ff0055 100%);
            padding: 15px 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid rgba(255, 255, 255, 0.2);
        }

        .vip-studio-title {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .vip-studio-logo {
            width: 45px;
            height: 45px;
            background: white;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 24px;
            color: #ff0055;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .vip-studio-text {
            display: flex;
            flex-direction: column;
        }

        .vip-studio-main-title {
            font-size: 22px;
            font-weight: 900;
            color: #ffffff;
            letter-spacing: -0.5px;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .vip-studio-subtitle {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 600;
            letter-spacing: 1px;
        }

        .vip-developer-name {
            font-size: 14px;
            font-weight: 800;
            color: white;
            margin-left: 20px;
            padding: 5px 15px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .vip-studio-controls {
            display: flex;
            gap: 8px;
        }

        .vip-studio-btn {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 18px;
            font-weight: bold;
        }

        .vip-studio-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        .vip-studio-btn.close:hover {
            background: #ff0000;
            border-color: #ff0000;
        }

        /* Body Layout */
        .vip-studio-body {
            display: flex;
            height: calc(100% - 77px);
        }

        /* Left Panel - Controls */
        .vip-studio-left {
            width: 320px;
            background: rgba(0, 0, 0, 0.4);
            padding: 20px;
            border-right: 1px solid rgba(255, 51, 102, 0.3);
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        /* Right Panel - Video Preview */
        .vip-studio-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 20px;
            gap: 20px;
        }

        /* Control Groups */
        .vip-control-group {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 51, 102, 0.3);
            border-radius: 15px;
            padding: 20px;
        }

        .vip-control-group-title {
            font-size: 14px;
            font-weight: 800;
            color: #ff3366;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        /* Scan Button */
        .vip-scan-btn {
            background: linear-gradient(135deg, #ff3366 0%, #ff0055 100%);
            color: white;
            border: none;
            padding: 18px;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 6px 20px rgba(255, 51, 102, 0.3);
        }

        .vip-scan-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(255, 51, 102, 0.4);
        }

        .vip-scan-btn:active {
            transform: translateY(0);
        }

        .vip-scan-btn.scanning {
            background: linear-gradient(135deg, #0099ff 0%, #0066cc 100%);
            pointer-events: none;
        }

        /* Results List */
        .vip-results-container {
            max-height: 250px;
            overflow-y: auto;
            margin-top: 10px;
        }

        .vip-results-container::-webkit-scrollbar {
            width: 6px;
        }

        .vip-results-container::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 3px;
        }

        .vip-results-container::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #ff3366 0%, #ff0055 100%);
            border-radius: 3px;
        }

        .vip-video-item {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 51, 102, 0.2);
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 10px;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
        }

        .vip-video-item:hover {
            background: rgba(255, 51, 102, 0.1);
            border-color: #ff3366;
            transform: translateX(5px);
        }

        .vip-video-item.active {
            background: rgba(255, 51, 102, 0.15);
            border-color: #ff3366;
            box-shadow: 0 4px 12px rgba(255, 51, 102, 0.2);
        }

        .vip-video-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .vip-video-icon {
            width: 40px;
            height: 40px;
            background: rgba(255, 51, 102, 0.2);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: #ff3366;
        }

        .vip-video-details h4 {
            font-size: 14px;
            font-weight: 700;
            margin: 0 0 5px 0;
            color: white;
        }

        .vip-video-details p {
            font-size: 11px;
            color: #aaa;
            margin: 0;
            font-family: 'Monaco', 'Courier New', monospace;
            word-break: break-all;
        }

        /* Video Preview */
        .vip-preview-container {
            flex: 1;
            background: #000;
            border-radius: 15px;
            overflow: hidden;
            position: relative;
            border: 2px solid rgba(255, 51, 102, 0.3);
        }

        #vip-video-player {
            width: 100%;
            height: 100%;
            display: none;
        }

        .vip-preview-placeholder {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #666;
            font-size: 14px;
        }

        .vip-preview-placeholder i {
            font-size: 50px;
            margin-bottom: 15px;
            display: block;
            color: #333;
        }

        .vip-video-controls {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            padding: 20px;
            display: none;
            gap: 10px;
            justify-content: flex-end;
        }

        .vip-preview-container:hover .vip-video-controls {
            display: flex;
        }

        /* Download Section */
        .vip-download-section {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 51, 102, 0.3);
            border-radius: 15px;
            padding: 20px;
        }

        .vip-download-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
        }

        .vip-file-info {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .vip-file-icon {
            width: 50px;
            height: 50px;
            background: rgba(255, 51, 102, 0.2);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: #ff3366;
        }

        .vip-file-details h4 {
            font-size: 16px;
            font-weight: 800;
            margin: 0 0 5px 0;
            color: white;
        }

        .vip-file-details p {
            font-size: 11px;
            color: #aaa;
            margin: 0;
            font-family: 'Monaco', 'Courier New', monospace;
        }

        .vip-download-btn {
            background: linear-gradient(135deg, #00cc88 0%, #009966 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 12px;
            font-size: 15px;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 6px 20px rgba(0, 204, 136, 0.3);
        }

        .vip-download-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(0, 204, 136, 0.4);
        }

        .vip-download-btn:disabled {
            background: #666;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        /* Quality Selector */
        .vip-quality-selector {
            display: flex;
            gap: 8px;
            margin-top: 15px;
            flex-wrap: wrap;
        }

        .vip-quality-btn {
            padding: 8px 16px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 51, 102, 0.3);
            border-radius: 8px;
            color: #aaa;
            font-size: 11px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .vip-quality-btn:hover {
            background: rgba(255, 51, 102, 0.1);
            color: white;
        }

        .vip-quality-btn.active {
            background: rgba(255, 51, 102, 0.2);
            border-color: #ff3366;
            color: #ff3366;
        }

        /* Loading Overlay */
        #vip-loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 1000000;
            display: none;
            align-items: center;
            justify-content: center;
        }

        .vip-loading-content {
            text-align: center;
            color: white;
        }

        .vip-loading-spinner {
            width: 60px;
            height: 60px;
            border: 5px solid rgba(255, 255, 255, 0.1);
            border-top-color: #ff3366;
            border-radius: 50%;
            animation: vipSpin 1s linear infinite;
            margin: 0 auto 20px;
        }

        .vip-loading-text {
            font-size: 16px;
            font-weight: 600;
            color: #ff3366;
            letter-spacing: 1px;
        }

        /* Video Preview Container */
        #vip-video-preview-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.98);
            z-index: 1000001;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .vip-fullscreen-video {
            width: 95%;
            height: 95%;
            border-radius: 15px;
            overflow: hidden;
            background: #000;
            border: 3px solid #ff3366;
            box-shadow: 0 20px 80px rgba(255, 51, 102, 0.5);
        }

        .vip-fullscreen-video video {
            width: 100%;
            height: 100%;
        }

        /* Status Messages */
        .vip-status-message {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(10, 10, 10, 0.95);
            border: 2px solid #ff3366;
            padding: 15px 20px;
            border-radius: 12px;
            font-size: 14px;
            color: white;
            z-index: 999999;
            display: none;
            max-width: 400px;
            animation: vipSlideInRight 0.3s ease;
            box-shadow: 0 8px 25px rgba(255, 51, 102, 0.3);
        }

        .vip-status-message.success {
            border-color: #00cc88;
        }

        .vip-status-message.error {
            border-color: #ff4444;
        }

        /* Animation */
        @keyframes vipSlideIn {
            from {
                opacity: 0;
                transform: translate(-50%, -60%) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }

        @keyframes vipSpin {
            to { transform: rotate(360deg); }
        }

        @keyframes vipSlideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        /* Toggle Button */
        #vip-studio-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #ff3366 0%, #ff0055 100%);
            color: white;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 999998;
            font-weight: 900;
            font-size: 24px;
            box-shadow: 0 10px 30px rgba(255, 51, 102, 0.5);
            transition: all 0.3s ease;
            border: 2px solid white;
        }

        #vip-studio-toggle:hover {
            transform: scale(1.1) rotate(10deg);
            box-shadow: 0 15px 40px rgba(255, 51, 102, 0.7);
        }

        /* Progress Bar */
        .vip-progress {
            width: 100%;
            height: 6px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 3px;
            overflow: hidden;
            margin-top: 12px;
        }

        .vip-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #ff3366, #ff0055);
            width: 0%;
            transition: width 0.3s ease;
        }

        /* Fullscreen Button */
        .vip-fullscreen-btn {
            background: rgba(0, 0, 0, 0.7);
            color: white;
            border: 2px solid #ff3366;
            width: 45px;
            height: 45px;
            border-radius: 10px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            transition: all 0.2s;
        }

        .vip-fullscreen-btn:hover {
            background: #ff3366;
            transform: scale(1.1);
        }

        /* Video Stats */
        .vip-video-stats {
            display: flex;
            gap: 20px;
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid rgba(255, 51, 102, 0.3);
        }

        .vip-stat-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 12px;
            color: #aaa;
        }

        .vip-stat-item i {
            color: #ff3366;
            font-size: 14px;
        }

        /* Developer Section */
        .vip-developer-section {
            margin-top: auto;
            padding: 15px;
            background: rgba(255, 51, 102, 0.1);
            border-radius: 12px;
            text-align: center;
            border: 1px solid rgba(255, 51, 102, 0.3);
        }

        .vip-developer-label {
            font-size: 10px;
            color: #aaa;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
        }

        .vip-developer-name-large {
            color: #ff3366;
            font-size: 18px;
            font-weight: 900;
            letter-spacing: 0.5px;
        }

        .vip-developer-tag {
            color: #aaa;
            font-size: 11px;
            font-weight: 600;
            margin-top: 3px;
        }

        /* Settings */
        .vip-setting-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
        }

        .vip-setting-label {
            font-size: 12px;
            color: #ddd;
            font-weight: 600;
        }

        .vip-switch {
            position: relative;
            display: inline-block;
            width: 48px;
            height: 24px;
        }

        .vip-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .vip-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #333;
            transition: .4s;
            border-radius: 24px;
        }

        .vip-slider:before {
            position: absolute;
            content: "";
            height: 18px;
            width: 18px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .vip-slider {
            background-color: #ff3366;
        }

        input:checked + .vip-slider:before {
            transform: translateX(24px);
        }

        /* Version Badge */
        .vip-version {
            position: absolute;
            bottom: 10px;
            right: 15px;
            font-size: 10px;
            color: #666;
            letter-spacing: 1px;
        }

        /* Developer Watermark */
        .vip-watermark {
            position: absolute;
            bottom: 10px;
            left: 15px;
            font-size: 11px;
            color: #ff3366;
            font-weight: 700;
            opacity: 0.7;
        }
    `;
    document.head.appendChild(style);

    // HTML Structure with DHWANIT ZALA prominently displayed
    container.innerHTML = `
        <div class="vip-studio-header">
            <div style="display: flex; align-items: center; gap: 20px;">
                <div class="vip-studio-title">
                    <div class="vip-studio-logo">DZ</div>
                    <div class="vip-studio-text">
                        <div class="vip-studio-main-title">VIDEO DOWNLOADER PRO</div>
                        <div class="vip-studio-subtitle">BY DHWANIT ZALA</div>
                    </div>
                </div>
                <div class="vip-developer-name">
                    DEVELOPER: DHWANIT ZALA
                </div>
            </div>
            <div class="vip-studio-controls">
                <button class="vip-studio-btn minimize" title="Minimize">−</button>
                <button class="vip-studio-btn close" title="Close">×</button>
            </div>
        </div>
        <div class="vip-studio-body">
            <div class="vip-studio-left">
                <div class="vip-control-group">
                    <div class="vip-control-group-title">
                        <span>🔍</span> VIDEO SCANNER
                    </div>
                    <button class="vip-scan-btn" id="vip-scan-videos">
                        <span class="vip-scan-icon">🎬</span>
                        <span class="vip-scan-text">SCAN FOR VIDEOS</span>
                    </button>
                    <div class="vip-progress">
                        <div class="vip-progress-bar" id="vip-scan-progress"></div>
                    </div>
                </div>

                <div class="vip-control-group">
                    <div class="vip-control-group-title">
                        <span>📁</span> FOUND VIDEOS
                    </div>
                    <div class="vip-results-container" id="vip-video-results">
                        <div class="vip-video-item" style="text-align: center; padding: 30px 15px;">
                            <div style="font-size: 36px; margin-bottom: 10px; color: #666;">📹</div>
                            <div style="font-size: 13px; color: #888; font-weight: 600;">NO VIDEOS FOUND</div>
                            <div style="font-size: 11px; color: #555; margin-top: 5px;">Click SCAN to find videos</div>
                        </div>
                    </div>
                </div>

                <div class="vip-control-group">
                    <div class="vip-control-group-title">
                        <span>⚙️</span> SETTINGS
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div class="vip-setting-item">
                            <span class="vip-setting-label">Auto-play preview</span>
                            <label class="vip-switch">
                                <input type="checkbox" id="vip-auto-play" checked>
                                <span class="vip-slider"></span>
                            </label>
                        </div>
                        <div class="vip-setting-item">
                            <span class="vip-setting-label">Auto-download</span>
                            <label class="vip-switch">
                                <input type="checkbox" id="vip-auto-download" checked>
                                <span class="vip-slider"></span>
                            </label>
                        </div>
                        <div class="vip-setting-item">
                            <span class="vip-setting-label">Show notifications</span>
                            <label class="vip-switch">
                                <input type="checkbox" id="vip-show-notifications" checked>
                                <span class="vip-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="vip-developer-section">
                    <div class="vip-developer-label">Created & Developed by</div>
                    <div class="vip-developer-name-large">DHWANIT ZALA</div>
                    <div class="vip-developer-tag">Professional Video Extraction Tool</div>
                </div>
            </div>
            <div class="vip-studio-right">
                <div class="vip-preview-container">
                    <video id="vip-video-player" controls></video>
                    <div class="vip-preview-placeholder" id="vip-preview-placeholder">
                        <i>🎥</i>
                        <div>VIDEO PREVIEW</div>
                        <div style="font-size: 12px; color: #555; margin-top: 8px; font-weight: 600;">Select a video from the list</div>
                    </div>
                    <div class="vip-video-controls">
                        <button class="vip-fullscreen-btn" id="vip-fullscreen-btn">⛶</button>
                    </div>
                </div>

                <div class="vip-download-section">
                    <div class="vip-download-info">
                        <div class="vip-file-info">
                            <div class="vip-file-icon">⬇️</div>
                            <div class="vip-file-details">
                                <h4 id="vip-selected-file">NO VIDEO SELECTED</h4>
                                <p id="vip-file-url">Select a video from the list</p>
                                <p style="color: #ff3366; font-size: 10px; margin-top: 3px;">Tool by DHWANIT ZALA</p>
                            </div>
                        </div>
                        <button class="vip-download-btn" id="vip-download-now" disabled>
                            <span class="vip-download-icon">💾</span>
                            <span class="vip-download-text">DOWNLOAD</span>
                        </button>
                    </div>
                    <div class="vip-video-stats" id="vip-video-stats" style="display: none;">
                        <div class="vip-stat-item">
                            <i>📏</i>
                            <span id="vip-video-size">-- MB</span>
                        </div>
                        <div class="vip-stat-item">
                            <i>🎞️</i>
                            <span id="vip-video-quality">Unknown</span>
                        </div>
                        <div class="vip-stat-item">
                            <i>⏱️</i>
                            <span id="vip-video-duration">--:--</span>
                        </div>
                        <div class="vip-stat-item">
                            <i>👨‍💻</i>
                            <span>DHWANIT ZALA</span>
                        </div>
                    </div>
                    <div class="vip-quality-selector" id="vip-quality-selector" style="display: none;"></div>
                </div>
            </div>
        </div>
        <div class="vip-watermark">DEVELOPED BY DHWANIT ZALA</div>
        <div class="vip-version">v2.0 • DZ</div>
    `;

    // Create toggle button
    const toggleBtn = document.createElement('div');
    toggleBtn.id = 'vip-studio-toggle';
    toggleBtn.innerHTML = 'DZ';
    toggleBtn.title = 'Video Downloader by DHWANIT ZALA';
    document.body.appendChild(toggleBtn);

    // Create status message element
    const statusMessage = document.createElement('div');
    statusMessage.className = 'vip-status-message';
    document.body.appendChild(statusMessage);

    // Create fullscreen video container
    previewContainer.innerHTML = `
        <div class="vip-fullscreen-video">
            <video id="vip-fullscreen-video" controls></video>
        </div>
    `;

    // Loading overlay content
    loadingOverlay.innerHTML = `
        <div class="vip-loading-content">
            <div class="vip-loading-spinner"></div>
            <div class="vip-loading-text">VIDEO DOWNLOADER • BY DHWANIT ZALA</div>
        </div>
    `;

    // State management
    let foundVideos = [];
    let selectedVideo = null;
    let settings = {
        autoPlay: true,
        autoDownload: true,
        showNotifications: true
    };

    // Load settings
    try {
        const saved = localStorage.getItem('dz-video-downloader-settings');
        if (saved) {
            settings = JSON.parse(saved);
            document.getElementById('vip-auto-play').checked = settings.autoPlay;
            document.getElementById('vip-auto-download').checked = settings.autoDownload;
            document.getElementById('vip-show-notifications').checked = settings.showNotifications;
        }
    } catch (e) {
        console.log('No saved settings');
    }

    // Show status
    function showStatus(message, type = 'info') {
        if (!settings.showNotifications && type !== 'error') return;
        
        statusMessage.textContent = message;
        statusMessage.className = `vip-status-message ${type}`;
        statusMessage.style.display = 'block';
        
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 3000);
    }

    // Show loading
    function showLoading(show) {
        loadingOverlay.style.display = show ? 'flex' : 'none';
    }

    // Show/hide studio
    toggleBtn.addEventListener('click', () => {
        container.classList.add('visible');
        toggleBtn.style.display = 'none';
        showStatus('Video Downloader by DHWANIT ZALA loaded', 'success');
    });

    // Close button
    container.querySelector('.vip-studio-btn.close').addEventListener('click', () => {
        container.classList.remove('visible');
        toggleBtn.style.display = 'flex';
    });

    // Minimize button
    container.querySelector('.vip-studio-btn.minimize').addEventListener('click', () => {
        container.style.transform = 'translate(-50%, calc(-50% + 300px)) scale(0.9)';
        setTimeout(() => {
            container.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 2000);
    });

    // Fullscreen video
    document.getElementById('vip-fullscreen-btn').addEventListener('click', () => {
        const video = document.getElementById('vip-video-player');
        if (video.src) {
            const fullscreenVideo = document.getElementById('vip-fullscreen-video');
            fullscreenVideo.src = video.src;
            previewContainer.style.display = 'flex';
            fullscreenVideo.play();
        }
    });

    // Close fullscreen
    previewContainer.addEventListener('click', (e) => {
        if (e.target === previewContainer) {
            previewContainer.style.display = 'none';
            const video = document.getElementById('vip-fullscreen-video');
            video.pause();
            video.src = '';
        }
    });

    // Enhanced video scanning
    async function scanForVideos() {
        const scanBtn = document.getElementById('vip-scan-videos');
        const progressBar = document.getElementById('vip-scan-progress');
        const resultsContainer = document.getElementById('vip-video-results');
        
        scanBtn.classList.add('scanning');
        scanBtn.innerHTML = '<span>⚡</span> SCANNING...';
        progressBar.style.width = '0%';
        
        showLoading(true);
        
        try {
            const html = document.documentElement.innerHTML;
            foundVideos = [];
            
            // Multiple scanning patterns
            const patterns = [
                // M3U8 patterns
                /"videoUrl":"([^"]+\.m3u8[^"]*)"/g,
                /videoPlaybackUrl&quot;:&quot;(https:\/\/[^&]+\.m3u8[^"]*)&quot;/g,
                /https:\/\/video\.squarespace-cdn\.com\/[^"'\s]+\.m3u8/g,
                
                // MP4 patterns
                /https:\/\/video\.squarespace-cdn\.com\/[^"'\s]+\.mp4/g,
                /https:\/\/assets\.squarespace\.com\/[^"'\s]+\.mp4/g,
                /"url":"([^"]+\.mp4[^"]*)"/g,
                
                // Thumbnail conversion
                /https:\/\/video\.squarespace-cdn\.com\/content\/v1\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/thumbnail/g
            ];
            
            // Progress simulation
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 10;
                progressBar.style.width = progress + '%';
                if (progress >= 90) clearInterval(progressInterval);
            }, 100);
            
            // Scan for videos
            patterns.forEach((pattern) => {
                const matches = html.match(pattern);
                if (matches) {
                    matches.forEach(match => {
                        let url = match;
                        if (url.includes('&quot;')) {
                            url = url.split('&quot;')[0];
                        }
                        url = url.replace(/\\u002f/g, '/').replace(/\\\//g, '/');
                        
                        // Convert thumbnails to m3u8
                        if (url.includes('/thumbnail')) {
                            url = url.replace('/thumbnail', '/playlist.m3u8');
                        }
                        
                        const isM3U8 = url.includes('.m3u8');
                        const isMP4 = url.includes('.mp4');
                        
                        if ((isM3U8 || isMP4) && !foundVideos.some(v => v.url === url)) {
                            foundVideos.push({
                                url,
                                type: isM3U8 ? 'm3u8' : 'mp4',
                                quality: isMP4 ? 'HD' : 'Adaptive'
                            });
                        }
                    });
                }
            });
            
            // Final progress
            progressBar.style.width = '100%';
            clearInterval(progressInterval);
            
            if (foundVideos.length > 0) {
                resultsContainer.innerHTML = '';
                foundVideos.forEach((video, index) => {
                    const videoItem = document.createElement('div');
                    videoItem.className = 'vip-video-item';
                    videoItem.dataset.index = index;
                    
                    const qualityLabel = video.quality || (video.type === 'mp4' ? 'MP4' : 'M3U8');
                    
                    videoItem.innerHTML = `
                        <div class="vip-video-info">
                            <div class="vip-video-icon">
                                ${video.type === 'mp4' ? '🎬' : '📺'}
                            </div>
                            <div class="vip-video-details">
                                <h4>VIDEO ${index + 1} (${qualityLabel})</h4>
                                <p>${video.url.substring(0, 50)}...</p>
                            </div>
                        </div>
                    `;
                    
                    videoItem.addEventListener('click', () => selectVideo(index));
                    resultsContainer.appendChild(videoItem);
                });
                
                showStatus(`✅ Found ${foundVideos.length} video${foundVideos.length > 1 ? 's' : ''} • By DHWANIT ZALA`, 'success');
                
                // Auto-select first video
                if (foundVideos.length > 0) {
                    selectVideo(0);
                }
            } else {
                resultsContainer.innerHTML = `
                    <div class="vip-video-item" style="text-align: center; padding: 30px 15px;">
                        <div style="font-size: 36px; margin-bottom: 10px; color: #ff3366;">🔍</div>
                        <div style="font-size: 13px; color: #888; font-weight: 600;">NO VIDEOS FOUND</div>
                        <div style="font-size: 11px; color: #555; margin-top: 5px;">Try playing the video on the page first</div>
                        <div style="font-size: 10px; color: #666; margin-top: 8px; padding-top: 8px; border-top: 1px solid rgba(255,51,102,0.2);">
                            Tool by DHWANIT ZALA
                        </div>
                    </div>
                `;
                showStatus('❌ No videos found • By DHWANIT ZALA', 'error');
            }
            
        } catch (error) {
            console.error('Scan error:', error);
            showStatus('❌ Scan failed • By DHWANIT ZALA', 'error');
        } finally {
            showLoading(false);
            scanBtn.classList.remove('scanning');
            scanBtn.innerHTML = '<span>🎬</span> SCAN FOR VIDEOS';
            setTimeout(() => {
                progressBar.style.width = '0%';
            }, 500);
        }
    }

    // Select video
    async function selectVideo(index) {
        document.querySelectorAll('.vip-video-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const selectedItem = document.querySelector(`.vip-video-item[data-index="${index}"]`);
        if (selectedItem) {
            selectedItem.classList.add('active');
        }
        
        selectedVideo = foundVideos[index];
        
        // Update UI
        document.getElementById('vip-selected-file').textContent = 
            `VIDEO ${index + 1} (${selectedVideo.type.toUpperCase()})`;
        document.getElementById('vip-file-url').textContent = selectedVideo.url;
        
        const downloadBtn = document.getElementById('vip-download-now');
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = '<span>💾</span> DOWNLOAD';
        
        // Show video stats
        document.getElementById('vip-video-stats').style.display = 'flex';
        
        // Reset video info
        document.getElementById('vip-video-size').textContent = '-- MB';
        document.getElementById('vip-video-quality').textContent = 'Unknown';
        document.getElementById('vip-video-duration').textContent = '--:--';
        
        // Load video preview
        const videoPlayer = document.getElementById('vip-video-player');
        const placeholder = document.getElementById('vip-preview-placeholder');
        
        videoPlayer.src = selectedVideo.url;
        videoPlayer.style.display = 'block';
        placeholder.style.display = 'none';
        
        // Add event listeners for video info
        const onLoadedMetadata = () => {
            const duration = videoPlayer.duration;
            if (duration && duration > 0) {
                const minutes = Math.floor(duration / 60);
                const seconds = Math.floor(duration % 60);
                document.getElementById('vip-video-duration').textContent = 
                    `${minutes}:${seconds.toString().padStart(2, '0')}`;
                
                // Detect quality
                const width = videoPlayer.videoWidth;
                let quality = 'Unknown';
                if (width >= 1920) quality = '4K';
                else if (width >= 1280) quality = 'Full HD';
                else if (width >= 720) quality = 'HD';
                else if (width > 0) quality = 'SD';
                document.getElementById('vip-video-quality').textContent = quality;
                
                if (settings.autoPlay) {
                    videoPlayer.play().catch(e => console.log('Auto-play blocked'));
                }
            }
            videoPlayer.removeEventListener('loadedmetadata', onLoadedMetadata);
        };
        
        videoPlayer.addEventListener('loadedmetadata', onLoadedMetadata);
        
        // Try to get file size
        try {
            const response = await fetch(selectedVideo.url, { method: 'HEAD' });
            const size = response.headers.get('content-length');
            if (size) {
                const sizeMB = (size / (1024 * 1024)).toFixed(1);
                document.getElementById('vip-video-size').textContent = `${sizeMB} MB`;
            }
        } catch (e) {
            // Ignore
        }
        
        showStatus(`✅ Video ${index + 1} selected • By DHWANIT ZALA`, 'success');
    }

    // Download function
    async function downloadVideo() {
        if (!selectedVideo) return;
        
        const downloadBtn = document.getElementById('vip-download-now');
        const originalText = downloadBtn.innerHTML;
        
        downloadBtn.innerHTML = '<span>⚡</span> DOWNLOADING...';
        downloadBtn.disabled = true;
        
        showLoading(true);
        
        try {
            if (selectedVideo.type === 'm3u8') {
                // For m3u8, open in new tab
                window.open(selectedVideo.url, '_blank');
                showStatus('✅ M3U8 playlist opened • By DHWANIT ZALA', 'success');
            } else {
                // For MP4, download directly
                const response = await fetch(selectedVideo.url);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = `Video_By_Dhwanit_Zala_${Date.now()}.mp4`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
                
                showStatus('✅ Download started! • By DHWANIT ZALA', 'success');
            }
        } catch (error) {
            console.error('Download error:', error);
            showStatus('❌ Download failed • By DHWANIT ZALA', 'error');
        } finally {
            showLoading(false);
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        }
    }

    // Save settings
    function saveSettings() {
        settings.autoPlay = document.getElementById('vip-auto-play').checked;
        settings.autoDownload = document.getElementById('vip-auto-download').checked;
        settings.showNotifications = document.getElementById('vip-show-notifications').checked;
        
        try {
            localStorage.setItem('dz-video-downloader-settings', JSON.stringify(settings));
            showStatus('⚙️ Settings saved • By DHWANIT ZALA', 'success');
        } catch (e) {
            console.error('Failed to save settings:', e);
        }
    }

    // Event listeners
    document.getElementById('vip-scan-videos').addEventListener('click', scanForVideos);
    document.getElementById('vip-download-now').addEventListener('click', downloadVideo);
    
    // Settings change listeners
    document.getElementById('vip-auto-play').addEventListener('change', saveSettings);
    document.getElementById('vip-auto-download').addEventListener('change', saveSettings);
    document.getElementById('vip-show-notifications').addEventListener('change', saveSettings);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'D') {
            e.preventDefault();
            if (container.classList.contains('visible')) {
                container.classList.remove('visible');
                toggleBtn.style.display = 'flex';
            } else {
                container.classList.add('visible');
                toggleBtn.style.display = 'none';
            }
        }
        
        if (e.key === 'Escape' && container.classList.contains('visible')) {
            container.classList.remove('visible');
            toggleBtn.style.display = 'flex';
        }
        
        if (e.key === 'F5' && e.ctrlKey) {
            e.preventDefault();
            scanForVideos();
        }
    });

    // Auto-scan on page load
    setTimeout(() => {
        const html = document.documentElement.innerHTML;
        if (html.includes('video.squarespace-cdn.com') || html.includes('.m3u8') || html.includes('.mp4')) {
            showStatus('🎬 Video Downloader by DHWANIT ZALA loaded • Press Ctrl+Shift+D', 'info');
        }
    }, 1000);

    // Initial welcome message
    setTimeout(() => {
        showStatus('🚀 Video Downloader Pro by DHWANIT ZALA is ready!', 'success');
    }, 500);
})();
