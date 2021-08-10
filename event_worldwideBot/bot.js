const { Telegraf } = require('telegraf')
const bot = new Telegraf('1900241024:AAF0Mh-Ibq9PbPEG-iy0kwu2B4H21xg23eA') //сюда помещается токен, который дал botFather
const axios = require('axios')
const apiUrl = 'http://localhost:3001/api/v1/subscribes'

//ответ бота на команду /start
bot.start(ctx => ctx.reply(`
   Привет, ${ctx.from.first_name}!
Введи events и получи список своих избранных событий.
`))

bot.help((ctx) => ctx.reply('Send me a sticker')) //ответ бота на команду /help
bot.on('sticker', (ctx) => ctx.reply('')) //bot.on это обработчик введенного юзером сообщения, в данном случае он отслеживает стикер, можно использовать обработчик текста или голосового сообщения
bot.hears('hi', (ctx) => ctx.reply(`Hello, ${ctx.from.first_name}!`)) // bot.hears это обработчик конкретного текста, данном случае это - "hi"
// bot.hears('events', (ctx) => ctx.reply('Hey there')) // bot.hears это обработчик конкретного текста, данном случае это - "hi"


bot.hears('events', async (ctx) => {
  try {
    const events = await axios(apiUrl)
    const data = events.data
    let text = data.map((event) => {
      console.log('one--->', event);
      return (`Название: ${event.Event.Name}; Фото: ${event.Event.Picture}; Ссылка на билет: ${event.Event.Url}; Начало: ${event.Event.Startdatetime}`)
    })
    console.log(text);
    ctx.reply(text)
  } catch (e) {
    ctx.reply('Текущих событий нет')
  }
})

bot.launch() // запуск бота
