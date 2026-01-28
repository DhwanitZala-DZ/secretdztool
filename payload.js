(function() {
    // Create main container
    const container = document.createElement('div');
    container.id = 'thor-video-studio';
    document.body.appendChild(container);

    // Create loading overlay
    const loadingOverlay = document.createElement('div');
    loadingOverlay.id = 'thor-loading-overlay';
    document.body.appendChild(loadingOverlay);

    // Create video preview container
    const previewContainer = document.createElement('div');
    previewContainer.id = 'thor-video-preview-container';
    document.body.appendChild(previewContainer);

    // Create drag overlay for moving
    const dragOverlay = document.createElement('div');
    dragOverlay.id = 'thor-drag-overlay';
    document.body.appendChild(dragOverlay);

    // Styles
    const style = document.createElement('style');
    style.innerHTML = `
        /* Main Container - Smaller & Movable */
        #thor-video-studio {
            position: fixed;
            top: 50px;
            left: 50px;
            width: 750px;
            height: 600px;
            background: linear-gradient(135deg, #0a0a1a 0%, #0f1a30 100%);
            border: 2px solid #00b4ff;
            border-radius: 15px;
            box-shadow: 
                0 0 30px rgba(0, 180, 255, 0.4),
                0 0 60px rgba(0, 140, 255, 0.2),
                inset 0 0 20px rgba(0, 180, 255, 0.1);
            z-index: 999999;
            font-family: 'Segoe UI', system-ui, sans-serif;
            overflow: hidden;
            display: none;
            color: #ffffff;
            backdrop-filter: blur(10px);
            cursor: move;
        }

        #thor-video-studio.visible {
            display: block;
            animation: thorSlideIn 0.4s ease;
        }

        /* Lightning Effect Border */
        @keyframes lightning {
            0%, 100% { border-color: #00b4ff; }
            50% { border-color: #0066ff; }
        }

        #thor-video-studio.visible {
            animation: lightning 2s infinite;
        }

        /* Header - Drag Handle */
        .thor-studio-header {
            background: linear-gradient(135deg, #001f3f 0%, #003366 100%);
            padding: 12px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #00b4ff;
            cursor: move;
            position: relative;
            overflow: hidden;
        }

        .thor-studio-header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                45deg,
                transparent 30%,
                rgba(0, 180, 255, 0.1) 50%,
                transparent 70%
            );
            animation: lightningStrike 3s infinite;
        }

        @keyframes lightningStrike {
            0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
            100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .thor-studio-title {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .thor-studio-logo {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #00b4ff 0%, #0066ff 100%);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 22px;
            color: white;
            box-shadow: 0 0 15px rgba(0, 180, 255, 0.5);
        }

        .thor-studio-text {
            display: flex;
            flex-direction: column;
        }

        .thor-studio-main-title {
            font-size: 18px;
            font-weight: 800;
            color: #00e0ff;
            letter-spacing: -0.5px;
            text-shadow: 0 0 10px rgba(0, 224, 255, 0.5);
        }

        .thor-studio-subtitle {
            font-size: 11px;
            color: #88d3ff;
            font-weight: 600;
        }

        .thor-developer-name {
            font-size: 12px;
            font-weight: 700;
            color: #00b4ff;
            margin-left: 15px;
            padding: 4px 10px;
            background: rgba(0, 180, 255, 0.1);
            border-radius: 8px;
            border: 1px solid rgba(0, 180, 255, 0.3);
        }

        .thor-studio-controls {
            display: flex;
            gap: 6px;
        }

        .thor-studio-btn {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            border: 1px solid rgba(0, 180, 255, 0.4);
            background: rgba(0, 180, 255, 0.1);
            color: #88d3ff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 16px;
            font-weight: bold;
            z-index: 2;
            position: relative;
        }

        .thor-studio-btn:hover {
            background: rgba(0, 180, 255, 0.3);
            color: #ffffff;
            transform: translateY(-1px);
            box-shadow: 0 0 10px rgba(0, 180, 255, 0.5);
        }

        .thor-studio-btn.close:hover {
            background: #ff3333;
            border-color: #ff3333;
        }

        /* Body Layout - Scrollable */
        .thor-studio-body {
            display: flex;
            height: calc(100% - 66px);
            overflow: hidden;
        }

        /* Left Panel - Controls (Scrollable) */
        .thor-studio-left {
            width: 280px;
            background: rgba(10, 25, 50, 0.6);
            padding: 15px;
            border-right: 1px solid rgba(0, 180, 255, 0.2);
            display: flex;
            flex-direction: column;
            gap: 15px;
            overflow-y: auto;
        }

        .thor-studio-left::-webkit-scrollbar {
            width: 4px;
        }

        .thor-studio-left::-webkit-scrollbar-track {
            background: rgba(0, 180, 255, 0.1);
            border-radius: 2px;
        }

        .thor-studio-left::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #00b4ff 0%, #0066ff 100%);
            border-radius: 2px;
        }

        /* Right Panel - Video Preview (Scrollable) */
        .thor-studio-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 15px;
            gap: 15px;
            overflow-y: auto;
        }

        .thor-studio-right::-webkit-scrollbar {
            width: 4px;
        }

        .thor-studio-right::-webkit-scrollbar-track {
            background: rgba(0, 180, 255, 0.1);
            border-radius: 2px;
        }

        .thor-studio-right::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #00b4ff 0%, #0066ff 100%);
            border-radius: 2px;
        }

        /* Control Groups */
        .thor-control-group {
            background: rgba(0, 180, 255, 0.05);
            border: 1px solid rgba(0, 180, 255, 0.2);
            border-radius: 12px;
            padding: 15px;
        }

        .thor-control-group-title {
            font-size: 12px;
            font-weight: 800;
            color: #00b4ff;
            margin-bottom: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Scan Button */
        .thor-scan-btn {
            background: linear-gradient(135deg, #00b4ff 0%, #0066ff 100%);
            color: white;
            border: none;
            padding: 14px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 15px rgba(0, 180, 255, 0.3);
        }

        .thor-scan-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 25px rgba(0, 180, 255, 0.5);
        }

        .thor-scan-btn:active {
            transform: translateY(0);
        }

        .thor-scan-btn.scanning {
            background: linear-gradient(135deg, #0088cc 0%, #0055aa 100%);
            pointer-events: none;
        }

        /* Results List */
        .thor-results-container {
            max-height: 200px;
            overflow-y: auto;
            margin-top: 10px;
        }

        .thor-results-container::-webkit-scrollbar {
            width: 4px;
        }

        .thor-results-container::-webkit-scrollbar-track {
            background: rgba(0, 180, 255, 0.05);
        }

        .thor-results-container::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #00b4ff 0%, #0066ff 100%);
            border-radius: 2px;
        }

        .thor-video-item {
            background: rgba(0, 180, 255, 0.05);
            border: 1px solid rgba(0, 180, 255, 0.15);
            border-radius: 8px;
            padding: 12px;
            margin-bottom: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
            position: relative;
        }

        .thor-video-item:hover {
            background: rgba(0, 180, 255, 0.1);
            border-color: #00b4ff;
            transform: translateX(3px);
        }

        .thor-video-item.active {
            background: rgba(0, 180, 255, 0.15);
            border-color: #00b4ff;
            box-shadow: 0 0 10px rgba(0, 180, 255, 0.3);
        }

        .thor-video-info {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .thor-video-icon {
            width: 35px;
            height: 35px;
            background: rgba(0, 180, 255, 0.15);
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #00b4ff;
        }

        .thor-video-details h4 {
            font-size: 13px;
            font-weight: 700;
            margin: 0 0 4px 0;
            color: #e6f7ff;
        }

        .thor-video-details p {
            font-size: 10px;
            color: #88d3ff;
            margin: 0;
            font-family: 'Monaco', 'Courier New', monospace;
            word-break: break-all;
        }

        /* Video Preview */
        .thor-preview-container {
            flex: 1;
            min-height: 250px;
            background: #000;
            border-radius: 12px;
            overflow: hidden;
            position: relative;
            border: 1px solid rgba(0, 180, 255, 0.3);
        }

        #thor-video-player {
            width: 100%;
            height: 100%;
            display: none;
        }

        .thor-preview-placeholder {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #555;
            font-size: 13px;
        }

        .thor-preview-placeholder i {
            font-size: 40px;
            margin-bottom: 10px;
            display: block;
            color: #333;
        }

        .thor-video-controls {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            padding: 15px;
            display: none;
            gap: 8px;
            justify-content: flex-end;
        }

        .thor-preview-container:hover .thor-video-controls {
            display: flex;
        }

        /* Download Section */
        .thor-download-section {
            background: rgba(0, 180, 255, 0.05);
            border: 1px solid rgba(0, 180, 255, 0.2);
            border-radius: 12px;
            padding: 15px;
        }

        .thor-download-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            flex-wrap: wrap;
            gap: 10px;
        }

        .thor-file-info {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .thor-file-icon {
            width: 45px;
            height: 45px;
            background: rgba(0, 180, 255, 0.15);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            color: #00b4ff;
        }

        .thor-file-details h4 {
            font-size: 14px;
            font-weight: 800;
            margin: 0 0 4px 0;
            color: #e6f7ff;
        }

        .thor-file-details p {
            font-size: 10px;
            color: #88d3ff;
            margin: 0;
            font-family: 'Monaco', 'Courier New', monospace;
        }

        .thor-download-btn {
            background: linear-gradient(135deg, #00cc88 0%, #009966 100%);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 10px;
            font-size: 13px;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 15px rgba(0, 204, 136, 0.3);
        }

        .thor-download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 25px rgba(0, 204, 136, 0.5);
        }

        .thor-download-btn:disabled {
            background: #555;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        /* Video Stats */
        .thor-video-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid rgba(0, 180, 255, 0.2);
        }

        .thor-stat-item {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            color: #88d3ff;
        }

        .thor-stat-item i {
            color: #00b4ff;
            font-size: 12px;
        }

        /* Developer Section */
        .thor-developer-section {
            margin-top: 10px;
            padding: 12px;
            background: rgba(0, 180, 255, 0.08);
            border-radius: 10px;
            text-align: center;
            border: 1px solid rgba(0, 180, 255, 0.2);
        }

        .thor-developer-label {
            font-size: 9px;
            color: #88d3ff;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 4px;
        }

        .thor-developer-name-large {
            color: #00e0ff;
            font-size: 14px;
            font-weight: 900;
            letter-spacing: 0.5px;
            text-shadow: 0 0 8px rgba(0, 224, 255, 0.5);
        }

        .thor-developer-tag {
            color: #88d3ff;
            font-size: 10px;
            font-weight: 600;
            margin-top: 3px;
        }

        /* Settings */
        .thor-setting-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        .thor-setting-label {
            font-size: 11px;
            color: #e6f7ff;
            font-weight: 600;
        }

        .thor-switch {
            position: relative;
            display: inline-block;
            width: 42px;
            height: 22px;
        }

        .thor-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .thor-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #334455;
            transition: .4s;
            border-radius: 22px;
        }

        .thor-slider:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 3px;
            bottom: 3px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }

        input:checked + .thor-slider {
            background-color: #00b4ff;
        }

        input:checked + .thor-slider:before {
            transform: translateX(20px);
        }

        /* Loading Overlay */
        #thor-loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 20, 40, 0.95);
            z-index: 1000000;
            display: none;
            align-items: center;
            justify-content: center;
        }

        .thor-loading-content {
            text-align: center;
            color: white;
        }

        .thor-loading-spinner {
            width: 50px;
            height: 50px;
            border: 3px solid rgba(0, 180, 255, 0.1);
            border-top-color: #00b4ff;
            border-radius: 50%;
            animation: thorSpin 1s linear infinite;
            margin: 0 auto 15px;
        }

        @keyframes thorSpin {
            to { transform: rotate(360deg); }
        }

        .thor-loading-text {
            font-size: 14px;
            font-weight: 600;
            color: #00b4ff;
            letter-spacing: 1px;
        }

        /* Video Preview Container */
        #thor-video-preview-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 20, 40, 0.98);
            z-index: 1000001;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .thor-fullscreen-video {
            width: 95%;
            height: 95%;
            border-radius: 12px;
            overflow: hidden;
            background: #000;
            border: 2px solid #00b4ff;
            box-shadow: 0 0 50px rgba(0, 180, 255, 0.5);
        }

        .thor-fullscreen-video video {
            width: 100%;
            height: 100%;
        }

        /* Toggle Button */
        #thor-studio-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #00b4ff 0%, #0066ff 100%);
            color: white;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 999998;
            font-weight: 900;
            font-size: 20px;
            box-shadow: 
                0 0 20px rgba(0, 180, 255, 0.5),
                inset 0 0 10px rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            border: 2px solid white;
        }

        #thor-studio-toggle:hover {
            transform: scale(1.1) rotate(90deg);
            box-shadow: 
                0 0 30px rgba(0, 180, 255, 0.8),
                inset 0 0 15px rgba(255, 255, 255, 0.3);
        }

        /* Progress Bar */
        .thor-progress {
            width: 100%;
            height: 4px;
            background: rgba(0, 180, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin-top: 10px;
        }

        .thor-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #00b4ff, #0066ff);
            width: 0%;
            transition: width 0.3s ease;
        }

        /* Fullscreen Button */
        .thor-fullscreen-btn {
            background: rgba(0, 0, 0, 0.6);
            color: white;
            border: 1px solid #00b4ff;
            width: 40px;
            height: 40px;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            transition: all 0.2s;
        }

        .thor-fullscreen-btn:hover {
            background: #00b4ff;
            transform: scale(1.1);
        }

        /* Drag Overlay */
        #thor-drag-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1000002;
            display: none;
        }

        /* Status Messages */
        .thor-status-message {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(10, 25, 50, 0.95);
            border: 1px solid #00b4ff;
            padding: 12px 18px;
            border-radius: 10px;
            font-size: 13px;
            color: white;
            z-index: 999999;
            display: none;
            max-width: 350px;
            animation: thorSlideInRight 0.3s ease;
            box-shadow: 0 0 20px rgba(0, 180, 255, 0.3);
        }

        @keyframes thorSlideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .thor-status-message.success {
            border-color: #00cc88;
            box-shadow: 0 0 20px rgba(0, 204, 136, 0.3);
        }

        .thor-status-message.error {
            border-color: #ff3333;
            box-shadow: 0 0 20px rgba(255, 51, 51, 0.3);
        }

        /* Animation */
        @keyframes thorSlideIn {
            from {
                opacity: 0;
                transform: translate(-20px, -20px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translate(0, 0) scale(1);
            }
        }

        /* Developer Watermark */
        .thor-watermark {
            position: absolute;
            bottom: 8px;
            left: 15px;
            font-size: 10px;
            color: #00b4ff;
            font-weight: 700;
            opacity: 0.7;
        }

        /* Version Badge */
        .thor-version {
            position: absolute;
            bottom: 8px;
            right: 15px;
            font-size: 9px;
            color: #88d3ff;
        }

        /* Quality Selector */
        .thor-quality-selector {
            display: flex;
            gap: 8px;
            margin-top: 12px;
            flex-wrap: wrap;
        }

        .thor-quality-btn {
            padding: 6px 12px;
            background: rgba(0, 180, 255, 0.1);
            border: 1px solid rgba(0, 180, 255, 0.3);
            border-radius: 6px;
            color: #88d3ff;
            font-size: 10px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .thor-quality-btn:hover {
            background: rgba(0, 180, 255, 0.2);
            color: white;
        }

        .thor-quality-btn.active {
            background: rgba(0, 180, 255, 0.3);
            border-color: #00b4ff;
            color: #00e0ff;
        }
    `;
    document.head.appendChild(style);

    // HTML Structure
    container.innerHTML = `
        <div class="thor-studio-header">
            <div style="display: flex; align-items: center; gap: 15px;">
                <div class="thor-studio-title">
                    <div class="thor-studio-logo">⚡</div>
                    <div class="thor-studio-text">
                        <div class="thor-studio-main-title">THOR VIDEO STUDIO</div>
                        <div class="thor-studio-subtitle">POWERED BY DHWANIT ZALA</div>
                    </div>
                </div>
                <div class="thor-developer-name">
                    DHWANIT ZALA
                </div>
            </div>
            <div class="thor-studio-controls">
                <button class="thor-studio-btn minimize" title="Minimize">−</button>
                <button class="thor-studio-btn close" title="Close">×</button>
            </div>
        </div>
        <div class="thor-studio-body">
            <div class="thor-studio-left">
                <div class="thor-control-group">
                    <div class="thor-control-group-title">
                        <span>⚡</span> VIDEO SCANNER
                    </div>
                    <button class="thor-scan-btn" id="thor-scan-videos">
                        <span class="thor-scan-icon">🔍</span>
                        <span class="thor-scan-text">SCAN VIDEOS</span>
                    </button>
                    <div class="thor-progress">
                        <div class="thor-progress-bar" id="thor-scan-progress"></div>
                    </div>
                </div>

                <div class="thor-control-group">
                    <div class="thor-control-group-title">
                        <span>📁</span> FOUND VIDEOS
                    </div>
                    <div class="thor-results-container" id="thor-video-results">
                        <div class="thor-video-item" style="text-align: center; padding: 25px 12px;">
                            <div style="font-size: 30px; margin-bottom: 8px; color: #00b4ff;">🎬</div>
                            <div style="font-size: 12px; color: #88d3ff; font-weight: 600;">NO VIDEOS FOUND</div>
                            <div style="font-size: 10px; color: #6688aa; margin-top: 4px;">Click SCAN to find videos</div>
                        </div>
                    </div>
                </div>

                <div class="thor-control-group">
                    <div class="thor-control-group-title">
                        <span>⚙️</span> SETTINGS
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div class="thor-setting-item">
                            <span class="thor-setting-label">Auto-play preview</span>
                            <label class="thor-switch">
                                <input type="checkbox" id="thor-auto-play" checked>
                                <span class="thor-slider"></span>
                            </label>
                        </div>
                        <div class="thor-setting-item">
                            <span class="thor-setting-label">Auto-download</span>
                            <label class="thor-switch">
                                <input type="checkbox" id="thor-auto-download" checked>
                                <span class="thor-slider"></span>
                            </label>
                        </div>
                        <div class="thor-setting-item">
                            <span class="thor-setting-label">Show notifications</span>
                            <label class="thor-switch">
                                <input type="checkbox" id="thor-show-notifications" checked>
                                <span class="thor-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="thor-developer-section">
                    <div class="thor-developer-label">Created & Developed by</div>
                    <div class="thor-developer-name-large">DHWANIT ZALA</div>
                    <div class="thor-developer-tag">Thor Lightning Theme</div>
                </div>
            </div>
            <div class="thor-studio-right">
                <div class="thor-preview-container">
                    <video id="thor-video-player" controls></video>
                    <div class="thor-preview-placeholder" id="thor-preview-placeholder">
                        <i>⚡</i>
                        <div>VIDEO PREVIEW</div>
                        <div style="font-size: 11px; color: #6688aa; margin-top: 6px;">Select a video from the list</div>
                    </div>
                    <div class="thor-video-controls">
                        <button class="thor-fullscreen-btn" id="thor-fullscreen-btn">⛶</button>
                    </div>
                </div>

                <div class="thor-download-section">
                    <div class="thor-download-info">
                        <div class="thor-file-info">
                            <div class="thor-file-icon">⬇️</div>
                            <div class="thor-file-details">
                                <h4 id="thor-selected-file">NO VIDEO SELECTED</h4>
                                <p id="thor-file-url">Select a video from the list</p>
                                <p style="color: #00b4ff; font-size: 9px; margin-top: 2px;">By DHWANIT ZALA</p>
                            </div>
                        </div>
                        <button class="thor-download-btn" id="thor-download-now" disabled>
                            <span class="thor-download-icon">⚡</span>
                            <span class="thor-download-text">DOWNLOAD</span>
                        </button>
                    </div>
                    <div class="thor-video-stats" id="thor-video-stats" style="display: none;">
                        <div class="thor-stat-item">
                            <i>📏</i>
                            <span id="thor-video-size">-- MB</span>
                        </div>
                        <div class="thor-stat-item">
                            <i>🎞️</i>
                            <span id="thor-video-quality">Unknown</span>
                        </div>
                        <div class="thor-stat-item">
                            <i>⏱️</i>
                            <span id="thor-video-duration">--:--</span>
                        </div>
                        <div class="thor-stat-item">
                            <i>👨‍💻</i>
                            <span>DHWANIT ZALA</span>
                        </div>
                    </div>
                    <div class="thor-quality-selector" id="thor-quality-selector" style="display: none;"></div>
                </div>
            </div>
        </div>
        <div class="thor-watermark">THOR STUDIO • DHWANIT ZALA</div>
        <div class="thor-version">v2.1 • LIGHTNING EDITION</div>
    `;

    // Create toggle button
    const toggleBtn = document.createElement('div');
    toggleBtn.id = 'thor-studio-toggle';
    toggleBtn.innerHTML = '⚡';
    toggleBtn.title = 'Thor Video Studio by DHWANIT ZALA';
    document.body.appendChild(toggleBtn);

    // Create status message element
    const statusMessage = document.createElement('div');
    statusMessage.className = 'thor-status-message';
    document.body.appendChild(statusMessage);

    // Create fullscreen video container
    previewContainer.innerHTML = `
        <div class="thor-fullscreen-video">
            <video id="thor-fullscreen-video" controls></video>
        </div>
    `;

    // Loading overlay content
    loadingOverlay.innerHTML = `
        <div class="thor-loading-content">
            <div class="thor-loading-spinner"></div>
            <div class="thor-loading-text">THOR VIDEO STUDIO • BY DHWANIT ZALA</div>
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
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };

    // Load settings
    try {
        const saved = localStorage.getItem('thor-video-studio-settings');
        if (saved) {
            settings = JSON.parse(saved);
            document.getElementById('thor-auto-play').checked = settings.autoPlay;
            document.getElementById('thor-auto-download').checked = settings.autoDownload;
            document.getElementById('thor-show-notifications').checked = settings.showNotifications;
        }
    } catch (e) {
        console.log('No saved settings');
    }

    // Show status
    function showStatus(message, type = 'info') {
        if (!settings.showNotifications && type !== 'error') return;
        
        statusMessage.textContent = message;
        statusMessage.className = `thor-status-message ${type}`;
        statusMessage.style.display = 'block';
        
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 3000);
    }

    // Show loading
    function showLoading(show) {
        loadingOverlay.style.display = show ? 'flex' : 'none';
    }

    // Drag functionality
    const header = container.querySelector('.thor-studio-header');
    
    header.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);

    function startDrag(e) {
        if (e.target.classList.contains('thor-studio-btn')) return;
        
        const rect = container.getBoundingClientRect();
        dragOffset.x = e.clientX - rect.left;
        dragOffset.y = e.clientY - rect.top;
        isDragging = true;
        dragOverlay.style.display = 'block';
        container.style.cursor = 'grabbing';
        e.preventDefault();
    }

    function doDrag(e) {
        if (!isDragging) return;
        
        container.style.left = (e.clientX - dragOffset.x) + 'px';
        container.style.top = (e.clientY - dragOffset.y) + 'px';
        container.style.right = 'auto';
        container.style.bottom = 'auto';
        container.style.transform = 'none';
    }

    function stopDrag() {
        isDragging = false;
        dragOverlay.style.display = 'none';
        container.style.cursor = 'move';
    }

    // Show/hide studio
    toggleBtn.addEventListener('click', () => {
        container.classList.add('visible');
        toggleBtn.style.display = 'none';
        showStatus('Thor Video Studio by DHWANIT ZALA loaded ⚡', 'success');
    });

    // Close button
    container.querySelector('.thor-studio-btn.close').addEventListener('click', () => {
        container.classList.remove('visible');
        toggleBtn.style.display = 'flex';
    });

    // Minimize button
    container.querySelector('.thor-studio-btn.minimize').addEventListener('click', () => {
        container.style.height = '66px'; // Just header height
        setTimeout(() => {
            container.style.height = '600px';
        }, 2000);
    });

    // Fullscreen video
    document.getElementById('thor-fullscreen-btn').addEventListener('click', () => {
        const video = document.getElementById('thor-video-player');
        if (video.src) {
            const fullscreenVideo = document.getElementById('thor-fullscreen-video');
            fullscreenVideo.src = video.src;
            previewContainer.style.display = 'flex';
            fullscreenVideo.play();
        }
    });

    // Close fullscreen
    previewContainer.addEventListener('click', (e) => {
        if (e.target === previewContainer) {
            previewContainer.style.display = 'none';
            const video = document.getElementById('thor-fullscreen-video');
            video.pause();
            video.src = '';
        }
    });

    // Enhanced video scanning
    async function scanForVideos() {
        const scanBtn = document.getElementById('thor-scan-videos');
        const progressBar = document.getElementById('thor-scan-progress');
        const resultsContainer = document.getElementById('thor-video-results');
        
        scanBtn.classList.add('scanning');
        scanBtn.innerHTML = '<span>⚡</span> SCANNING...';
        progressBar.style.width = '0%';
        
        showLoading(true);
        
        try {
            const html = document.documentElement.innerHTML;
            foundVideos = [];
            
            // Multiple scanning patterns
            const patterns = [
                /"videoUrl":"([^"]+\.m3u8[^"]*)"/g,
                /videoPlaybackUrl&quot;:&quot;(https:\/\/[^&]+\.m3u8[^"]*)&quot;/g,
                /https:\/\/video\.squarespace-cdn\.com\/[^"'\s]+\.m3u8/g,
                /https:\/\/video\.squarespace-cdn\.com\/[^"'\s]+\.mp4/g,
                /https:\/\/assets\.squarespace\.com\/[^"'\s]+\.mp4/g,
                /"url":"([^"]+\.mp4[^"]*)"/g,
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
                    videoItem.className = 'thor-video-item';
                    videoItem.dataset.index = index;
                    
                    const qualityLabel = video.quality || (video.type === 'mp4' ? 'MP4' : 'M3U8');
                    
                    videoItem.innerHTML = `
                        <div class="thor-video-info">
                            <div class="thor-video-icon">
                                ${video.type === 'mp4' ? '🎬' : '📺'}
                            </div>
                            <div class="thor-video-details">
                                <h4>Video ${index + 1} (${qualityLabel})</h4>
                                <p>${video.url.substring(0, 45)}...</p>
                            </div>
                        </div>
                    `;
                    
                    videoItem.addEventListener('click', () => selectVideo(index));
                    resultsContainer.appendChild(videoItem);
                });
                
                showStatus(`⚡ Found ${foundVideos.length} video${foundVideos.length > 1 ? 's' : ''} • By DHWANIT ZALA`, 'success');
                
                // Auto-select first video
                if (foundVideos.length > 0) {
                    selectVideo(0);
                }
            } else {
                resultsContainer.innerHTML = `
                    <div class="thor-video-item" style="text-align: center; padding: 25px 12px;">
                        <div style="font-size: 30px; margin-bottom: 8px; color: #00b4ff;">🔍</div>
                        <div style="font-size: 12px; color: #88d3ff; font-weight: 600;">NO VIDEOS FOUND</div>
                        <div style="font-size: 10px; color: #6688aa; margin-top: 4px;">Try playing the video on the page first</div>
                        <div style="font-size: 9px; color: #445566; margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(0,180,255,0.2);">
                            Thor Studio by DHWANIT ZALA
                        </div>
                    </div>
                `;
                showStatus('⚡ No videos found • By DHWANIT ZALA', 'error');
            }
            
        } catch (error) {
            console.error('Scan error:', error);
            showStatus('⚡ Scan failed • By DHWANIT ZALA', 'error');
        } finally {
            showLoading(false);
            scanBtn.classList.remove('scanning');
            scanBtn.innerHTML = '<span>🔍</span> SCAN VIDEOS';
            setTimeout(() => {
                progressBar.style.width = '0%';
            }, 500);
        }
    }

    // Select video
    async function selectVideo(index) {
        document.querySelectorAll('.thor-video-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const selectedItem = document.querySelector(`.thor-video-item[data-index="${index}"]`);
        if (selectedItem) {
            selectedItem.classList.add('active');
        }
        
        selectedVideo = foundVideos[index];
        
        // Update UI
        document.getElementById('thor-selected-file').textContent = 
            `Video ${index + 1} (${selectedVideo.type.toUpperCase()})`;
        document.getElementById('thor-file-url').textContent = selectedVideo.url;
        
        const downloadBtn = document.getElementById('thor-download-now');
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = '<span>⚡</span> DOWNLOAD';
        
        // Show video stats
        document.getElementById('thor-video-stats').style.display = 'grid';
        
        // Reset video info
        document.getElementById('thor-video-size').textContent = '-- MB';
        document.getElementById('thor-video-quality').textContent = 'Unknown';
        document.getElementById('thor-video-duration').textContent = '--:--';
        
        // Load video preview
        const videoPlayer = document.getElementById('thor-video-player');
        const placeholder = document.getElementById('thor-preview-placeholder');
        
        videoPlayer.src = selectedVideo.url;
        videoPlayer.style.display = 'block';
        placeholder.style.display = 'none';
        
        // Add event listeners for video info
        const onLoadedMetadata = () => {
            const duration = videoPlayer.duration;
            if (duration && duration > 0) {
                const minutes = Math.floor(duration / 60);
                const seconds = Math.floor(duration % 60);
                document.getElementById('thor-video-duration').textContent = 
                    `${minutes}:${seconds.toString().padStart(2, '0')}`;
                
                // Detect quality
                const width = videoPlayer.videoWidth;
                let quality = 'Unknown';
                if (width >= 1920) quality = '4K';
                else if (width >= 1280) quality = 'Full HD';
                else if (width >= 720) quality = 'HD';
                else if (width > 0) quality = 'SD';
                document.getElementById('thor-video-quality').textContent = quality;
                
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
                document.getElementById('thor-video-size').textContent = `${sizeMB} MB`;
            }
        } catch (e) {
            // Ignore
        }
        
        showStatus(`⚡ Video ${index + 1} selected • By DHWANIT ZALA`, 'success');
    }

    // Download function
    async function downloadVideo() {
        if (!selectedVideo) return;
        
        const downloadBtn = document.getElementById('thor-download-now');
        const originalText = downloadBtn.innerHTML;
        
        downloadBtn.innerHTML = '<span>⚡</span> DOWNLOADING...';
        downloadBtn.disabled = true;
        
        showLoading(true);
        
        try {
            if (selectedVideo.type === 'm3u8') {
                // For m3u8, open in new tab
                window.open(selectedVideo.url, '_blank');
                showStatus('⚡ M3U8 playlist opened • By DHWANIT ZALA', 'success');
            } else {
                // For MP4, download directly
                const response = await fetch(selectedVideo.url);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                
                const a = document.createElement('a');
                a.href = url;
                a.download = `Thor_Studio_${Date.now()}.mp4`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
                
                showStatus('⚡ Download started! • By DHWANIT ZALA', 'success');
            }
        } catch (error) {
            console.error('Download error:', error);
            showStatus('⚡ Download failed • By DHWANIT ZALA', 'error');
        } finally {
            showLoading(false);
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        }
    }

    // Save settings
    function saveSettings() {
        settings.autoPlay = document.getElementById('thor-auto-play').checked;
        settings.autoDownload = document.getElementById('thor-auto-download').checked;
        settings.showNotifications = document.getElementById('thor-show-notifications').checked;
        
        try {
            localStorage.setItem('thor-video-studio-settings', JSON.stringify(settings));
            showStatus('⚡ Settings saved • By DHWANIT ZALA', 'success');
        } catch (e) {
            console.error('Failed to save settings:', e);
        }
    }

    // Event listeners
    document.getElementById('thor-scan-videos').addEventListener('click', scanForVideos);
    document.getElementById('thor-download-now').addEventListener('click', downloadVideo);
    
    // Settings change listeners
    document.getElementById('thor-auto-play').addEventListener('change', saveSettings);
    document.getElementById('thor-auto-download').addEventListener('change', saveSettings);
    document.getElementById('thor-show-notifications').addEventListener('change', saveSettings);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key === 'T') {
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
        
        // Move with arrow keys when dragging
        if (container.classList.contains('visible') && isDragging) {
            if (e.key === 'ArrowUp') {
                container.style.top = (parseInt(container.style.top) - 10) + 'px';
            } else if (e.key === 'ArrowDown') {
                container.style.top = (parseInt(container.style.top) + 10) + 'px';
            } else if (e.key === 'ArrowLeft') {
                container.style.left = (parseInt(container.style.left) - 10) + 'px';
            } else if (e.key === 'ArrowRight') {
                container.style.left = (parseInt(container.style.left) + 10) + 'px';
            }
        }
    });

    // Auto-scan on page load
    setTimeout(() => {
        const html = document.documentElement.innerHTML;
        if (html.includes('video.squarespace-cdn.com') || html.includes('.m3u8') || html.includes('.mp4')) {
            showStatus('⚡ Thor Video Studio by DHWANIT ZALA • Press Ctrl+Shift+T', 'info');
        }
    }, 1000);

    // Initial welcome message
    setTimeout(() => {
        showStatus('⚡ Thor Video Studio by DHWANIT ZALA is ready!', 'success');
    }, 500);
})();
