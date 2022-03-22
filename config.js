// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot

gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/L58vTWNHtz0EBmlwMWdTn5', 'https://chat.whatsapp.com/B5YsmkpgUf5AOFuR1bkYmx'] // ganti jadi group lu
global.owner = ['6281380674817'] // Put your number here //owner eval
global.kontak = ['6281380674817', '0'] //Ketika ada yang ngetik #owner
global.mods = [''] // Want some help?
global.prems = [''] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  rey: 'https://server-api-rey.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'https://instagram.com/dinxt.xyz'
namagithub = 'https://github.com/DinXT'
kasihcaption = `Done.`
namakontak1 = 'DinXT | Owner'
namakontak2 = 'WhatsApp.'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'DinXT' // ganti aja
global.author = 'Sticker' // ganti aja

//yyy
bc = '' //ZeusBotz Broadcast
footer = '\n DinXT'
namabot = 'WhatsApp Bot.'
namalu = 'DinXT'
watermark = 'DinXT' //ganti aja

// 
wait = '_*Please Wait...*_'
global.botwm = 'DinXT'
global.wait = '_*Please Wait...*_'
global.rpg = 'Fitur Rpg Dimatikan\nSilahkan minta owner untuk mengaktifkan fitur ini !'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// Ubah saja SC dari AlyaaXzy
global.image = 'https://telegra.ph/file/f96eee5c2c75bd32c1f58.png'//thumbnail

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 999 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
