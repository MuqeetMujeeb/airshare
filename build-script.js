const { execSync } = require('child_process');
try {
  const out = execSync('npm run build', { encoding: 'utf-8', stdio: 'pipe' });
  const fs = require('fs');
  fs.writeFileSync('build-output.txt', out);
  console.log('SUCCESS');
} catch (e) {
  const fs = require('fs');
  fs.writeFileSync('build-output.txt', (e.stdout || '') + '\n' + (e.stderr || '') + '\n' + e.message);
  console.log('FAILED');
}
