const fs = require('fs');
const path = require('path');

const src = path.join(process.cwd(), 'public', 'evallo-favicon.png');
const dest = path.join(process.cwd(), 'app', 'favicon.ico');

fs.copyFile(src, dest, (err) => {
  if (err) {
    console.error('Failed to copy favicon:', err);
    process.exit(1);
  }
  console.log('Favicon restored to', dest);
});
