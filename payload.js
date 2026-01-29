// Replace the entire scanForVideos function with this improved version
async function scanForVideos() {
    scanBtn.classList.add('scanning');
    scanBtn.innerHTML = '';
    scanBtn.appendChild(createElement('span', '', '⚡'));
    scanBtn.appendChild(document.createTextNode(' SCANNING...'));
    
    progressBar.style.width = '0%';
    
    showLoading(true);
    
    try {
        // Get page content
        const html = document.documentElement.outerHTML;
        foundVideos = [];
        
        // NEW: First, look for direct MP4 video elements and sources
        const directMP4s = new Set();
        
        // Method 1: Direct video elements with MP4 sources
        const videoElements = document.querySelectorAll('video');
        videoElements.forEach(video => {
            // Check video element src
            if (video.src && video.src.includes('.mp4')) {
                directMP4s.add(video.src);
            }
            
            // Check all source elements
            const sources = video.querySelectorAll('source');
            sources.forEach(source => {
                if (source.src && source.src.includes('.mp4')) {
                    directMP4s.add(source.src);
                }
            });
        });
        
        // Method 2: Look for MP4 URLs in the HTML content
        const mp4Patterns = [
            // Direct MP4 URLs
            /https?:\/\/[^\s"'<>]+\.mp4(?:\?[^\s"'<>]*)?/gi,
            // Video source patterns
            /src=["']([^"']+\.mp4(?:\?[^"']*)?)["']/gi,
            // Video URL patterns
            /"url"\s*:\s*"([^"]+\.mp4)"/gi,
            /video.*?["'](https?:\/\/[^"']+\.mp4)["']/gi,
            // Squarespace direct MP4
            /https:\/\/video\.squarespace-cdn\.com[^"'\s]+\.mp4/gi,
            // Content delivery MP4
            /https?:\/\/[^"'\s]+\/content\/[^"'\s]+\.mp4/gi
        ];
        
        mp4Patterns.forEach(pattern => {
            const matches = html.match(pattern);
            if (matches) {
                matches.forEach(match => {
                    let url = match;
                    
                    // Extract URL from src attributes
                    if (url.includes('src=')) {
                        const match = url.match(/src=["']([^"']+)["']/);
                        if (match && match[1]) url = match[1];
                    }
                    
                    // Clean URL
                    url = url.trim()
                        .replace(/^["']|["']$/g, '')
                        .replace(/\\u002f/g, '/')
                        .replace(/\\\//g, '/')
                        .replace(/\\/g, '');
                    
                    if (url.includes('.mp4') && url.startsWith('http')) {
                        directMP4s.add(url);
                    }
                });
            }
        });
        
        // Method 3: Check for video API calls or data attributes
        const scripts = document.querySelectorAll('script');
        scripts.forEach(script => {
            if (script.textContent) {
                // Look for MP4 in script content
                const scriptMatches = script.textContent.match(/https?:\/\/[^\s"']+\.mp4/gi);
                if (scriptMatches) {
                    scriptMatches.forEach(url => {
                        if (url.includes('.mp4')) directMP4s.add(url);
                    });
                }
            }
        });
        
        // Method 4: Check network requests for MP4 files
        // We can't directly access network requests, but we can check existing elements
        const allLinks = document.querySelectorAll('a[href*=".mp4"], link[href*=".mp4"]');
        allLinks.forEach(link => {
            if (link.href && link.href.includes('.mp4')) {
                directMP4s.add(link.href);
            }
        });
        
        // Method 5: Look for video data in JSON-LD or meta tags
        const jsonLd = document.querySelectorAll('script[type="application/ld+json"]');
        jsonLd.forEach(script => {
            try {
                const data = JSON.parse(script.textContent);
                if (data && data.contentUrl && data.contentUrl.includes('.mp4')) {
                    directMP4s.add(data.contentUrl);
                }
                if (data && data.url && data.url.includes('.mp4')) {
                    directMP4s.add(data.url);
                }
            } catch (e) {}
        });
        
        // Progress simulation
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += 10;
            progressBar.style.width = Math.min(progress, 90) + '%';
            if (progress >= 90) clearInterval(progressInterval);
        }, 100);
        
        // Wait a bit to allow any dynamic content to load
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Final progress
        progressBar.style.width = '100%';
        clearInterval(progressInterval);
        
        // Process found MP4 URLs
        const uniqueMP4s = Array.from(directMP4s);
        
        // NEW: Try to extract MP4 from M3U8 playlists if no direct MP4s found
        if (uniqueMP4s.length === 0) {
            const m3u8Matches = html.match(/https?:\/\/[^\s"'<>]+\.m3u8/gi) || [];
            for (const m3u8Url of m3u8Matches.slice(0, 3)) { // Check first 3 M3U8
                try {
                    // Try to fetch playlist and extract MP4 segments
                    const response = await fetch(m3u8Url);
                    const playlist = await response.text();
                    const mp4InPlaylist = playlist.match(/[^\s]+\.mp4/g);
                    if (mp4InPlaylist) {
                        mp4InPlaylist.forEach(mp4Path => {
                            // Construct full URL for relative paths
                            if (mp4Path.startsWith('http')) {
                                uniqueMP4s.push(mp4Path);
                            } else {
                                // Try to construct absolute URL
                                const baseUrl = m3u8Url.substring(0, m3u8Url.lastIndexOf('/') + 1);
                                uniqueMP4s.push(baseUrl + mp4Path);
                            }
                        });
                    }
                } catch (e) {}
            }
        }
        
        if (uniqueMP4s.length > 0) {
            resultsContainer.innerHTML = '';
            uniqueMP4s.forEach((url, index) => {
                // Determine video type
                let type = 'mp4';
                if (url.includes('.m3u8')) type = 'm3u8';
                else if (url.includes('.mpd')) type = 'mpd';
                
                const videoItem = createElement('div', 'thor-video-item');
                videoItem.dataset.index = index;
                
                const videoInfo = createElement('div', 'thor-video-info');
                const videoIcon = createElement('div', 'thor-video-icon', type === 'm3u8' ? '📺' : '🎬');
                const videoDetails = createElement('div', 'thor-video-details');
                const videoTitle = createElement('h4', '', `MP4 ${index + 1}`);
                const videoUrl = createElement('p', '', `${url.substring(0, 40)}...`);
                
                videoDetails.appendChild(videoTitle);
                videoDetails.appendChild(videoUrl);
                videoInfo.appendChild(videoIcon);
                videoInfo.appendChild(videoDetails);
                
                const itemDownloadBtn = createElement('button', 'thor-item-download-btn', '⬇');
                itemDownloadBtn.dataset.url = url;
                itemDownloadBtn.dataset.type = type;
                
                videoItem.appendChild(videoInfo);
                videoItem.appendChild(itemDownloadBtn);
                
                videoItem.addEventListener('click', (e) => {
                    if (!e.target.classList.contains('thor-item-download-btn')) {
                        selectVideo(index, url, type);
                    }
                });
                
                // Add download button listener
                itemDownloadBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    downloadFile(url, type);
                });
                
                resultsContainer.appendChild(videoItem);
                
                foundVideos.push({ url, type, index });
            });
            
            showStatus(`⚡ Found ${uniqueMP4s.length} MP4 videos • By DHWANIT ZALA`, 'success');
            
            // Auto-select first video
            if (uniqueMP4s.length > 0) {
                selectVideo(0, uniqueMP4s[0], 'mp4');
            }
        } else {
            resultsContainer.innerHTML = '';
            const noResults = createElement('div', 'thor-video-item');
            noResults.style.textAlign = 'center';
            noResults.style.padding = '20px 10px';
            noResults.style.justifyContent = 'center';
            
            const noResultsContent = createElement('div');
            const noResultsIcon = createElement('div', '', '🔍');
            noResultsIcon.style.fontSize = '25px';
            noResultsIcon.style.marginBottom = '6px';
            noResultsIcon.style.color = '#00b4ff';
            
            const noResultsText = createElement('div', '', 'NO MP4 VIDEOS FOUND');
            noResultsText.style.fontSize = '11px';
            noResultsText.style.color = '#88d3ff';
            noResultsText.style.fontWeight = '600';
            
            const noResultsSub = createElement('div', '', 'Try playing the video first • Look for .mp4 files');
            noResultsSub.style.fontSize = '9px';
            noResultsSub.style.color = '#6688aa';
            noResultsSub.style.marginTop = '3px';
            
            noResultsContent.appendChild(noResultsIcon);
            noResultsContent.appendChild(noResultsText);
            noResultsContent.appendChild(noResultsSub);
            noResults.appendChild(noResultsContent);
            resultsContainer.appendChild(noResults);
            
            showStatus('⚡ No MP4 videos found • Try playing video first • By DHWANIT ZALA', 'error');
        }
        
    } catch (error) {
        console.error('Scan error:', error);
        showStatus('⚡ Scan error • By DHWANIT ZALA', 'error');
    } finally {
        showLoading(false);
        scanBtn.classList.remove('scanning');
        scanBtn.innerHTML = '';
        scanBtn.appendChild(createElement('span', 'thor-scan-icon', '🔍'));
        scanBtn.appendChild(createElement('span', 'thor-scan-text', ' SCAN VIDEOS'));
        setTimeout(() => {
            progressBar.style.width = '0%';
        }, 500);
    }
}

// Also update the scan button text to be more specific
scanBtn.innerHTML = '';
scanBtn.appendChild(createElement('span', 'thor-scan-icon', '🔍'));
scanBtn.appendChild(createElement('span', 'thor-scan-text', ' SCAN FOR MP4 VIDEOS'));
