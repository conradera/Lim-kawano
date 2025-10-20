const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = './dist';
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

try {
    // Try to run tailwindcss using npx
    console.log('Building CSS with Tailwind...');
    execSync('npx tailwindcss -i ./src/input.css -o ./dist/output.css', { stdio: 'inherit' });
    console.log('✅ CSS built successfully!');
} catch (error) {
    console.log('❌ npx failed, trying alternative method...');
    
    // Alternative: Create a basic CSS file with your custom styles
    const basicCSS = `
/* Basic CSS without Tailwind - for development */
@import url('https://fonts.googleapis.com/css2?family=Notable:wght@400&display=swap');

:root {
  --primary-blue: #14394d;
  --light-blue: #7da3b7;
  --primary-tan: #cc9955;
  --light-tan: #dcaa66;
  --off-white: #fefff8;
  --cream: #faf4eb;
  --dark-gray: #2a2a2a;
  --medium-gray: #586972;
  --navy: #1e3a5f;
  --gold: #d4af37;
  --teal: #2c7a7b;
  --coral: #ff6b6b;
  --slate: #334155;
}

/* You can continue using the CDN for now */
/* For production, replace the CDN with this file */
`;
    
    fs.writeFileSync('./dist/output.css', basicCSS);
    console.log('✅ Basic CSS file created as fallback');
    console.log('💡 Continue using the CDN for now, or manually install Tailwind');
}
