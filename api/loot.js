export default function handler(req, res) {
  try {
    const query = req.query || {};
    console.log('🦠 LOOT:', new Date().toISOString(), JSON.stringify(query));
    
    res.status(200).json({ 
      status: 'success', 
      received: query,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('LOOT ERROR:', error);
    res.status(500).json({ error: error.message });
  }
}

export const config = {
  api: {
    bodyParser: false
  }
};
