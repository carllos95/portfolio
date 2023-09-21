import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), './src/curriculum/', 'carlos-dantas.pdf');
  const fileName = 'carlos-dantas.pdf';


  if (fs.existsSync(filePath)) {
    res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-type', 'application/zip');

    const fileStream = fs.createReadStream(filePath);

    fileStream.pipe(res);
  }
}
