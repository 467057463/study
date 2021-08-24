// import dayjs from "dayjs";

import path from 'path';
import fs from 'fs';
const fileLocation = path.join(__static, 'static', 'test.txt')
const fileContents = fs.readFileSync(fileLocation, 'utf8')
console.log(fileContents)

console.log(import.meta.env.VITE_NAME)
console.log('abcd', __dirname)
console.log('abcd', __static)
console.log('abcd', __preload)

