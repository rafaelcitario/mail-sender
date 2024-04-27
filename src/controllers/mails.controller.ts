import path from 'node:path'
import fs from 'node:fs'

export class MailsController {
  readEmails(): string[] {
    const filePath = path.join(__dirname, '../mails.txt')
    const fileData = fs.readFileSync(
      filePath,
      {
        encoding: 'utf8',
        flag: 'r'
      }
    )

    const data = fileData.split('\r\n')
    let dataMail = data.filter(line => line !== '').map(mail => {
      return mail
    })
    return dataMail
  }
}