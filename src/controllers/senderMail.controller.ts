import { transport } from '@src/lib/nodemailer'
import { ENV } from '@src/env'

interface Sender {
  send: (to: string[], subject: string, text: string) => Promise<void>
}
export class SendMailController implements Sender {
  async send(to: string[], subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: ENV.user,
      to,
      subject,
      text,
    }


    for (let eachMail of mailOptions.to) {
      await transport.sendMail({
        to: eachMail,
        subject,
        text,
      }, (error, info) => {
        if (error) {
          console.log(error)
        } else {
          console.log(`SUCESS:\nmail send:\n
      ${info.envelope.from} to ${info.envelope.to}\n
      mail id: ${info.messageId}`)
        }
      })
    }



  }
}