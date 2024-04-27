import { createServer } from 'node:http'
import { SendMailController } from './controllers/senderMail.controller'
import { MailsController } from './controllers/mails.controller'
import { ContentMailController } from './controllers/content.controller'

export const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')
})


const sender = new SendMailController()
const mails = new MailsController()
const contentMail = new ContentMailController()



sender.send(
  mails.readEmails(),
  'envio teste de email',
  contentMail.mailBody()
)



server.listen({
  port: 3000,
  hostname: 'localhost'
}, () => console.log('server is running!'))
