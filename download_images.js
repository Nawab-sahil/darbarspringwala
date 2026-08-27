const fs = require("fs");
const path = require("path");
const https = require("https");

const targetDir = path.join(__dirname, "public", "products");
const dest = path.join(targetDir, "conical-1.jpg");
const url = "https://images.unsplash.com/photo-1563784462386-044fd95e9852?auto=format&fit=crop&w=800&q=80";

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    };
    
    https.get(url, options, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        download(response.headers.location, dest).then(resolve).catch(reject);
      } else if (response.statusCode !== 200) {
        fs.unlink(dest, () => reject(new Error(`Status code: ${response.statusCode}`)));
      } else {
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      }
    }).on("error", (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  console.log("Downloading conical-1.jpg...");
  try {
    await download(url, dest);
    console.log("Successfully downloaded conical-1.jpg");
  } catch (err) {
    console.error("Failed to download conical-1.jpg:", err.message);
  }
}

run();
