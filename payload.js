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
        /* Main Container - Smaller Size */
        #thor-video-studio {
            position: fixed;
            top: 50px;
            left: 50px;
            width: 650px;
            height: 550px;
            background: linear-gradient(135deg, #0a0a1a 0%, #0f1a30 100%);
            border: 2px solid #00b4ff;
            border-radius: 15px;
            box-shadow: 0 0 30px rgba(0, 180, 255, 0.4);
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

        /* Header - Drag Handle */
        .thor-studio-header {
            background: linear-gradient(135deg, #001f3f 0%, #003366 100%);
            padding: 12px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 2px solid #00b4ff;
            cursor: move;
        }

        .thor-studio-title {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .thor-studio-logo {
            width: 35px;
            height: 35px;
            background: linear-gradient(135deg, #00b4ff 0%, #0066ff 100%);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 900;
            font-size: 20px;
            color: white;
            box-shadow: 0 0 10px rgba(0, 180, 255, 0.5);
        }

        .thor-studio-text {
            display: flex;
            flex-direction: column;
        }

        .thor-studio-main-title {
            font-size: 16px;
            font-weight: 800;
            color: #00e0ff;
            letter-spacing: -0.5px;
            text-shadow: 0 0 10px rgba(0, 224, 255, 0.5);
        }

        .thor-studio-subtitle {
            font-size: 10px;
            color: #88d3ff;
            font-weight: 600;
        }

        .thor-developer-name {
            font-size: 11px;
            font-weight: 700;
            color: #00b4ff;
            margin-left: 10px;
            padding: 3px 8px;
            background: rgba(0, 180, 255, 0.1);
            border-radius: 6px;
            border: 1px solid rgba(0, 180, 255, 0.3);
        }

        .thor-studio-controls {
            display: flex;
            gap: 5px;
        }

        .thor-studio-btn {
            width: 28px;
            height: 28px;
            border-radius: 7px;
            border: 1px solid rgba(0, 180, 255, 0.4);
            background: rgba(0, 180, 255, 0.1);
            color: #88d3ff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            font-weight: bold;
        }

        .thor-studio-btn:hover {
            background: rgba(0, 180, 255, 0.3);
            color: #ffffff;
            transform: translateY(-1px);
        }

        .thor-studio-btn.close:hover {
            background: #ff3333;
            border-color: #ff3333;
        }

        /* Body Layout */
        .thor-studio-body {
            display: flex;
            height: calc(100% - 60px);
            overflow: hidden;
        }

        /* Left Panel - Controls */
        .thor-studio-left {
            width: 250px;
            background: rgba(10, 25, 50, 0.6);
            padding: 12px;
            border-right: 1px solid rgba(0, 180, 255, 0.2);
            display: flex;
            flex-direction: column;
            gap: 12px;
            overflow-y: auto;
        }

        .thor-studio-left::-webkit-scrollbar {
            width: 3px;
        }

        .thor-studio-left::-webkit-scrollbar-track {
            background: rgba(0, 180, 255, 0.1);
            border-radius: 2px;
        }

        .thor-studio-left::-webkit-scrollbar-thumb {
            background: linear-gradient(135deg, #00b4ff 0%, #0066ff 100%);
            border-radius: 2px;
        }

        /* Right Panel - Video Preview */
        .thor-studio-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            padding: 12px;
            gap: 12px;
            overflow-y: auto;
        }

        .thor-studio-right::-webkit-scrollbar {
            width: 3px;
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
            border-radius: 10px;
            padding: 12px;
        }

        .thor-control-group-title {
            font-size: 11px;
            font-weight: 800;
            color: #00b4ff;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        /* Scan Button */
        .thor-scan-btn {
            background: linear-gradient(135deg, #00b4ff 0%, #0066ff 100%);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            width: 100%;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 10px rgba(0, 180, 255, 0.3);
        }

        .thor-scan-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 20px rgba(0, 180, 255, 0.5);
        }

        .thor-scan-btn.scanning {
            background: linear-gradient(135deg, #0088cc 0%, #0055aa 100%);
            pointer-events: none;
        }

        /* Results List */
        .thor-results-container {
            max-height: 180px;
            overflow-y: auto;
            margin-top: 8px;
        }

        .thor-results-container::-webkit-scrollbar {
            width: 3px;
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
            border-radius: 6px;
            padding: 10px;
            margin-bottom: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
        }

        .thor-video-item:hover {
            background: rgba(0, 180, 255, 0.1);
            border-color: #00b4ff;
        }

        .thor-video-item.active {
            background: rgba(0, 180, 255, 0.15);
            border-color: #00b4ff;
            box-shadow: 0 0 8px rgba(0, 180, 255, 0.3);
        }

        .thor-video-info {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 1;
        }

        .thor-video-icon {
            width: 30px;
            height: 30px;
            background: rgba(0, 180, 255, 0.15);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: #00b4ff;
            flex-shrink: 0;
        }

        .thor-video-details {
            flex: 1;
            min-width: 0;
        }

        .thor-video-details h4 {
            font-size: 12px;
            font-weight: 700;
            margin: 0 0 3px 0;
            color: #e6f7ff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .thor-video-details p {
            font-size: 9px;
            color: #88d3ff;
            margin: 0;
            font-family: 'Monaco', 'Courier New', monospace;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        /* Video Item Download Button */
        .thor-item-download-btn {
            width: 28px;
            height: 28px;
            border-radius: 6px;
            border: 1px solid rgba(0, 180, 255, 0.3);
            background: rgba(0, 204, 136, 0.15);
            color: #00cc88;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
            font-size: 14px;
            flex-shrink: 0;
        }

        .thor-item-download-btn:hover {
            background: rgba(0, 204, 136, 0.3);
            color: #ffffff;
            transform: scale(1.1);
        }

        /* Video Preview */
        .thor-preview-container {
            height: 180px;
            background: #000;
            border-radius: 10px;
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
            font-size: 12px;
        }

        .thor-preview-placeholder i {
            font-size: 35px;
            margin-bottom: 8px;
            display: block;
            color: #333;
        }

        /* Download Section */
        .thor-download-section {
            background: rgba(0, 180, 255, 0.05);
            border: 1px solid rgba(0, 180, 255, 0.2);
            border-radius: 10px;
            padding: 12px;
        }

        .thor-download-info {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            flex-wrap: wrap;
            gap: 8px;
        }

        .thor-file-info {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 1;
        }

        .thor-file-icon {
            width: 40px;
            height: 40px;
            background: rgba(0, 180, 255, 0.15);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #00b4ff;
            flex-shrink: 0;
        }

        .thor-file-details {
            flex: 1;
            min-width: 0;
        }

        .thor-file-details h4 {
            font-size: 13px;
            font-weight: 800;
            margin: 0 0 3px 0;
            color: #e6f7ff;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .thor-file-details p {
            font-size: 9px;
            color: #88d3ff;
            margin: 0;
            font-family: 'Monaco', 'Courier New', monospace;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .thor-download-btn {
            background: linear-gradient(135deg, #00cc88 0%, #009966 100%);
            color: white;
            border: none;
            padding: 10px 16px;
            border-radius: 8px;
            font-size: 12px;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 0 10px rgba(0, 204, 136, 0.3);
            flex-shrink: 0;
        }

        .thor-download-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 20px rgba(0, 204, 136, 0.5);
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
            gap: 8px;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid rgba(0, 180, 255, 0.2);
        }

        .thor-stat-item {
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: 10px;
            color: #88d3ff;
        }

        .thor-stat-item i {
            color: #00b4ff;
            font-size: 11px;
        }

        /* Developer Section */
        .thor-developer-section {
            margin-top: 8px;
            padding: 10px;
            background: rgba(0, 180, 255, 0.08);
            border-radius: 8px;
            text-align: center;
            border: 1px solid rgba(0, 180, 255, 0.2);
        }

        .thor-developer-label {
            font-size: 8px;
            color: #88d3ff;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 3px;
        }

        .thor-developer-name-large {
            color: #00e0ff;
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.5px;
            text-shadow: 0 0 8px rgba(0, 224, 255, 0.5);
        }

        .thor-developer-tag {
            color: #88d3ff;
            font-size: 9px;
            font-weight: 600;
            margin-top: 2px;
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
            width: 40px;
            height: 40px;
            border: 3px solid rgba(0, 180, 255, 0.1);
            border-top-color: #00b4ff;
            border-radius: 50%;
            animation: thorSpin 1s linear infinite;
            margin: 0 auto 12px;
        }

        @keyframes thorSpin {
            to { transform: rotate(360deg); }
        }

        .thor-loading-text {
            font-size: 12px;
            font-weight: 600;
            color: #00b4ff;
            letter-spacing: 1px;
        }

        /* Toggle Button */
        #thor-studio-toggle {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 45px;
            height: 45px;
            background: linear-gradient(135deg, #00b4ff 0%, #0066ff 100%);
            color: white;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 999998;
            font-weight: 900;
            font-size: 18px;
            box-shadow: 0 0 15px rgba(0, 180, 255, 0.5);
            transition: all 0.3s ease;
            border: 2px solid white;
        }

        #thor-studio-toggle:hover {
            transform: scale(1.1) rotate(90deg);
            box-shadow: 0 0 25px rgba(0, 180, 255, 0.8);
        }

        /* Progress Bar */
        .thor-progress {
            width: 100%;
            height: 4px;
            background: rgba(0, 180, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            margin-top: 8px;
        }

        .thor-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #00b4ff, #0066ff);
            width: 0%;
            transition: width 0.3s ease;
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
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 12px;
            color: white;
            z-index: 999999;
            display: none;
            max-width: 300px;
            animation: thorSlideInRight 0.3s ease;
            box-shadow: 0 0 15px rgba(0, 180, 255, 0.3);
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
        }

        .thor-status-message.error {
            border-color: #ff3333;
        }

        /* Developer Watermark */
        .thor-watermark {
            position: absolute;
            bottom: 6px;
            left: 12px;
            font-size: 9px;
            color: #00b4ff;
            font-weight: 700;
            opacity: 0.7;
        }

        /* Version Badge */
        .thor-version {
            position: absolute;
            bottom: 6px;
            right: 12px;
            font-size: 8px;
            color: #88d3ff;
        }
    `;
    document.head.appendChild(style);

    // HTML Structure
    container.innerHTML = `
        <div class="thor-studio-header">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div class="thor-studio-title">
                    <div class="thor-studio-logo">⚡</div>
                    <div class="thor-studio-text">
                        <div class="thor-studio-main-title">THOR VIDEO</div>
                        <div class="thor-studio-subtitle">BY DHWANIT ZALA</div>
                    </div>
                </div>
                <div class="thor-developer-name">
                    DHWANIT ZALA
                </div>
            </div>
            <div class="thor-studio-controls">
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
                        <div class="thor-video-item" style="text-align: center; padding: 20px 10px; justify-content: center;">
                            <div>
                                <div style="font-size: 25px; margin-bottom: 6px; color: #00b4ff;">🎬</div>
                                <div style="font-size: 11px; color: #88d3ff; font-weight: 600;">NO VIDEOS FOUND</div>
                                <div style="font-size: 9px; color: #6688aa; margin-top: 3px;">Click SCAN to find videos</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="thor-developer-section">
                    <div class="thor-developer-label">Created & Developed by</div>
                    <div class="thor-developer-name-large">DHWANIT ZALA</div>
                    <div class="thor-developer-tag">Video Download Expert</div>
                </div>
            </div>
            <div class="thor-studio-right">
                <div class="thor-preview-container">
                    <video id="thor-video-player" controls></video>
                    <div class="thor-preview-placeholder" id="thor-preview-placeholder">
                        <i>⚡</i>
                        <div>VIDEO PREVIEW</div>
                        <div style="font-size: 10px; color: #6688aa; margin-top: 5px;">Select a video from the list</div>
                    </div>
                </div>

                <div class="thor-download-section">
                    <div class="thor-download-info">
                        <div class="thor-file-info">
                            <div class="thor-file-icon">⬇️</div>
                            <div class="thor-file-details">
                                <h4 id="thor-selected-file">NO VIDEO SELECTED</h4>
                                <p id="thor-file-url">Select a video from the list</p>
                                <p style="color: #00b4ff; font-size: 8px; margin-top: 2px;">By DHWANIT ZALA</p>
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
                </div>
            </div>
        </div>
        <div class="thor-watermark">THOR STUDIO • DHWANIT ZALA</div>
        <div class="thor-version">v2.0</div>
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
    let isDragging = false;
    let dragOffset = { x: 0, y: 0 };

    // Show status
    function showStatus(message, type = 'info') {
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

    // Enhanced video scanning function
    async function scanForVideos() {
        const scanBtn = document.getElementById('thor-scan-videos');
        const progressBar = document.getElementById('thor-scan-progress');
        const resultsContainer = document.getElementById('thor-video-results');
        
        scanBtn.classList.add('scanning');
        scanBtn.innerHTML = '<span>⚡</span> SCANNING...';
        progressBar.style.width = '0%';
        
        showLoading(true);
        
        try {
            // Get page content
            const html = document.documentElement.outerHTML;
            foundVideos = [];
            
            // Video URL patterns
            const patterns = [
                // Squarespace specific
                /videoPlaybackUrl[^=]*=["']([^"']+\.m3u8[^"']*)["']/gi,
                /"videoUrl"\s*:\s*"([^"]+\.m3u8[^"]*)"/gi,
                /https:\/\/video\.squarespace-cdn\.com[^"'\s]+\.m3u8/gi,
                /https:\/\/video\.squarespace-cdn\.com[^"'\s]+\.mp4/gi,
                
                // General video patterns
                /https?:\/\/[^\s"'<>]+\.(m3u8|mp4|mpd|webm|avi|mov|wmv|flv|mkv)(?![^<]*>)/gi,
                /"url"\s*:\s*"([^"]+\.(m3u8|mp4|mpd))"/gi,
                /"src"\s*:\s*"([^"]+\.(mp4|webm|ogg))"/gi,
                /"videoUrl"\s*:\s*"([^"]+)"/gi,
                
                // Video elements
                /<video[^>]+src=["']([^"']+)["']/gi,
                /<source[^>]+src=["']([^"']+)["']/gi,
                
                // Thumbnail to m3u8 conversion
                /(https:\/\/video\.squarespace-cdn\.com\/content\/v1\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+)\/thumbnail/gi
            ];
            
            // Progress simulation
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += 5;
                progressBar.style.width = Math.min(progress, 90) + '%';
                if (progress >= 90) clearInterval(progressInterval);
            }, 100);
            
            const videoUrls = new Set();
            
            // Method 1: Check video elements in DOM
            const videoElements = document.querySelectorAll('video');
            videoElements.forEach(video => {
                if (video.src) videoUrls.add(video.src);
                if (video.querySelector('source')) {
                    video.querySelectorAll('source').forEach(source => {
                        if (source.src) videoUrls.add(source.src);
                    });
                }
            });
            
            // Method 2: Check iframes
            const iframes = document.querySelectorAll('iframe[src*="video"], iframe[src*="player"]');
            iframes.forEach(iframe => {
                try {
                    if (iframe.src) videoUrls.add(iframe.src);
                } catch (e) {}
            });
            
            // Method 3: Scan HTML with patterns
            patterns.forEach(pattern => {
                const matches = html.match(pattern);
                if (matches) {
                    matches.forEach(match => {
                        let url = match;
                        
                        // Extract URL from patterns
                        if (url.includes('videoPlaybackUrl')) {
                            const urlMatch = url.match(/videoPlaybackUrl[^=]*=["']([^"']+)["']/);
                            if (urlMatch && urlMatch[1]) {
                                url = urlMatch[1];
                            }
                        } else if (url.includes('"url"') || url.includes('"src"') || url.includes('"videoUrl"')) {
                            const urlMatch = url.match(/"([^"]+\.(m3u8|mp4|mpd))"/);
                            if (urlMatch && urlMatch[1]) {
                                url = urlMatch[1];
                            }
                        }
                        
                        // Convert thumbnail to m3u8
                        if (url.includes('/thumbnail')) {
                            url = url.replace('/thumbnail', '/playlist.m3u8');
                        }
                        
                        // Clean URL
                        url = url.replace(/\\u002f/g, '/')
                                 .replace(/\\\//g, '/')
                                 .replace(/\\/g, '')
                                 .replace(/"/g, '')
                                 .replace(/'/g, '')
                                 .replace(/&quot;/g, '')
                                 .split('?')[0]
                                 .split('&')[0];
                        
                        // Validate URL
                        if (url.startsWith('http') && 
                            (url.includes('.m3u8') || url.includes('.mp4') || url.includes('.mpd') || 
                             url.includes('.webm') || url.includes('.avi') || url.includes('.mov'))) {
                            videoUrls.add(url);
                        }
                    });
                }
            });
            
            // Final progress
            progressBar.style.width = '100%';
            clearInterval(progressInterval);
            
            // Process found URLs
            const uniqueUrls = Array.from(videoUrls);
            
            if (uniqueUrls.length > 0) {
                resultsContainer.innerHTML = '';
                uniqueUrls.forEach((url, index) => {
                    const type = url.includes('.m3u8') ? 'm3u8' : 
                                 url.includes('.mpd') ? 'mpd' : 
                                 url.includes('.mp4') ? 'mp4' : 'video';
                    
                    const videoItem = document.createElement('div');
                    videoItem.className = 'thor-video-item';
                    videoItem.dataset.index = index;
                    
                    videoItem.innerHTML = `
                        <div class="thor-video-info">
                            <div class="thor-video-icon">
                                ${type === 'm3u8' ? '📺' : type === 'mpd' ? '📡' : '🎬'}
                            </div>
                            <div class="thor-video-details">
                                <h4>${type.toUpperCase()} ${index + 1}</h4>
                                <p>${url.substring(0, 30)}...</p>
                            </div>
                        </div>
                        <button class="thor-item-download-btn" data-url="${url}" data-type="${type}">
                            ⬇
                        </button>
                    `;
                    
                    videoItem.addEventListener('click', (e) => {
                        if (!e.target.classList.contains('thor-item-download-btn')) {
                            selectVideo(index, url, type);
                        }
                    });
                    
                    // Add download button listener
                    const downloadBtn = videoItem.querySelector('.thor-item-download-btn');
                    downloadBtn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        downloadFile(url, type);
                    });
                    
                    resultsContainer.appendChild(videoItem);
                    
                    foundVideos.push({ url, type, index });
                });
                
                showStatus(`⚡ Found ${uniqueUrls.length} videos • By DHWANIT ZALA`, 'success');
                
                // Auto-select first video
                if (uniqueUrls.length > 0) {
                    selectVideo(0, uniqueUrls[0], uniqueUrls[0].includes('.m3u8') ? 'm3u8' : 
                              uniqueUrls[0].includes('.mpd') ? 'mpd' : 'mp4');
                }
            } else {
                resultsContainer.innerHTML = `
                    <div class="thor-video-item" style="text-align: center; padding: 20px 10px; justify-content: center;">
                        <div>
                            <div style="font-size: 25px; margin-bottom: 6px; color: #00b4ff;">🔍</div>
                            <div style="font-size: 11px; color: #88d3ff; font-weight: 600;">NO VIDEOS FOUND</div>
                            <div style="font-size: 9px; color: #6688aa; margin-top: 3px;">Try playing the video on the page first</div>
                        </div>
                    </div>
                `;
                showStatus('⚡ No videos found • Try playing video first • By DHWANIT ZALA', 'error');
            }
            
        } catch (error) {
            console.error('Scan error:', error);
            showStatus('⚡ Scan error • By DHWANIT ZALA', 'error');
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
    async function selectVideo(index, url, type) {
        document.querySelectorAll('.thor-video-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const selectedItem = document.querySelector(`.thor-video-item[data-index="${index}"]`);
        if (selectedItem) {
            selectedItem.classList.add('active');
        }
        
        selectedVideo = { url, type };
        
        // Update UI
        document.getElementById('thor-selected-file').textContent = 
            `${type.toUpperCase()} ${index + 1}`;
        document.getElementById('thor-file-url').textContent = url;
        
        const downloadBtn = document.getElementById('thor-download-now');
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = `<span>⚡</span> DOWNLOAD`;
        
        // Show video stats
        document.getElementById('thor-video-stats').style.display = 'grid';
        
        // Reset video info
        document.getElementById('thor-video-size').textContent = '-- MB';
        document.getElementById('thor-video-quality').textContent = 'Unknown';
        document.getElementById('thor-video-duration').textContent = '--:--';
        
        // Load video preview
        const videoPlayer = document.getElementById('thor-video-player');
        const placeholder = document.getElementById('thor-preview-placeholder');
        
        videoPlayer.src = url;
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
                if (width >= 3840) quality = '4K';
                else if (width >= 2560) quality = '2K';
                else if (width >= 1920) quality = 'Full HD';
                else if (width >= 1280) quality = 'HD';
                else if (width >= 854) quality = 'SD';
                else if (width > 0) quality = 'Low';
                document.getElementById('thor-video-quality').textContent = quality;
            }
        };
        
        videoPlayer.addEventListener('loadedmetadata', onLoadedMetadata);
        
        // Try to get file size
        try {
            const response = await fetch(url, { method: 'HEAD' });
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

    // Download file function - FIXED to actually download
    async function downloadFile(url, type) {
        const downloadBtn = document.getElementById('thor-download-now');
        const originalText = downloadBtn.innerHTML;
        
        if (downloadBtn.id === 'thor-download-now') {
            downloadBtn.innerHTML = '<span>⚡</span> DOWNLOADING...';
            downloadBtn.disabled = true;
        }
        
        showLoading(true);
        
        try {
            // For MP4 files, download directly
            if (type === 'mp4' || url.includes('.mp4')) {
                try {
                    const response = await fetch(url);
                    const blob = await response.blob();
                    const downloadUrl = window.URL.createObjectURL(blob);
                    
                    const a = document.createElement('a');
                    a.href = downloadUrl;
                    a.download = `Thor_Video_${Date.now()}.mp4`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(downloadUrl);
                    
                    showStatus('⚡ MP4 downloaded! • By DHWANIT ZALA', 'success');
                } catch (fetchError) {
                    // If fetch fails, use alternative method
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `Thor_Video_${Date.now()}.mp4`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    
                    showStatus('⚡ Download started! • By DHWANIT ZALA', 'success');
                }
            } 
            // For M3U8 files, download the playlist file
            else if (type === 'm3u8' || url.includes('.m3u8')) {
                try {
                    const response = await fetch(url);
                    const text = await response.text();
                    const blob = new Blob([text], { type: 'application/vnd.apple.mpegurl' });
                    const downloadUrl = window.URL.createObjectURL(blob);
                    
                    const a = document.createElement('a');
                    a.href = downloadUrl;
                    a.download = `Thor_Playlist_${Date.now()}.m3u8`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(downloadUrl);
                    
                    showStatus('⚡ M3U8 playlist downloaded • By DHWANIT ZALA', 'success');
                } catch (fetchError) {
                    // Alternative method for M3U8
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `Thor_Playlist_${Date.now()}.m3u8`;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    
                    showStatus('⚡ M3U8 download started • By DHWANIT ZALA', 'success');
                }
            }
            // For other video files
            else {
                const extension = url.split('.').pop().split('?')[0];
                const a = document.createElement('a');
                a.href = url;
                a.download = `Thor_Video_${Date.now()}.${extension}`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                showStatus(`⚡ ${extension.toUpperCase()} download started • By DHWANIT ZALA`, 'success');
            }
        } catch (error) {
            console.error('Download error:', error);
            showStatus('⚡ Download failed • By DHWANIT ZALA', 'error');
        } finally {
            showLoading(false);
            if (downloadBtn.id === 'thor-download-now') {
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
            }
        }
    }

    // Event listeners
    document.getElementById('thor-scan-videos').addEventListener('click', scanForVideos);
    document.getElementById('thor-download-now').addEventListener('click', () => {
        if (selectedVideo) {
            downloadFile(selectedVideo.url, selectedVideo.type);
        }
    });

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
    });

    // Auto-detect videos on page load
    setTimeout(() => {
        const html = document.documentElement.innerHTML;
        if (html.includes('video.') || html.includes('.m3u8') || html.includes('.mp4')) {
            showStatus('⚡ Thor Video Studio by DHWANIT ZALA • Press Ctrl+Shift+T', 'info');
        }
    }, 1000);

    // Initial welcome message
    setTimeout(() => {
        showStatus('⚡ Thor Video Studio by DHWANIT ZALA is ready!', 'success');
    }, 500);
})();
