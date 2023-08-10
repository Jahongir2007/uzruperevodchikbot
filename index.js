const TelegramBot = require('node-telegram-bot-api');
const translator = require('translation-google');

const token = '6568175861:AAFmJpCtYomnSQI_B0HvAqUvOJplW_rz7AQ';
const bot = new TelegramBot(token, { polling: true });

// bot.onText(/\/start/, (msg) => {

// bot.sendMessage(msg.chat.id, "Tarjimon botga xush kelibsiz. Ushbu bot o'zbek ingliz tilida gap va so'zlarni tarjima qila oladi.");

// });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.listen(3000, () => {
  console.log("App is running...");
});

bot.on("message", async (msg) => {
  
  if(msg.text.toString() == "/start"){
    bot.sendMessage(msg.chat.id, `@uzruperevodchikbot с помощью этого бота вы можете переводить предложения или слова с узбекского языка на русский язык. Вы можете переводить русские предложения или слова на узбекский язык.`);
  }else{
    const uzenTranslation = await translator(msg.text.toString(), { from: "uz", to: "ru" });
    const enuzTranslation = await translator(msg.text.toString(), { from: "ru", to: "uz" });
    bot.sendMessage(msg.chat.id, `🇺🇿: ${enuzTranslation.text} \n 🇷🇺: ${uzenTranslation.text}`)
  }

});
