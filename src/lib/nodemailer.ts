import { createTransport } from 'nodemailer'
import { ENV } from '@src/env'
export const transport = createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: ENV.user,
    pass: ENV.pass
  }
})