const {cmd , commands} = require('../command')

cmd({
    pattern: "anime",
    desc: "anime the bot",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `❮❮❮ *LEGEND-MD ANIME PHOTOS* ❯❯❯`
await conn.sendMessage(from,{image:{url: `https://qu.ax/czqkh.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/ffEhL.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/QjmEp.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/ckrBb.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/zpLMu.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/NoLki.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/sSuRH.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/GBSxz.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/ttRck.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/hGpcx.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/mkKhq.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from,{image:{url: `https://qu.ax/zyzHa.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
