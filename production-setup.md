# Production Setup Guide

## Tailwind CSS Production Setup

### Step 1: Install Tailwind CSS
```bash
npm install -D tailwindcss
npx tailwindcss init
```

### Step 2: Create input CSS file
Create `src/input.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom styles */
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
```

### Step 3: Configure tailwind.config.js
```javascript
module.exports = {
  content: ["./index.html", "./pages/**/*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#14394d',
        'primary-tan': '#cc9955',
        'light-blue': '#7da3b7',
        'light-tan': '#dcaa66',
        'off-white': '#fefff8',
        'cream': '#faf4eb',
        'dark-gray': '#2a2a2a',
        'medium-gray': '#586972',
        'navy': '#1e3a5f',
        'gold': '#d4af37',
        'teal': '#2c7a7b',
        'coral': '#ff6b6b',
        'slate': '#334155',
      },
      fontFamily: {
        'notable': ['Notable', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

### Step 4: Build CSS
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

### Step 5: Replace CDN in HTML
Replace this line in all HTML files:
```html
<script src="https://cdn.tailwindcss.com"></script>
```

With:
```html
<link href="./dist/output.css" rel="stylesheet">
```

## Performance Optimizations

### Minify CSS
```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --minify
```

### Minify JavaScript
Use tools like Terser or Webpack to minify JS files.

### Optimize Images
- Convert to WebP format
- Use appropriate sizes for different screen densities
- Implement lazy loading (already done)

## Deployment Checklist

- [ ] Replace Tailwind CDN with local CSS
- [ ] Minify all CSS and JS files
- [ ] Optimize images
- [ ] Enable Gzip/Brotli compression on server
- [ ] Test all functionality
- [ ] Check mobile responsiveness
- [ ] Verify no console errors
