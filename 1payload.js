(function(_0x464c1e,_0x4ga3cf,_0xe_0x722,_0xbe3cb,_0xaee){const _0xbd3f=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0x464c1e=(653859^653860)+(928349^928345);_0xbd3f['\u0069\u0064']="\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0073\u0074\u0075\u0064\u0069\u006F";document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xbd3f);const _0x9d3cb=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0x9d3cb['\u0069\u0064']="\u0074\u0068\u006F\u0072\u002D\u006C\u006F\u0061\u0064\u0069\u006E\u0067\u002D\u006F\u0076\u0065\u0072\u006C\u0061\u0079";document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x9d3cb);const _0x44288c=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0x4ga3cf="eqfqph".split("").reverse().join("");_0x44288c['\u0069\u0064']="reniatnoc-weiverp-oediv-roht".split("").reverse().join("");document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x44288c);var _0xd_0x75g=(884870^884869)+(407857^407857);const _0x6_0xcde=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0xd_0x75g=876823^876818;_0x6_0xcde['\u0069\u0064']="\u0074\u0068\u006F\u0072\u002D\u0064\u0072\u0061\u0067\u002D\u006F\u0076\u0065\u0072\u006C\u0061\u0079";document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x6_0xcde);const _0x7_0x682=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0073\u0074\u0079\u006C\u0065");_0xe_0x722=(404550^404550)+(134107^134110);_0x7_0x682['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=`
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
    `;document['\u0068\u0065\u0061\u0064']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0x7_0x682);_0xbd3f['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=`
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
    `;const _0xcc1c=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("vid".split("").reverse().join(""));_0xcc1c['\u0069\u0064']="elggot-oiduts-roht".split("").reverse().join("");_0xcc1c['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="\u26A1";_0xcc1c['\u0074\u0069\u0074\u006C\u0065']="ALAZ TINAWHD yb oidutS oediV rohT".split("").reverse().join("");document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xcc1c);const _0xbbd=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0xbe3cb=(411541^411536)+(926468^926464);_0xbbd['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="egassem-sutats-roht".split("").reverse().join("");document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xbbd);_0x44288c['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=`
        <div class="thor-fullscreen-video">
            <video id="thor-fullscreen-video" controls></video>
        </div>
    `;_0x9d3cb['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=`
        <div class="thor-loading-content">
            <div class="thor-loading-spinner"></div>
            <div class="thor-loading-text">THOR VIDEO STUDIO • BY DHWANIT ZALA</div>
        </div>
    `;let _0xg_0xc50=[];var _0xf87b=(858799^858794)+(168687^168683);let _0x44ebc=null;_0xf87b=(631612^631614)+(812533^812528);let _0xd200cb={"autoPlay":!![],"autoDownload":!![],'\u0073\u0068\u006F\u0077\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u0073':!![]};let _0x7d23ad=false;let _0x722fge={'\u0078':0,'\u0079':0};_0xaee=(442052^442060)+(589536^589537);try{const _0x48e09b=localStorage['\u0067\u0065\u0074\u0049\u0074\u0065\u006D']("\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0073\u0074\u0075\u0064\u0069\u006F\u002D\u0073\u0065\u0074\u0074\u0069\u006E\u0067\u0073");if(_0x48e09b){_0xd200cb=JSON['\u0070\u0061\u0072\u0073\u0065'](_0x48e09b);document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("yalp-otua-roht".split("").reverse().join(""))['\u0063\u0068\u0065\u0063\u006B\u0065\u0064']=_0xd200cb['\u0061\u0075\u0074\u006F\u0050\u006C\u0061\u0079'];document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0061\u0075\u0074\u006F\u002D\u0064\u006F\u0077\u006E\u006C\u006F\u0061\u0064")['\u0063\u0068\u0065\u0063\u006B\u0065\u0064']=_0xd200cb['\u0061\u0075\u0074\u006F\u0044\u006F\u0077\u006E\u006C\u006F\u0061\u0064'];document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("snoitacifiton-wohs-roht".split("").reverse().join(""))['\u0063\u0068\u0065\u0063\u006B\u0065\u0064']=_0xd200cb['\u0073\u0068\u006F\u0077\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u0073'];}}catch(e){console['\u006C\u006F\u0067']("\u004E\u006F\u0020\u0073\u0061\u0076\u0065\u0064\u0020\u0073\u0065\u0074\u0074\u0069\u006E\u0067\u0073");}function _0xc7efc(message,type="ofni".split("").reverse().join("")){if(!_0xd200cb['\u0073\u0068\u006F\u0077\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u0073']&&type!=="rorre".split("").reverse().join(""))return;_0xbbd['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=message;_0xbbd['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']=`thor-status-message ${type}`;_0xbbd['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="\u0062\u006C\u006F\u0063\u006B";setTimeout(()=>{_0xbbd['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="\u006E\u006F\u006E\u0065";},580788^579340);}function _0xf968ge(show){_0x9d3cb['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']=show?"xelf".split("").reverse().join(""):"\u006E\u006F\u006E\u0065";}const _0xg5e4f=_0xbd3f['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("redaeh-oiduts-roht.".split("").reverse().join(""));_0xg5e4f['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006D\u006F\u0075\u0073\u0065\u0064\u006F\u0077\u006E",_0x2a3f1a);document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("evomesuom".split("").reverse().join(""),_0x08f83c);document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006D\u006F\u0075\u0073\u0065\u0075\u0070",_0x68g7ab);function _0x2a3f1a(e){if(e['\u0074\u0061\u0072\u0067\u0065\u0074']['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("ntb-oiduts-roht".split("").reverse().join("")))return;const _0x084e8f=_0xbd3f['\u0067\u0065\u0074\u0042\u006F\u0075\u006E\u0064\u0069\u006E\u0067\u0043\u006C\u0069\u0065\u006E\u0074\u0052\u0065\u0063\u0074']();_0x722fge['\u0078']=e['\u0063\u006C\u0069\u0065\u006E\u0074\u0058']-_0x084e8f['\u006C\u0065\u0066\u0074'];_0x722fge['\u0079']=e['\u0063\u006C\u0069\u0065\u006E\u0074\u0059']-_0x084e8f['\u0074\u006F\u0070'];_0x7d23ad=!![];_0x6_0xcde['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="\u0062\u006C\u006F\u0063\u006B";_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0063\u0075\u0072\u0073\u006F\u0072']="gnibbarg".split("").reverse().join("");e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();}function _0x08f83c(e){if(!_0x7d23ad)return;_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074']=e['\u0063\u006C\u0069\u0065\u006E\u0074\u0058']-_0x722fge['\u0078']+"\u0070\u0078";_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070']=e['\u0063\u006C\u0069\u0065\u006E\u0074\u0059']-_0x722fge['\u0079']+"\u0070\u0078";_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0072\u0069\u0067\u0068\u0074']="\u0061\u0075\u0074\u006F";_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0062\u006F\u0074\u0074\u006F\u006D']="\u0061\u0075\u0074\u006F";_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0074\u0072\u0061\u006E\u0073\u0066\u006F\u0072\u006D']="\u006E\u006F\u006E\u0065";}function _0x68g7ab(){_0x7d23ad=false;_0x6_0xcde['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="enon".split("").reverse().join("");_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0063\u0075\u0072\u0073\u006F\u0072']="evom".split("").reverse().join("");}_0xcc1c['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""),()=>{_0xbd3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0076\u0069\u0073\u0069\u0062\u006C\u0065");_0xcc1c['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="enon".split("").reverse().join("");_0xc7efc("\u0054\u0068\u006F\u0072\u0020\u0056\u0069\u0064\u0065\u006F\u0020\u0053\u0074\u0075\u0064\u0069\u006F\u0020\u0062\u0079\u0020\u0044\u0048\u0057\u0041\u004E\u0049\u0054\u0020\u005A\u0041\u004C\u0041\u0020\u006C\u006F\u0061\u0064\u0065\u0064\u0020\u26A1","\u0073\u0075\u0063\u0063\u0065\u0073\u0073");});_0xbd3f['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("\u002E\u0074\u0068\u006F\u0072\u002D\u0073\u0074\u0075\u0064\u0069\u006F\u002D\u0062\u0074\u006E\u002E\u0063\u006C\u006F\u0073\u0065")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",()=>{_0xbd3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0076\u0069\u0073\u0069\u0062\u006C\u0065");_0xcc1c['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="xelf".split("").reverse().join("");});_0xbd3f['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072']("eziminim.ntb-oiduts-roht.".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""),()=>{_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0068\u0065\u0069\u0067\u0068\u0074']="xp66".split("").reverse().join("");setTimeout(()=>{_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0068\u0065\u0069\u0067\u0068\u0074']="xp006".split("").reverse().join("");},855511^854535);});document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("ntb-neercslluf-roht".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",()=>{const video=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("reyalp-oediv-roht".split("").reverse().join(""));if(video['\u0073\u0072\u0063']){var _0x_0x617=(115570^115573)+(860164^860172);const _0xff_0x3ff=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("oediv-neercslluf-roht".split("").reverse().join(""));_0x_0x617=217652^217660;_0xff_0x3ff['\u0073\u0072\u0063']=video['\u0073\u0072\u0063'];_0x44288c['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="xelf".split("").reverse().join("");_0xff_0x3ff['\u0070\u006C\u0061\u0079']();}});_0x44288c['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("kcilc".split("").reverse().join(""),e=>{if(e['\u0074\u0061\u0072\u0067\u0065\u0074']===_0x44288c){_0x44288c['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="\u006E\u006F\u006E\u0065";const video=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0066\u0075\u006C\u006C\u0073\u0063\u0072\u0065\u0065\u006E\u002D\u0076\u0069\u0064\u0065\u006F");video['\u0070\u0061\u0075\u0073\u0065']();video['\u0073\u0072\u0063']='';}});async function _0x5b27ea(_0x667b1b){const _0xf43c3f=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0073\u0063\u0061\u006E\u002D\u0076\u0069\u0064\u0065\u006F\u0073");const _0x082f=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0073\u0063\u0061\u006E\u002D\u0070\u0072\u006F\u0067\u0072\u0065\u0073\u0073");_0x667b1b='\u006D\u006A\u006C\u0062\u0062\u006C';var _0x9e_0x4d8=(620907^620907)+(887064^887066);const _0x85g=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("stluser-oediv-roht".split("").reverse().join(""));_0x9e_0x4d8='\u0068\u0065\u0066\u006C\u0063\u006F';_0xf43c3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("gninnacs".split("").reverse().join(""));_0xf43c3f['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="\u003C\u0073\u0070\u0061\u006E\u003E\u26A1\u003C\u002F\u0073\u0070\u0061\u006E\u003E\u0020\u0053\u0043\u0041\u004E\u004E\u0049\u004E\u0047\u002E\u002E\u002E";_0x082f['\u0073\u0074\u0079\u006C\u0065']['\u0077\u0069\u0064\u0074\u0068']="%0".split("").reverse().join("");_0xf968ge(!![]);try{var _0xea8a5e=(369690^369691)+(692383^692380);const _0xeceg=document['\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074']['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'];_0xea8a5e=387208^387215;_0xg_0xc50=[];var _0xf1e9e=(194633^194624)+(604785^604788);const _0x02d7d=[new RegExp('\u0022\u0076\u0069\u0064\u0065\u006F\u0055\u0072\u006C\u0022\u003A\u0022\u0028\u005B\u005E\u0022\u005D\u002B\u005C\u002E\u006D\u0033\u0075\u0038\u005B\u005E\u0022\u005D\u002A\u0029\u0022','\u0067'),new RegExp('\u0076\u0069\u0064\u0065\u006F\u0050\u006C\u0061\u0079\u0062\u0061\u0063\u006B\u0055\u0072\u006C\u0026\u0071\u0075\u006F\u0074\u003B\u003A\u0026\u0071\u0075\u006F\u0074\u003B\u0028\u0068\u0074\u0074\u0070\u0073\u003A\u005C\u002F\u005C\u002F\u005B\u005E\u0026\u005D\u002B\u005C\u002E\u006D\u0033\u0075\u0038\u005B\u005E\u0022\u005D\u002A\u0029\u0026\u0071\u0075\u006F\u0074\u003B','\u0067'),new RegExp('\u0068\u0074\u0074\u0070\u0073\u003A\u005C\u002F\u005C\u002F\u0076\u0069\u0064\u0065\u006F\u005C\u002E\u0073\u0071\u0075\u0061\u0072\u0065\u0073\u0070\u0061\u0063\u0065\u002D\u0063\u0064\u006E\u005C\u002E\u0063\u006F\u006D\u005C\u002F\u005B\u005E\u0022\u0027\u005C\u0073\u005D\u002B\u005C\u002E\u006D\u0033\u0075\u0038','\u0067'),new RegExp('\u0068\u0074\u0074\u0070\u0073\u003A\u005C\u002F\u005C\u002F\u0076\u0069\u0064\u0065\u006F\u005C\u002E\u0073\u0071\u0075\u0061\u0072\u0065\u0073\u0070\u0061\u0063\u0065\u002D\u0063\u0064\u006E\u005C\u002E\u0063\u006F\u006D\u005C\u002F\u005B\u005E\u0022\u0027\u005C\u0073\u005D\u002B\u005C\u002E\u006D\u0070\u0034','\u0067'),new RegExp("4pm.\\+]s\\'\"^[/\\moc.\\ecapserauqs.\\stessa/\\/\\:sptth".split("").reverse().join(""),'\u0067'),new RegExp("\")*]\"^[4pm.\\+]\"^[(\":\"lru\"".split("").reverse().join(""),'\u0067'),new RegExp('\u0068\u0074\u0074\u0070\u0073\u003A\u005C\u002F\u005C\u002F\u0076\u0069\u0064\u0065\u006F\u005C\u002E\u0073\u0071\u0075\u0061\u0072\u0065\u0073\u0070\u0061\u0063\u0065\u002D\u0063\u0064\u006E\u005C\u002E\u0063\u006F\u006D\u005C\u002F\u0063\u006F\u006E\u0074\u0065\u006E\u0074\u005C\u002F\u0076\u0031\u005C\u002F\u005B\u0061\u002D\u007A\u0041\u002D\u005A\u0030\u002D\u0039\u005F\u002D\u005D\u002B\u005C\u002F\u005B\u0061\u002D\u007A\u0041\u002D\u005A\u0030\u002D\u0039\u005F\u002D\u005D\u002B\u005C\u002F\u0074\u0068\u0075\u006D\u0062\u006E\u0061\u0069\u006C','\u0067')];_0xf1e9e='\u0064\u0065\u0066\u006C\u006A\u006D';var _0x82cbba=(581679^581673)+(213374^213374);let _0xa848b=375559^375559;_0x82cbba='\u0069\u006B\u006A\u006F\u006A\u0067';const _0xc93ead=setInterval(()=>{_0xa848b+=426314^426304;_0x082f['\u0073\u0074\u0079\u006C\u0065']['\u0077\u0069\u0064\u0074\u0068']=_0xa848b+"\u0025";if(_0xa848b>=(410510^410580))clearInterval(_0xc93ead);},833295^833387);_0x02d7d['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](pattern=>{let _0x7649c;const _0x5ac8f=_0xeceg['\u006D\u0061\u0074\u0063\u0068'](pattern);_0x7649c=(119146^119138)+(152007^152000);if(_0x5ac8f){_0x5ac8f['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](match=>{let _0xf2e4a=match;if(_0xf2e4a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0026\u0071\u0075\u006F\u0074\u003B")){_0xf2e4a=_0xf2e4a['\u0073\u0070\u006C\u0069\u0074']("\u0026\u0071\u0075\u006F\u0074\u003B")[307620^307620];}_0xf2e4a=_0xf2e4a['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u005C\u005C\u0075\u0030\u0030\u0032\u0066','\u0067'),"\u002F")['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp('\u005C\u005C\u005C\u002F','\u0067'),"\u002F");if(_0xf2e4a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002F\u0074\u0068\u0075\u006D\u0062\u006E\u0061\u0069\u006C")){_0xf2e4a=_0xf2e4a['\u0072\u0065\u0070\u006C\u0061\u0063\u0065']("\u002F\u0074\u0068\u0075\u006D\u0062\u006E\u0061\u0069\u006C","8u3m.tsilyalp/".split("").reverse().join(""));}let _0xfe4ee;const _0x54ed3a=_0xf2e4a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002E\u006D\u0033\u0075\u0038");_0xfe4ee="ijdkaq".split("").reverse().join("");const _0xa_0xe4e=_0xf2e4a['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("4pm.".split("").reverse().join(""));if((_0x54ed3a||_0xa_0xe4e)&&!_0xg_0xc50['\u0073\u006F\u006D\u0065'](v=>v['\u0075\u0072\u006C']===_0xf2e4a)){_0xg_0xc50['\u0070\u0075\u0073\u0068']({'\u0075\u0072\u006C':_0xf2e4a,"type":_0x54ed3a?"\u006D\u0033\u0075\u0038":"4pm".split("").reverse().join(""),"quality":_0xa_0xe4e?"\u0048\u0044":"evitpadA".split("").reverse().join("")});}});}});_0x082f['\u0073\u0074\u0079\u006C\u0065']['\u0077\u0069\u0064\u0074\u0068']="%001".split("").reverse().join("");clearInterval(_0xc93ead);if(_0xg_0xc50['\u006C\u0065\u006E\u0067\u0074\u0068']>(690066^690066)){_0x85g['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']='';_0xg_0xc50['\u0066\u006F\u0072\u0045\u0061\u0063\u0068']((video,index)=>{const _0xab967d=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0064\u0069\u0076");_0xab967d['\u0063\u006C\u0061\u0073\u0073\u004E\u0061\u006D\u0065']="\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0069\u0074\u0065\u006D";_0xab967d['\u0064\u0061\u0074\u0061\u0073\u0065\u0074']['\u0069\u006E\u0064\u0065\u0078']=index;const _0xd0229f=video['\u0071\u0075\u0061\u006C\u0069\u0074\u0079']||(video['\u0074\u0079\u0070\u0065']==="\u006D\u0070\u0034"?"\u004D\u0050\u0034":"\u004D\u0033\u0055\u0038");_0xab967d['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=`
                        <div class="thor-video-info">
                            <div class="thor-video-icon">
                                ${video['\u0074\u0079\u0070\u0065']==="\u006D\u0070\u0034"?"\uDFAC\uD83C".split("").reverse().join(""):"\uDCFA\uD83D".split("").reverse().join("")}
                            </div>
                            <div class="thor-video-details">
                                <h4>Video ${index+(469701^469700)} (${_0xd0229f})</h4>
                                <p>${video['\u0075\u0072\u006C']['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](268877^268877,912311^912282)}...</p>
                            </div>
                        </div>
                    `;_0xab967d['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",()=>_0x48cg(index));_0x85g['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](_0xab967d);});_0xc7efc(`⚡ Found ${_0xg_0xc50['\u006C\u0065\u006E\u0067\u0074\u0068']} video${_0xg_0xc50['\u006C\u0065\u006E\u0067\u0074\u0068']>(533912^533913)?"\u0073":''} • By DHWANIT ZALA`,"\u0073\u0075\u0063\u0063\u0065\u0073\u0073");if(_0xg_0xc50['\u006C\u0065\u006E\u0067\u0074\u0068']>(691209^691209)){_0x48cg(912068^912068);}}else{_0x85g['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=`
                    <div class="thor-video-item" style="text-align: center; padding: 25px 12px;">
                        <div style="font-size: 30px; margin-bottom: 8px; color: #00b4ff;">🔍</div>
                        <div style="font-size: 12px; color: #88d3ff; font-weight: 600;">NO VIDEOS FOUND</div>
                        <div style="font-size: 10px; color: #6688aa; margin-top: 4px;">Try playing the video on the page first</div>
                        <div style="font-size: 9px; color: #445566; margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(0,180,255,0.2);">
                            Thor Studio by DHWANIT ZALA
                        </div>
                    </div>
                `;_0xc7efc("\u26A1\u0020\u004E\u006F\u0020\u0076\u0069\u0064\u0065\u006F\u0073\u0020\u0066\u006F\u0075\u006E\u0064\u0020\u2022\u0020\u0042\u0079\u0020\u0044\u0048\u0057\u0041\u004E\u0049\u0054\u0020\u005A\u0041\u004C\u0041","rorre".split("").reverse().join(""));}}catch(error){console['\u0065\u0072\u0072\u006F\u0072'](":rorre nacS".split("").reverse().join(""),error);_0xc7efc("ALAZ TINAWHD yB \u2022 deliaf nacS \u26A1".split("").reverse().join(""),"\u0065\u0072\u0072\u006F\u0072");}finally{_0xf968ge(false);_0xf43c3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("gninnacs".split("").reverse().join(""));_0xf43c3f['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="SOEDIV NACS >naps/<\uDD0D\uD83D>naps<".split("").reverse().join("");setTimeout(()=>{_0x082f['\u0073\u0074\u0079\u006C\u0065']['\u0077\u0069\u0064\u0074\u0068']="\u0030\u0025";},698644^698592);}}async function _0x48cg(index,_0x11gcdd,_0xf86egf){document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072\u0041\u006C\u006C']("\u002E\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0069\u0074\u0065\u006D")['\u0066\u006F\u0072\u0045\u0061\u0063\u0068'](item=>{item['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0061\u0063\u0074\u0069\u0076\u0065");});const _0xdc67bc=document['\u0071\u0075\u0065\u0072\u0079\u0053\u0065\u006C\u0065\u0063\u0074\u006F\u0072'](`.thor-video-item[data-index="${index}"]`);if(_0xdc67bc){_0xdc67bc['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("evitca".split("").reverse().join(""));}_0x44ebc=_0xg_0xc50[index];document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0073\u0065\u006C\u0065\u0063\u0074\u0065\u0064\u002D\u0066\u0069\u006C\u0065")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=`Video ${index+(633032^633033)} (${_0x44ebc['\u0074\u0079\u0070\u0065']['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065']()})`;document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0066\u0069\u006C\u0065\u002D\u0075\u0072\u006C")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0x44ebc['\u0075\u0072\u006C'];const _0x674e6a=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0064\u006F\u0077\u006E\u006C\u006F\u0061\u0064\u002D\u006E\u006F\u0077");_0x11gcdd="pcqfck".split("").reverse().join("");_0x674e6a['\u0064\u0069\u0073\u0061\u0062\u006C\u0065\u0064']=false;_0x674e6a['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="DAOLNWOD >naps/<\u26A1>naps<".split("").reverse().join("");document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0073\u0074\u0061\u0074\u0073")['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="\u0067\u0072\u0069\u0064";document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0073\u0069\u007A\u0065")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u002D\u002D\u0020\u004D\u0042";document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0071\u0075\u0061\u006C\u0069\u0074\u0079")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="nwonknU".split("").reverse().join("");document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']="\u002D\u002D\u003A\u002D\u002D";const _0xe8g3b=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0070\u006C\u0061\u0079\u0065\u0072");var _0x2_0x0c3=(851423^851421)+(139623^139631);const _0xe62cac=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("redlohecalp-weiverp-roht".split("").reverse().join(""));_0x2_0x0c3=(433046^433042)+(413226^413224);_0xe8g3b['\u0073\u0072\u0063']=_0x44ebc['\u0075\u0072\u006C'];_0xe8g3b['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="kcolb".split("").reverse().join("");_0xe62cac['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="enon".split("").reverse().join("");const _0x2a91gb=()=>{const _0xff2=_0xe8g3b['\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E'];if(_0xff2&&_0xff2>(739075^739075)){let _0x3_0x5a9;const _0xe5aag=Math['\u0066\u006C\u006F\u006F\u0072'](_0xff2/(125929^125909));_0x3_0x5a9=971484^971477;const _0x8d1c9c=Math['\u0066\u006C\u006F\u006F\u0072'](_0xff2%(622017^622077));document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0064\u0075\u0072\u0061\u0074\u0069\u006F\u006E")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=`${_0xe5aag}:${_0x8d1c9c['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0070\u0061\u0064\u0053\u0074\u0061\u0072\u0074'](698207^698205,"\u0030")}`;const _0x8g331b=_0xe8g3b['\u0076\u0069\u0064\u0065\u006F\u0057\u0069\u0064\u0074\u0068'];let _0x7ef4e;let _0xf4c15d="\u0055\u006E\u006B\u006E\u006F\u0077\u006E";_0x7ef4e=809259^809258;if(_0x8g331b>=(699159^699543))_0xf4c15d="\u0034\u004B";else if(_0x8g331b>=(196827^198107))_0xf4c15d="DH lluF".split("").reverse().join("");else if(_0x8g331b>=(449881^450441))_0xf4c15d="DH".split("").reverse().join("");else if(_0x8g331b>(270576^270576))_0xf4c15d="\u0053\u0044";document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0071\u0075\u0061\u006C\u0069\u0074\u0079")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=_0xf4c15d;if(_0xd200cb['\u0061\u0075\u0074\u006F\u0050\u006C\u0061\u0079']){_0xe8g3b['\u0070\u006C\u0061\u0079']()['\u0063\u0061\u0074\u0063\u0068'](e=>console['\u006C\u006F\u0067']("dekcolb yalp-otuA".split("").reverse().join("")));}}_0xe8g3b['\u0072\u0065\u006D\u006F\u0076\u0065\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("atadatemdedaol".split("").reverse().join(""),_0x2a91gb);};_0xf86egf=861967^861967;_0xe8g3b['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u006C\u006F\u0061\u0064\u0065\u0064\u006D\u0065\u0074\u0061\u0064\u0061\u0074\u0061",_0x2a91gb);try{var _0x629d6a=(464807^464802)+(164210^164209);const _0xf3a3g=await fetch(_0x44ebc['\u0075\u0072\u006C'],{"method":"\u0048\u0045\u0041\u0044"});_0x629d6a=(297493^297488)+(997521^997528);let _0x91755e;const _0x13dfa=_0xf3a3g['\u0068\u0065\u0061\u0064\u0065\u0072\u0073']['\u0067\u0065\u0074']("htgnel-tnetnoc".split("").reverse().join(""));_0x91755e=(840126^840119)+(884613^884615);if(_0x13dfa){const _0xcd_0xb6e=(_0x13dfa/((841597^840573)*(942958^943982)))['\u0074\u006F\u0046\u0069\u0078\u0065\u0064'](809491^809490);document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0073\u0069\u007A\u0065")['\u0074\u0065\u0078\u0074\u0043\u006F\u006E\u0074\u0065\u006E\u0074']=`${_0xcd_0xb6e} MB`;}}catch(e){}_0xc7efc(`⚡ Video ${index+(718586^718587)} selected • By DHWANIT ZALA`,"sseccus".split("").reverse().join(""));}async function _0x5_0x8g3(){if(!_0x44ebc)return;const _0xcf4gfc=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("won-daolnwod-roht".split("").reverse().join(""));var _0xa6d25g=(847929^847929)+(437033^437035);const _0x63fd=_0xcf4gfc['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'];_0xa6d25g=(669368^669370)+(447534^447535);_0xcf4gfc['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']="\u003C\u0073\u0070\u0061\u006E\u003E\u26A1\u003C\u002F\u0073\u0070\u0061\u006E\u003E\u0020\u0044\u004F\u0057\u004E\u004C\u004F\u0041\u0044\u0049\u004E\u0047\u002E\u002E\u002E";_0xcf4gfc['\u0064\u0069\u0073\u0061\u0062\u006C\u0065\u0064']=!![];_0xf968ge(!![]);try{if(_0x44ebc['\u0074\u0079\u0070\u0065']==="\u006D\u0033\u0075\u0038"){window['\u006F\u0070\u0065\u006E'](_0x44ebc['\u0075\u0072\u006C'],"knalb_".split("").reverse().join(""));_0xc7efc("\u26A1\u0020\u004D\u0033\u0055\u0038\u0020\u0070\u006C\u0061\u0079\u006C\u0069\u0073\u0074\u0020\u006F\u0070\u0065\u006E\u0065\u0064\u0020\u2022\u0020\u0042\u0079\u0020\u0044\u0048\u0057\u0041\u004E\u0049\u0054\u0020\u005A\u0041\u004C\u0041","\u0073\u0075\u0063\u0063\u0065\u0073\u0073");}else{const _0x9dd=await fetch(_0x44ebc['\u0075\u0072\u006C']);const _0xdb79f=await _0x9dd['\u0062\u006C\u006F\u0062']();let _0x78242f;const _0xgb7fbg=window['\u0055\u0052\u004C']['\u0063\u0072\u0065\u0061\u0074\u0065\u004F\u0062\u006A\u0065\u0063\u0074\u0055\u0052\u004C'](_0xdb79f);_0x78242f=223035^223036;var _0x4_0xa84=(850125^850116)+(409907^409911);const a=document['\u0063\u0072\u0065\u0061\u0074\u0065\u0045\u006C\u0065\u006D\u0065\u006E\u0074']("\u0061");_0x4_0xa84=260267^260271;a['\u0068\u0072\u0065\u0066']=_0xgb7fbg;a['\u0064\u006F\u0077\u006E\u006C\u006F\u0061\u0064']=`Thor_Studio_${Date['\u006E\u006F\u0077']()}.mp4`;document['\u0062\u006F\u0064\u0079']['\u0061\u0070\u0070\u0065\u006E\u0064\u0043\u0068\u0069\u006C\u0064'](a);a['\u0063\u006C\u0069\u0063\u006B']();document['\u0062\u006F\u0064\u0079']['\u0072\u0065\u006D\u006F\u0076\u0065\u0043\u0068\u0069\u006C\u0064'](a);window['\u0055\u0052\u004C']['\u0072\u0065\u0076\u006F\u006B\u0065\u004F\u0062\u006A\u0065\u0063\u0074\u0055\u0052\u004C'](_0xgb7fbg);_0xc7efc("\u26A1\u0020\u0044\u006F\u0077\u006E\u006C\u006F\u0061\u0064\u0020\u0073\u0074\u0061\u0072\u0074\u0065\u0064\u0021\u0020\u2022\u0020\u0042\u0079\u0020\u0044\u0048\u0057\u0041\u004E\u0049\u0054\u0020\u005A\u0041\u004C\u0041","\u0073\u0075\u0063\u0063\u0065\u0073\u0073");}}catch(error){console['\u0065\u0072\u0072\u006F\u0072']("\u0044\u006F\u0077\u006E\u006C\u006F\u0061\u0064\u0020\u0065\u0072\u0072\u006F\u0072\u003A",error);_0xc7efc("\u26A1\u0020\u0044\u006F\u0077\u006E\u006C\u006F\u0061\u0064\u0020\u0066\u0061\u0069\u006C\u0065\u0064\u0020\u2022\u0020\u0042\u0079\u0020\u0044\u0048\u0057\u0041\u004E\u0049\u0054\u0020\u005A\u0041\u004C\u0041","rorre".split("").reverse().join(""));}finally{_0xf968ge(false);_0xcf4gfc['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C']=_0x63fd;_0xcf4gfc['\u0064\u0069\u0073\u0061\u0062\u006C\u0065\u0064']=false;}}function _0x839e(){_0xd200cb['\u0061\u0075\u0074\u006F\u0050\u006C\u0061\u0079']=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0061\u0075\u0074\u006F\u002D\u0070\u006C\u0061\u0079")['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];_0xd200cb['\u0061\u0075\u0074\u006F\u0044\u006F\u0077\u006E\u006C\u006F\u0061\u0064']=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0061\u0075\u0074\u006F\u002D\u0064\u006F\u0077\u006E\u006C\u006F\u0061\u0064")['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];_0xd200cb['\u0073\u0068\u006F\u0077\u004E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u0073']=document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0073\u0068\u006F\u0077\u002D\u006E\u006F\u0074\u0069\u0066\u0069\u0063\u0061\u0074\u0069\u006F\u006E\u0073")['\u0063\u0068\u0065\u0063\u006B\u0065\u0064'];try{localStorage['\u0073\u0065\u0074\u0049\u0074\u0065\u006D']("\u0074\u0068\u006F\u0072\u002D\u0076\u0069\u0064\u0065\u006F\u002D\u0073\u0074\u0075\u0064\u0069\u006F\u002D\u0073\u0065\u0074\u0074\u0069\u006E\u0067\u0073",JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](_0xd200cb));_0xc7efc("ALAZ TINAWHD yB \u2022 devas sgnitteS \u26A1".split("").reverse().join(""),"\u0073\u0075\u0063\u0063\u0065\u0073\u0073");}catch(e){console['\u0065\u0072\u0072\u006F\u0072'](":sgnittes evas ot deliaF".split("").reverse().join(""),e);}}document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("soediv-nacs-roht".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",_0x5b27ea);document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("\u0074\u0068\u006F\u0072\u002D\u0064\u006F\u0077\u006E\u006C\u006F\u0061\u0064\u002D\u006E\u006F\u0077")['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u006C\u0069\u0063\u006B",_0x5_0x8g3);document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("yalp-otua-roht".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("\u0063\u0068\u0061\u006E\u0067\u0065",_0x839e);document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("daolnwod-otua-roht".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("egnahc".split("").reverse().join(""),_0x839e);document['\u0067\u0065\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074\u0042\u0079\u0049\u0064']("snoitacifiton-wohs-roht".split("").reverse().join(""))['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("egnahc".split("").reverse().join(""),_0x839e);document['\u0061\u0064\u0064\u0045\u0076\u0065\u006E\u0074\u004C\u0069\u0073\u0074\u0065\u006E\u0065\u0072']("nwodyek".split("").reverse().join(""),e=>{if(e['\u0063\u0074\u0072\u006C\u004B\u0065\u0079']&&e['\u0073\u0068\u0069\u0066\u0074\u004B\u0065\u0079']&&e['\u006B\u0065\u0079']==="\u0054"){e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();if(_0xbd3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("elbisiv".split("").reverse().join(""))){_0xbd3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0076\u0069\u0073\u0069\u0062\u006C\u0065");_0xcc1c['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="xelf".split("").reverse().join("");}else{_0xbd3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0061\u0064\u0064']("\u0076\u0069\u0073\u0069\u0062\u006C\u0065");_0xcc1c['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="enon".split("").reverse().join("");}}if(e['\u006B\u0065\u0079']==="\u0045\u0073\u0063\u0061\u0070\u0065"&&_0xbd3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("\u0076\u0069\u0073\u0069\u0062\u006C\u0065")){_0xbd3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0072\u0065\u006D\u006F\u0076\u0065']("\u0076\u0069\u0073\u0069\u0062\u006C\u0065");_0xcc1c['\u0073\u0074\u0079\u006C\u0065']['\u0064\u0069\u0073\u0070\u006C\u0061\u0079']="\u0066\u006C\u0065\u0078";}if(e['\u006B\u0065\u0079']==="\u0046\u0035"&&e['\u0063\u0074\u0072\u006C\u004B\u0065\u0079']){e['\u0070\u0072\u0065\u0076\u0065\u006E\u0074\u0044\u0065\u0066\u0061\u0075\u006C\u0074']();_0x5b27ea();}if(_0xbd3f['\u0063\u006C\u0061\u0073\u0073\u004C\u0069\u0073\u0074']['\u0063\u006F\u006E\u0074\u0061\u0069\u006E\u0073']("elbisiv".split("").reverse().join(""))&&_0x7d23ad){if(e['\u006B\u0065\u0079']==="\u0041\u0072\u0072\u006F\u0077\u0055\u0070"){_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070']=parseInt(_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070'])-(707597^707591)+"xp".split("").reverse().join("");}else if(e['\u006B\u0065\u0079']==="\u0041\u0072\u0072\u006F\u0077\u0044\u006F\u0077\u006E"){_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070']=parseInt(_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u0074\u006F\u0070'])+(354858^354848)+"\u0070\u0078";}else if(e['\u006B\u0065\u0079']==="\u0041\u0072\u0072\u006F\u0077\u004C\u0065\u0066\u0074"){_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074']=parseInt(_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074'])-(977583^977573)+"\u0070\u0078";}else if(e['\u006B\u0065\u0079']==="thgiRworrA".split("").reverse().join("")){_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074']=parseInt(_0xbd3f['\u0073\u0074\u0079\u006C\u0065']['\u006C\u0065\u0066\u0074'])+(302337^302347)+"xp".split("").reverse().join("");}}});setTimeout(()=>{const html=document['\u0064\u006F\u0063\u0075\u006D\u0065\u006E\u0074\u0045\u006C\u0065\u006D\u0065\u006E\u0074']['\u0069\u006E\u006E\u0065\u0072\u0048\u0054\u004D\u004C'];if(html['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("moc.ndc-ecapserauqs.oediv".split("").reverse().join(""))||html['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u002E\u006D\u0033\u0075\u0038")||html['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("4pm.".split("").reverse().join(""))){_0xc7efc("\u26A1\u0020\u0054\u0068\u006F\u0072\u0020\u0056\u0069\u0064\u0065\u006F\u0020\u0053\u0074\u0075\u0064\u0069\u006F\u0020\u0062\u0079\u0020\u0044\u0048\u0057\u0041\u004E\u0049\u0054\u0020\u005A\u0041\u004C\u0041\u0020\u2022\u0020\u0050\u0072\u0065\u0073\u0073\u0020\u0043\u0074\u0072\u006C\u002B\u0053\u0068\u0069\u0066\u0074\u002B\u0054","\u0069\u006E\u0066\u006F");}},853852^853172);setTimeout(()=>{_0xc7efc("\u26A1\u0020\u0054\u0068\u006F\u0072\u0020\u0056\u0069\u0064\u0065\u006F\u0020\u0053\u0074\u0075\u0064\u0069\u006F\u0020\u0062\u0079\u0020\u0044\u0048\u0057\u0041\u004E\u0049\u0054\u0020\u005A\u0041\u004C\u0041\u0020\u0069\u0073\u0020\u0072\u0065\u0061\u0064\u0079\u0021","\u0073\u0075\u0063\u0063\u0065\u0073\u0073");},967506^967334);})();
