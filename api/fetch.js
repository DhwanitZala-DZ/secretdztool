export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) {
        return res.status(400).json({ error: 'No URL provided' });
    }

    try {
        const response = await fetch(decodeURIComponent(url), {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        const data = await response.text();
        
        // This header FIXES the CORS error you saw
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.status(200).send(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch content' });
    }
}
