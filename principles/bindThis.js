const bot = {
    speech: 'hi, there!',
    say() {
        console.log(this.speech)
    }
}

bot.say()

const say = bot.say.bind(bot)
say()
