import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), './src/curriculum/', 'carlos-dantas.pdf');
  const fileName = 'carlos-dantas.pdf';

  if (fs.existsSync(filePath)) {
    res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
    res.setHeader('Content-type', 'application/pdf'); // Alterado para o tipo de conteúdo correto (PDF)

    const fileStream = fs.createReadStream(filePath);

    fileStream.pipe(res);
  } else {
    res.status(404).end();
  }
}
