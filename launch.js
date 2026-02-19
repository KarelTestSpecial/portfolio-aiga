import { getPort } from './port-registry-client.js';
import { spawn } from 'child_process';

async function launch() {
  console.log('🚀 Requesting dynamic port from registry...');
  
  const port = await getPort('portfolio-aiga', {
    project: 'portfolio-aiga',
    description: 'Karel Decherf — Persoonlijk Portfolio',
    preferredPort: 3001,
    fallback: 3001
  });

  console.log(`📡 Starting portfolio on port ${port}...`);

  const child = spawn('pnpm', ['run', 'start'], {
    env: { ...process.env, PORT: port.toString(), BROWSER: 'none' },
    stdio: 'inherit',
    shell: true
  });

  child.on('close', (code) => {
    process.exit(code);
  });
}

launch().catch(err => {
  console.error('Launch failed:', err);
  process.exit(1);
});
