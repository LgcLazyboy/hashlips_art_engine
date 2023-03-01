import fs from 'fs';
const FILE_COUNT = 100;
const IPFS_BASE = "ipfs://bafybeigcigva72sybf672nj5l6nk53frn6b3l57go4sf3peqt5vptcf56m";

for (let i = 1; i <= FILE_COUNT; i++) {
  const fileName = `build/json/${i}.json`;
  fs.readFile(fileName, 'utf8', (err, data) => {
    const file = JSON.parse(data);
    file.image = `${IPFS_BASE}/${i}.png`;
    fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
      if (err) return console.log(err);
    });
  })
}
