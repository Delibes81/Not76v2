const fs = require('fs');
const path = require('path');
const https = require('https');

const lawyers = [
  "https://notaria76.com.mx/images/abogados/alicia_garcia.jpg",
  "https://notaria76.com.mx/images/abogados/amanda_posadas.jpg",
  "https://notaria76.com.mx/images/abogados/angel_duran.jpg",
  "https://notaria76.com.mx/images/abogados/osmar_tapia.jpg",
  "https://notaria76.com.mx/images/abogados/saraby_velazquez.jpg",
  "https://notaria76.com.mx/images/abogados/xareni_ruiz.jpg",
  "https://notaria76.com.mx/images/abogados/nicolas_lopez_jacal.jpg",
  "https://notaria76.com.mx/images/abogados/roman_resendiz_rossetti.jpg"
];

const targetDir = path.join('c:\\Not76v1', 'public', 'images', 'extracted');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

let completed = 0;
lawyers.forEach(urlPath => {
  const fileName = path.basename(urlPath);
  const filePath = path.join(targetDir, fileName);
  
  https.get(urlPath, (res) => {
    if (res.statusCode === 200) {
      const fileStream = fs.createWriteStream(filePath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved ${fileName}`);
        completed++;
        if (completed === lawyers.length) {
            console.log("All downloads finished.");
        }
      });
    } else {
      console.error(`Failed to download ${urlPath}: ${res.statusCode}`);
      completed++;
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${urlPath}: ${err.message}`);
    completed++;
  });
});
