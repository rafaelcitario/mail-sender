import { envSchema } from '@src/lib/zod'
import 'dotenv/config'

const _env = envSchema.safeParse(process.env)


if (_env.success == false) {
  console.log('some enviroment variables is missing', _env.error.format())
  throw new Error('some enviroment variables is missing')
}

export const ENV = _env.data