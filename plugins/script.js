const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *MR LEGEND*

> *LEGEND MD REPO:*
*|* *https://github.com/legend5454/LEGEND-MD/*

> *SUPPORT CHANNEL:*
*|* *https://whatsapp.com/channel/0029Vb33GRMEVccONRVxUR2q*
*╰──────────────●●►*

> *LEGEND-MD*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363391326900797@newsletter',
      newsletterName: "⏤͟͟͞♛︎Legend-MD࿐ ",
      serverMessageId: 144
    },
externalAdReply: { 
title: 'LEGEND MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/legend5454/LEGEND-MD/" ,
thumbnailUrl: "https://qu.ax/vvtgy.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
