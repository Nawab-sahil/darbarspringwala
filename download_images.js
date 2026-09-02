const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const imagesToDownload = [
  {
    url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    targetJpg: 'public/products/compression-1.jpg',
    targetPng: 'public/products/compression-1.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&auto=format&fit=crop&q=80',
    targetJpg: 'public/products/extension-1.jpg',
    targetPng: 'public/products/extension-1.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80',
    targetJpg: 'public/products/torsion-1.jpg',
    targetPng: 'public/products/torsion-1.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&auto=format&fit=crop&q=80',
    targetJpg: 'public/products/conical-1.jpg',
    targetPng: 'public/products/conical-1.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop&q=80',
    targetJpg: 'public/products/wireforms-1.jpg',
    targetPng: 'public/products/wireforms-1.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    targetJpg: 'public/products/garter-1.jpg',
    targetPng: 'public/products/garter-1.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&auto=format&fit=crop&q=80',
    targetJpg: 'public/products/die-spring-1.jpg',
    targetPng: 'public/products/die-spring-1.png'
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format&fit=crop&q=80',
    targetJpg: 'public/products/custom-1.jpg',
    targetPng: 'public/products/custom-1.png'
  }
];

function download(url, destJpg, destPng) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destJpg);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, destJpg, destPng).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          fs.copyFileSync(destJpg, destPng);
          console.log(`Downloaded ${destJpg}`);
          resolve();
        });
      });
    }).on('error', (err) => {
      fs.unlink(destJpg, () => {});
      console.error(`Error downloading ${destJpg}:`, err.message);
      reject(err);
    });
  });
}

async function run() {
  for (const item of imagesToDownload) {
    try {
      await download(item.url, item.targetJpg, item.targetPng);
    } catch (e) {
      console.error(e);
    }
  }
}

run();
