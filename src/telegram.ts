import { Telegraf } from 'telegraf'

const telegram = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)

export default telegram
