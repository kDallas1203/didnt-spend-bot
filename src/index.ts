/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
require('dotenv').config()
import 'module-alias/register'
import logger from '@utils/logger'
import telegram from './telegram'

telegram.start((ctx) => ctx.reply('Welcome'))
telegram.help((ctx) => ctx.reply('Send me a sticker'))
telegram.on('sticker', (ctx) => ctx.reply('👍'))
telegram.hears('hi', (ctx) => ctx.reply('Hey there'))
telegram.launch().then(() => logger.info('Bot started'))

// Enable graceful stop
process.once('SIGINT', () => telegram.stop('SIGINT'))
process.once('SIGTERM', () => telegram.stop('SIGTERM'))
