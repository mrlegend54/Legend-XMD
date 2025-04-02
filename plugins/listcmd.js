const config = require('../config')
const { cmd, commands } = require('../command');

cmd({
    pattern: "list",
    alias: ["listcmd","menu3","commands"],
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━❮ *DOWNLOAD CMD* ❯━┈⊷
┃▸
┃▸📖 COMMAND: .play
┃▸ℹ️ Download Audio from yt
┃▸ 
┃▸📖 COMMAND: .song
┃▸ℹ️ Download song from yt
┃▸ 
┃▸📖 COMMAND: .apk
┃▸ℹ️ Download apk from playstore
┃▸ 
┃▸📖 COMMAND: .video
┃▸ℹ️ Download video from yt
┃▸ 
┃▸📖 COMMAND: .fb
┃▸ℹ️ Download  video from fb
┃▸ 
┃▸📖 COMMAND: .tk
┃▸ℹ️ Download video from tiktok
┃▸ 
┃▸📖 COMMAND: .ig
┃▸ℹ️ Download video from ig
┃▸ 
┃▸📖 COMMAND: .gdrive
┃▸ℹ️ Download drive files
┃▸ 
┃▸📖 COMMAND: .twitter
┃▸ℹ️ Download video from Twitter
┃▸
┃▸📖 COMMAND: .img
┃▸ℹ️ Download image
┃▸
┃▸📖 COMMAND: .darama
┃▸ℹ️ Download full episode video
┃▸
┃▸📖 COMMAND: .play2
┃▸ℹ️ Download Audio from yt
┃▸ 
┃▸📖 COMMAND: .video2
┃▸ℹ️ Download video from yt
┃▸ 
┃▸📖 COMMAND: .baiscope
┃▸ℹ️ Download video from baiscope
┃▸ 
┃▸📖 COMMAND: .mfire
┃▸ℹ️ Download mediafire files
╰━━━━━━━━━━━━⪼ 

╭━❮ *ANMIE CMD* ❯━┈⊷
┃▸
┃▸📖 COMMAND: .yts
┃▸ℹ️ Serch videos from yt
┃▸
┃▸📖 COMMAND: .king
┃▸ℹ️ get king about 
┃▸
┃▸📖 COMMAND: .dog
┃▸ℹ️ get random dog imgs
┃▸
┃▸📖 COMMAND: .anime 
┃▸ℹ️ get anime pics
┃▸
┃▸📖 COMMAND: .animegirl 
┃▸ℹ️ get animegirl pics
┃▸
┃▸📖 COMMAND: .loli
┃▸ℹ️ get romantic anime pics
╰━━━━━━━━━━━━⪼  

╭━❮‍ *INFO CMD* ❯━┈⊷
┃▸
┃▸📖 COMMAND: .alive
┃▸ℹ️ Check online or not
┃▸  
┃▸📖 COMMAND: .ping
┃▸ℹ️ Check bot speed
┃▸  
┃▸📖 COMMAND: .menu
┃▸ℹ️ Nero main menu
┃▸
┃▸📖 COMMAND: .menu2
┃▸ℹ️ Nero main menu2
┃▸ 
┃▸📖 COMMAND: .ai
┃▸ℹ️ chat with ai bot
┃▸
┃▸📖 COMMAND: .system
┃▸ℹ️ check bot systems
┃▸
┃▸📖 COMMAND: .owner
┃▸ℹ️ get owner info
┃▸ 
┃▸📖 COMMAND: .status
┃▸ℹ️ check bot runtime
┃▸
┃▸📖 COMMAND: .about 
┃▸ℹ️ get about bot 
┃▸
┃▸📖 COMMAND: .list 
┃▸ℹ️ get bot command list
┃▸
┃▸📖 COMMAND: .script 
┃▸ℹ️ get bot repository 
╰━━━━━━━━━━━━⪼

╭━❮ *OTHER CMD* ❯━┈⊷
┃▸
┃▸📖 COMMAND: .joke 
┃▸ℹ️ Get Rendom joke 
┃▸ 
┃▸📖 COMMAND: .fact
┃▸ℹ️ Get Rendom fact
┃▸
┃▸📖 COMMAND: .githubstalk 
┃▸ℹ️ Get github data any user
┃▸ 
┃▸📖 COMMAND: .gpass
┃▸ℹ️ Get a strong password 
┃▸
┃▸📖 COMMAND: .hack
┃▸ℹ️ prank with friends 
┃▸
┃▸📖 COMMAND: .srepo 
┃▸ℹ️ serch repository 
┃▸
┃▸📖 COMMAND: .define 
┃▸ℹ️ serch any words
╰━━━━━━━━━━━━⪼

╭━❮ *GROUP CMD* ❯━┈⊷
┃▸
┃▸📖 COMMAND: .mute
┃▸ℹ️ Mute group
┃▸
┃▸📖 COMMAND: .unmute
┃▸ℹ️ Unmute group
┃▸
┃▸📖 COMMAND: .left
┃▸ℹ️ left group
┃▸
┃▸📖 COMMAND: .jid
┃▸ℹ️ group jid
┃▸
┃▸📖 COMMAND: .remove
┃▸ℹ️ remove member from group
┃▸
┃▸📖 COMMAND: .delete 
┃▸ℹ️ remove sms from group 
┃▸
┃▸📖 COMMAND: .add
┃▸ℹ️ add members in group 
┃▸
┃▸📖 COMMAND: .kick
┃▸ℹ️ kick any user 
┃▸
┃▸📖 COMMAND: .kickall
┃▸ℹ️ remove all members from group
┃▸
┃▸📖 COMMAND: .setgoodbye
┃▸ℹ️ set member leave sms
┃▸
┃▸📖 COMMAND: .setwelcome 
┃▸ℹ️ set member welcome sms
┃▸
┃▸📖 COMMAND: promote 
┃▸ℹ️ make group admin
┃▸
┃▸📖 COMMAND: .demote 
┃▸ℹ️ dissmis any admin 
┃▸
┃▸📖 COMMAND: .tagall
┃▸ℹ️ mention group all members
┃▸
┃▸📖 COMMAND: .getpic
┃▸ℹ️ get group profile
┃▸
┃▸📖 COMMAND: .invite 
┃▸ℹ️ get group invite link
┃▸
┃▸📖 COMMAND: .revoke 
┃▸ℹ️ reset group link
┃▸
┃▸📖 COMMAND: .joinrequests
┃▸ℹ️ cheack group panding members
┃▸
┃▸📖 COMMAND: .allreq
┃▸ℹ️ add group panding members 
┃▸
┃▸📖 COMMAND: .lockgc
┃▸ℹ️ lock group private
┃▸
┃▸📖 COMMAND: .unlockgc
┃▸ℹ️ unlock group all
┃▸
┃▸📖 COMMAND: .leave 
┃▸ℹ️ left any group 
┃▸
┃▸📖 COMMAND: .updategname
┃▸ℹ️ set group name
┃▸
┃▸📖 COMMAND: .updategdesc
┃▸ℹ️ set group description 
┃▸
┃▸📖 COMMAND: .joim
┃▸ℹ️ join invite link 
┃▸
┃▸📖 COMMAND: .hidetag
┃▸ℹ️ mention any user hide
┃▸
┃▸📖 COMMAND: .ginfo
┃▸ℹ️ get group information 
┃▸
┃▸📖 COMMAND: .disappear on
┃▸ℹ️ on disappear sms in group 
┃▸
┃▸📖 COMMAND: .disappear off
┃▸ℹ️ off disappear sms in group 
┃▸
┃▸📖 COMMAND: .senddm
┃▸ℹ️ send disappear sms in group 
┃▸
┃▸📖 COMMAND: .disappear 7d 24h 90d
┃▸ℹ️ set time to disappear sms
╰━━━━━━━━━━━━⪼

╭━❮ *OWNER CMD* ❯━┈⊷
┃▸
┃▸📖 COMMAND: .update
┃▸ℹ️ update bot velue 
┃▸
┃▸📖 COMMAND: .restart 
┃▸ℹ️ restart your bot
┃▸
┃▸📖 COMMAND: .settings
┃▸ℹ️ see bot settings
┃▸
┃▸📖 COMMAND: .owner 
┃▸ℹ️ get owner number 
┃▸
┃▸📖 COMMAND: .repo 
┃▸ℹ️ get bot repository 
┃▸
┃▸📖 COMMAND: .system 
┃▸ℹ️ check bot systems
┃▸
┃▸📖 COMMAND: .block
┃▸ℹ️ block any user 
┃▸
┃▸📖 COMMAND: .unblock 
┃▸ℹ️ unblock any user 
┃▸
┃▸📖 COMMAND: .shutdown 
┃▸ℹ️ logout your bot
┃▸
┃▸📖 COMMAND: .clearchats 
┃▸ℹ️ clearchats from ib
┃▸
┃▸📖 COMMAND: .setpp
┃▸ℹ️ update profile pic
┃▸
┃▸📖 COMMAND: .broadcast 
┃▸ℹ️ creat broadcast 
┃▸
┃▸📖 COMMAND: .jid
┃▸ℹ️ get jid any user
┃▸
┃▸📖 COMMAND: .gjid 
┃▸ℹ️ get group jid
╰━━━━━━━━━━━━⪼

╭━❮ *CONVERT CMD* ❯━┈⊷
┃▸
┃▸📖 COMMAND: .sticker
┃▸ℹ️ convert photo to sticker
┃▸
┃▸📖 COMMAND: .tts
┃▸ℹ️ change text to voice 
┃▸
┃▸📖 COMMAND: .trt 
┃▸ℹ️ change languages 
╰━━━━━━━━━━━━⪼
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐌𝐑 𝐋𝐄𝐆𝐄𝐍𝐃`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://qu.ax/vvtgy.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363391326900797@newsletter',
                        newsletterName: '⏤͟͟͞♛︎Legend-MD࿐
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
