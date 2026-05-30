const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/assets');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach((file) => {
    if (file.endsWith('.png')) {
      const filePath = path.join(directoryPath, file);
      const outputFile = path.join(directoryPath, file.replace('.png', '.webp'));

      // If it's one of the massive images, scale down width to 1000px max
      const massiveImages = ['nutritionistImg.png', 'heroImg.png', 'PortraitImg.png', 'PortraitLovneetBatra.png', 'gridImg.png'];
      
      let transform = sharp(filePath);
      
      if (massiveImages.includes(file)) {
          transform = transform.resize({ width: 1000, withoutEnlargement: true });
      }

      transform
        .webp({ quality: 75 })
        .toFile(outputFile, (err, info) => {
          if (err) {
            console.error('Error processing', file, err);
          } else {
            console.log('Optimized to WEBP:', file, '->', info.size / 1024, 'KB');
            // optionally delete original
            fs.unlinkSync(filePath);
          }
        });
    }
  });
});
