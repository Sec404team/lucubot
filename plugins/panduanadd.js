let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'ADDBOT')).buffer(), `
*"Cara menambahkan bot ke group"*

Cara menambahkan bot ke dalam group. 
Lucu bot memberlakukan trial gratis, 
Ada 3 opsi setiap opsi memiliki limit hingga 10 limit terpakai

1. ${usedPrefix}join5 linkgrup 5 hours (user) 
2. ${usedPrefix}join12 linkgrup 12 hours (user) 
3. ${usedPrefix}join24 linkgrup 24 hours (owner) 

Setelah waktu habis maka bot akan keluar dari group. 
Untuk join Permanent silahkan ketik *${usedPrefix}sewa*
`.trim(), watermark, 'Ok Saya Mengerti', 'rasel comel+ganteng no debat ok su<3', m)
handler.command = /^join/i
handler.private = true 
module.exports = handler
