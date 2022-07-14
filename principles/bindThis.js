const bot = {
    speech: 'hi, there!',
    say() {
        console.log(this.speech)
    }
}

bot.say()

const say = bot.say.bind(bot)
say()


function person() {
    this.age = 0
    
    const self = this
    setInterval(function() {
        self.age++
        console.log(self.age)
    }/*.bind(this)*/, 1000)
}

new person
