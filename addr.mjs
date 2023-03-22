import fs from 'fs';
const FILE_COUNT = 100;
const IPFS_BASE = "여기에 IPFS 주소를 넣으세요";

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
