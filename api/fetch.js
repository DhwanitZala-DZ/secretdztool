export default async function handler(req, res) {
    const { url } = req.query;
    if (!url) return res.status(400).json({ error: 'No URL' });

    try {
        const response = await fetch(decodeURIComponent(url), {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0' }
        });
        const html = await response.text();

        // SCRAPING LOGIC
        const thumbMatch = html.match(/https:\/\/video\.squarespace-cdn\.com\/content\/v1\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/thumbnail/);
        const videoMatch = html.match(/videoPlaybackUrl(&quot;|"):(&quot;|")([^&"]+)/);

        let finalUrl = "";
        if (videoMatch) {
            finalUrl = videoMatch[3].replace(/\\u002f/g, '/').replace(/&amp;/g, '&');
        } else if (thumbMatch) {
            finalUrl = thumbMatch[0].replace('/thumbnail', '/playlist.m3u8');
        }

        // Send back the data with CORS headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).json({ 
            downloadUrl: finalUrl, 
            thumb: thumbMatch ? thumbMatch[0] : null 
        });
    } catch (e) {
        res.status(500).json({ error: 'Fetch failed' });
    }
}
