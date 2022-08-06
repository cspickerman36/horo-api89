const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())



let horoscopes = {
    'aquarius': {
        'horoscope': "Destiny shines on you, stop to look at the flower in the road to avoid the bigger picture, avoid black, and denim.",
       
    },
    'pisces':{
        'horoscope': "The wall ahead of you is really a door, dry your pants before putting them on, 34 for luck.",
       
    },
    'aries':{
        'horoscope': "Beware the beast within, a monkey in the cage is better than a rhino in the living room, blue ribbons for wealth and prosperity.",
       
    },
    'taurus':{
        'horoscope': "Is that a penny in your pocket or a chocolate button, better check before it melts, 73 and red are your friends.",
       
    },
    'gemini':{
        'horoscope': "Waiting by the phone wont do, go there and break down the door, your totem is the badger this month.",
       
    },
    'cancer':{
        'horoscope': "You face a hard decision, feel up both options before smoothly gliding through trouble free, believe what you see on TV it may save your life.",
       
    },
    'leo':{
        'horoscope': "Beware of Romans bearing cherries, the may look sweet but you will choke on the pip, brown is not your color.",
       
    },
    'virgo':{
        'horoscope': "Under the apple tree is shady, but beware newton will have his revenge, when it hits you on the head remember the good thing is you can eat it.",
       
    },
    'libra':{
        'horoscope': "Be carful not to blow your own horn, Get somone else to blow it for you, the world is not as simple as you think, pay attention to the little things.",
       
    },
    'scorpio':{
        'horoscope': "Remember the fountain of youth does not overflow freely, enjoy it while you can, a watched pot never boils an ignored one boils over immediately.",
       
    },
    'sagittarius':{
        'horoscope': "Swim Against the flow, but remember unlike a salmon you wont die after getting laid, a tragedy does not the Armageddon make.",
    },
    'capricorn':{
        'horoscope': "Every rose has its thorn but sometimes a little pain can be good for the soul, who knows you might enjoy it, but avoid Rubber at all costs.",
    },
    'unknown':{
        'horoscope': "unknown",
    }
    }
   
   
   app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const zodiacName = request.params.name.toLowerCase()
   if(horoscopes[zodiacName]){
        response.json(horoscopes[zodiacName])
   }else{
   response.json(horoscopes['unknown'])
 }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})