const fs = require('fs');
const path = require('path');
const https = require('https');

const baseURL = 'https://notaria76.com.mx/';
const targetDir = path.join('c:\\Not76v1', 'public', 'images', 'extracted');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

https.get(baseURL, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
    let match;
    const imageUrls = [];
    
    while ((match = imgRegex.exec(data)) !== null) {
      const src = match[1];
      if (!src.includes('slider')) {
        imageUrls.push(src);
      }
    }
    
    const uniqueUrls = [...new Set(imageUrls)];
    console.log(`Found ${uniqueUrls.length} unique images to download.`);
    
    uniqueUrls.forEach(urlPath => {
      const fullUrl = new URL(urlPath, baseURL).toString();
      const fileName = path.basename(urlPath);
      const filePath = path.join(targetDir, fileName);
      
      https.get(fullUrl, (imgRes) => {
        if (imgRes.statusCode === 200) {
          const fileStream = fs.createWriteStream(filePath);
          imgRes.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`Saved ${fileName}`);
          });
        }
      });
    });
  });
});
