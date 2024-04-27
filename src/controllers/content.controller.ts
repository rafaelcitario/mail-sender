import path from 'path'
import fs from 'node:fs'

interface MailBody {
  mailBody: () => string
}
export class ContentMailController implements MailBody {
  mailBody(): string {
    let contendMail: string
    const filePath = path.join(__dirname, '../content.txt')
    contendMail = fs.readFileSync(
      filePath,
      {
        encoding: 'utf-8',
        flag: 'r'
      }
    )
    return contendMail
  }
}