import fs from 'fs';

const filename = 'volume/a.txt'

// reading from file
const content = fs.readFileSync(filename, 'utf-8');

// writing to file same content but + date
const date = new Date().toISOString()
fs.writeFileSync(filename, `${content}\n${date}`);
