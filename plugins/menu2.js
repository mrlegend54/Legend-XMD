/*_______________________________________________________________________________________________________________________________________________________________________________________________________________________
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
─██████████████──██████████──██████──────────██████████████──██████──────────██████──██████████████──██████──────────██████████████──██████──██████──██████████████──████████████████─── 
─██░░░░░░░░░░██──██░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██████████──██░░██──██░░░░░░░░░░██──██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██░░██████████──████░░████──██░░██──────────██░░██████████──██░░░░░░░░░░██──██░░██──██████░░██████──██░░██──────────██░░██████░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░██────────────██░░██────██░░██──────────██░░██──────────██░░██████░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──────────██░░██────██░░██─── 
─██░░██████████────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░████████░░██─── 
─██░░░░░░░░░░██────██░░██────██░░██──────────██░░░░░░░░░░██──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░░░██─── 
─██████████░░██────██░░██────██░░██──────────██░░██████████──██░░██──██░░██──██░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██████████──██░░██████░░████─── 
─────────██░░██────██░░██────██░░██──────────██░░██──────────██░░██──██░░██████░░██──────██░░██──────██░░██──────────██░░██──██░░██──██░░░░██░░░░██──██░░██──────────██░░██──██░░██───── 
─██████████░░██──████░░████──██░░██████████──██░░██████████──██░░██──██░░░░░░░░░░██──────██░░██──────██░░██████████──██░░██████░░██──████░░░░░░████──██░░██████████──██░░██──██░░██████─ 
─██░░░░░░░░░░██──██░░░░░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──██████████░░██──────██░░██──────██░░░░░░░░░░██──██░░░░░░░░░░██────████░░████────██░░░░░░░░░░██──██░░██──██░░░░░░██─ 
─██████████████──██████████──██████████████──██████████████──██████──────────██████──────██████──────██████████████──██████████████──────██████──────██████████████──██████──██████████─ 
──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── 
created by MR LEGEND 🕵
contact me 923136420207 ♻️
© Copy coder alert ⚠
*/
const config = require('../config');
const {
  cmd,
  commands
} = require("../command");
const {
  runtime
} = require("../lib/functions");
cmd({
  'pattern': "menu2",
  'react': '🛸',
  'alias': ['panel', "commands"],
  'desc': "menu the bot",
  'category': 'main'
}, async (_0x54adbc, _0x37e6a6, _0x39d831, {
  from: _0x59e925,
  quoted: _0x40cc7d,
  body: _0x3b56ee,
  isCmd: _0x5e5181,
  command: _0x3c5df1,
  args: _0x1ce4ed,
  q: _0xd0c15c,
  isGroup: _0x563e47,
  sender: _0x146f70,
  senderNumber: _0xad06f1,
  botNumber2: _0x33d4ac,
  botNumber: _0x2e1832,
  pushname: _0x307f4f,
  isMe: _0xd8309d,
  isOwner: _0xa2b37b,
  groupMetadata: _0x3af3db,
  groupName: _0x4fbb4c,
  participants: _0x368919,
  groupAdmins: _0x4ad2c3,
  isBotAdmins: _0x5577ef,
  isAdmins: _0x223327,
  reply: _0x38d3d7
}) => {
  try {
    let _0x4877aa = "*╭━━〔 •ᴡᴇʟᴄᴏᴍᴇ• 〕━━┈⊷*\n\n     *" + _0x307f4f + "*\n     \n*╰──────────────┈⊷*\n*╭━━━〔 ✦" + config.BOT_NAME + "✦ 〕━━━┈⊷*\n*┃★╭──────────────•*\n*┃★│* ʀᴜɴᴛɪᴍᴇ : *" + runtime(process.uptime()) + "*\n*┃★│* ʀᴀᴍ ᴜꜱᴀɢᴇ : *" + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "MB / " + Math.round(require('os').totalmem / 0x400 / 0x400) + "MB*\n*┃★│* ᴍᴏᴅᴇ : *[" + config.MODE + "]*\n*┃★│* ᴘʀᴇғɪx : *[" + config.PREFIX + "]*\n*┃★╰──────────────•*\n*╰━━━━━━━━━━━━━━━┈⊷*\n*╭━━〔 •ᴄᴍᴅ-ᴍᴇɴᴜ• 〕━━┈⊷*\n*┃◈╭─────────────·๏*\n*┃◈┃•➊ ➠ 【 ALQURAN 】*\n*┃◈┃•❷ ➠ 【 OWNER 】*\n*┃◈┃•❸ ➠ 【 DOWNLOAD 】‎*\n*┃◈┃•❹ ➠ 【 GROUPS 】*\n*┃◈┃•❺ ➠ 【 INFO 】‎*\n*┃◈┃•❻ ➠ 【 RANDOM 】*\n*┃◈┃•❼ ➠ 【 CONVERT 】*\n*┃◈┃•❽ ➠ 【 AI-CMD 】*\n*┃◈┃•❾ ➠ 【 WALLPAPERS 】*\n*┃◈┃•❿ ➠ 【 OTHER 】*\n*┃◈└───────────┈⊷*\n*╰──────────────┈⊷*\n\n*✧ ʀᴇᴘʟʏ ᴡɪᴛʜ ᴛʜᴇ ɴᴜᴍʙᴇʀ ʏᴏᴜ ᴡᴀɴᴛ ᴏᴜᴛ ᴛᴏ sᴇʟᴇᴄᴛ ✧*\n\n> " + config.CAPTION;
    const _0x42f887 = await _0x54adbc.sendMessage(_0x59e925, {
      'image': {
        'url': config.ALIVE_IMG
      },
      'caption': _0x4877aa,
      'contextInfo': {
        'mentionedJid': [''],
        'groupMentions': [],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363391326900797@newsletter",
          'newsletterName': "♛︎Legend-MD࿐"
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "♛︎Legend-MD࿐"
          'body': '' + _0x307f4f,
          'mediaType': 0x1,
          'sourceUrl': "https://whatsapp.com/channel/0029Vb33GRMEVccONRVxUR2q",
          'thumbnailUrl': "https://qu.ax/vvtgy.jpg",
          'renderLargerThumbnail': true,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x37e6a6
    });
    _0x54adbc.ev.on("messages.upsert", async _0x272c04 => {
      const _0x355fda = _0x272c04.messages[0x0];
      if (!_0x355fda.message || !_0x355fda.message.extendedTextMessage) {
        return;
      }
      const _0x77f69a = _0x355fda.message.extendedTextMessage.text.trim();
      if (_0x355fda.message.extendedTextMessage.contextInfo && _0x355fda.message.extendedTextMessage.contextInfo.stanzaId === _0x42f887.key.id) {
        switch (_0x77f69a) {
          case '1':
            let _0x382d61 = "\n *[ •  QURAN - CMD ‎ • ]*\n\n💫 *All Surah and their numbers list for getting Surah type.quran 10/2.* 💫\n\n_Or type .alquran 36/58_ \n_Mean surah number and ayat number_\n\n\n1. 🕌 Al-Fatiha (The Opening) - الفاتحہ (پہلا سورہ)\n\n\n2. 🐄 Al-Baqarah (The Cow) - البقرہ (گائے)\n\n\n3. 🏠 Aali Imran (The Family of Imran) - آل عمران (عمران کا خاندان)\n\n\n4. 👩 An-Nisa' (The Women) - النساء (عورتیں)\n\n\n5. 🍽️ Al-Ma'idah (The Table Spread) - المائدہ (پھیلی ہوئی میز)\n\n\n6. 🐪 Al-An'am (The Cattle) - الانعام (مویشی)\n\n\n7. ⛰️ Al-A'raf (The Heights) - الأعراف (بلندیاں)\n\n\n8. ⚔️ Al-Anfal (The Spoils of War) - الانفال (غنائم)\n\n\n9. 🙏 At-Tawbah (The Repentance) - التوبہ (توبہ)\n\n\n10. 🐟 Yunus (Jonah) - یونس (یونس)\n\n\n11. 🌩️ Hud (Hud) - ہود (ہود)\n\n\n12. 👶 Yusuf (Joseph) - یوسف (یوسف)\n\n\n13. ⚡ Ar-Rad (The Thunder) - الرعد (گرج)\n\n\n14. 🕊️ Ibrahim (Abraham) - ابراہیم (ابراہیم)\n\n\n15. 🪨 Al-Hijr (The Rocky Tract) - الحجر (پتھرائی زمین)\n\n\n16. 🐝 An-Nahl (The Bee) - النحل (مکھی)\n\n\n17. 🌙 Al-Isra' (The Night Journey) - الإسراء (رات کا سفر)\n\n\n18. 🕳️ Al-Kahf (The Cave) - الکہف (غار)\n\n\n19. 👩‍🍼 Maryam (Mary) - مریم (مریم)\n\n\n20. 📜 Ta-Ha (Ta-Ha) - طٰہٰ (طٰہٰ)\n\n\n21. 📖 Al-Anbiya' (The Prophets) - الانبیاء (پیغمبروں)\n\n\n22. 🕋 Al-Hajj (The Pilgrimage) - الحج (حج)\n\n\n23. 🙌 Al-Mu'minun (The Believers) - المؤمنون (ایمان والے)\n\n\n24. 💡 An-Nur (The Light) - النور (روشنی)\n\n\n25. ⚖️ Al-Furqan (The Criterion) - الفرقان (فرق کرنے والا)\n\n\n26. 🎤 Ash-Shu'ara' (The Poets) - الشعراء (شاعر)\n\n\n27. 🐜 An-Naml (The Ant) - النمل (چڑیا)\n\n\n28. 📚 Al-Qasas (The Stories) - القصص (کہانیاں)\n\n\n29. 🕷️ Al-Ankabut (The Spider) - الأنعام (مکڑی)\n\n\n30. 🏛️ Ar-Rum (The Romans) - الروم (رومی)\n\n\n31. 📖 Luqman (Luqman) - لقمان (لقمان)\n\n\n32. 🙇 As-Sajda (The Prostration) - السجدہ (سجدہ)\n\n\n33. ⚔️ Al-Ahzab (The Combined Forces) - الاحزاب (مخلوط قوتیں)\n\n\n34. 🌸 Saba' (Sheba) - سبا (سبا)\n\n\n35. 🛠️ Fatir (The Originator) - فاطر (خالق)\n\n\n36. 📖 Ya-Sin (Ya-Sin) - یس (یس)\n\n\n37. 🛡️ As-Saffat (Those who set the Ranks) - الصافات (صفیں مرتب کرنے والے)\n\n\n38. 🅱️ Sad (The Letter Sad) - صاد (حرف صاد)\n\n\n39. 🪖 Az-Zumar (The Troops) - الزمر (جنگی دستے)\n\n\n40. 🤲 Ghafir (The Forgiver) - غافر (بخشنے والا)\n\n\n41. 📜 Fussilat (Explained in Detail) - فصلت (تفصیل سے بیان)\n\n\n42. 🗣️ Ash-Shura (Consultation) - الشوری (مشاورت)\n\n\n43. 💰 Az-Zukhruf (The Gold Adornments) - الزخرف (سونے کے زیور)\n\n\n44. 💨 Ad-Dukhan (The Smoke) - الدخان (دھواں)\n\n\n45. 🐊 Al-Jathiyah (The Crouching) - الجاثیہ (جھکنا)\n\n\n46. 🌪️ Al-Ahqaf (The Wind-Curved Sandhills) - الأحقاف (ہوائی چکروں والی ریت کی پہاڑیاں)\n\n\n47. 🕋 Muhammad (Muhammad) - محمد (محمد)\n\n\n48. 🏆 Al-Fath (The Victory) - الفتح (فتح)\n\n\n49. 🏠 Al-Hujurat (The Rooms) - الحجرات (کمرے)\n\n\n50. 🔤 Qaf (The Letter Qaf) - قاف (حرف قاف)\n\n\n51. 🌬️ Adh-Dhariyat (The Winnowing Winds) - الذاریات (پھٹنے والی ہوائیں)\n\n\n52. ⛰️ At-Tur (The Mount) - الطور (پہاڑ)\n\n\n53. 🌟 An-Najm (The Star) - النجم (ستارہ)\n\n\n54. 🌙 Al-Qamar (The Moon) - القمر (چاند)\n\n\n55. 💖 Ar-Rahman (The Beneficent) - الرحمن (بہت مہربان)\n\n\n56. 🌌 Al-Waqi'a (The Inevitable) - الواقعہ (ہونے والا)\n\n\n57. 🔩 Al-Hadid (The Iron) - الحدید (لوہا)\n\n\n58. 👩‍⚖️ Al-Mujadila (The Pleading Woman) - المجادلہ (مدعی عورت)\n\n\n59. 🏴 Al-Hashr (The Exile) - الحشر (اخراج)\n\n\n60. 🔍 Al-Mumtahanah (She that is to be examined) - الممتحنہ (جانچنے والی)\n\n\n61. 📊 As-Saff (The Ranks) - الصف (صفیں)\n\n\n62. 🕌 Al-Jumu'ah (Friday) - الجمعة (جمعہ)\n\n\n63. 🤥 Al-Munafiqun (The Hypocrites) - المنافقون (منافق)\n\n\n64. 🌪️ At-Taghabun (Mutual Disillusion) - التغابن (آپس کی بے وقوفی)\n\n\n65. 💔 At-Talaq (The Divorce) - الطلاق (طلاق)\n\n\n66. 🚫 At-Tahrim (The Prohibition) - التحریم (پابندی)\n\n\n67. 👑 Al-Mulk (The Sovereignty) - المُلك (حکومت)\n\n\n68. 🖋️ Al-Qalam (The Pen) - القلم (قلم)\n\n\n69. 🔍 Al-Haqqah (The Reality) - الحقہ (حقیقت)\n\n\n70. ⬆️ Al-Ma'arij (The Ascending Stairways) - المعارج (چڑھنے کی سیڑھیاں)\n\n\n71. 🌊 Nuh (Noah) - نوح (نوح)\n\n\n72. 👻 Al-Jinn (The Jinn) - الجن (جنات)\n\n\n73. 🕵️‍♂️ Al-Muzzammil (The Enshrouded One) - المزمل (چادر اوڑھے ہوئے)\n\n\n74. 🧕 Al-Muddathir (The Cloaked One) - المُدثر (پوشیدہ)\n\n\n75. 🌅 Al-Qari'ah (The Calamity) - القارعة (آفت)\n\n\n76. 🧑‍🤝‍🧑 Al-Insan (Man) - الانسان (انسان)\n\n\n77. ✉️ Al-Mursalat (The Emissaries) - المُرسلات (پہنچانے والے)\n\n\n78. 📣 An-Naba' (The Tidings) - النبأ (خبریں)\n\n\n79. 🪤 An-Nazi'at (Those who drag forth) - النازعات (کھینچنے والے)\n\n\n80. 😠 Abasa (He frowned) - عبس (اس نے چہرہ بدلا)\n\n\n81. 💥 At-Takwir (The Overthrowing) - التکوير (پھٹنا)\n\n\n82. 💔 Al-Infitar (The Cleaving) - الانفطار (پھٹنا)\n\n\n83. ⚖️ Al-Mutaffifin (Defrauding) - المطففين (کم تولنے والے)\n\n\n84. 🌀 Al-Inshiqaq (The Splitting Open) - الانشقاق (پھٹنا)\n\n\n85. 🌌 Al-Buruj (The Mansions of the Stars) - البروج (ستاروں کے گھر)\n\n\n86. 🌠 At-Tariq (The Morning Star) - الطارق (صبح کا ستارہ)\n\n\n87. 🌍 Al-Ala (The Most High) - الأعلى (سب سے بلند)\n\n\n88. 🌊 Al-Ghashiyah (The Overwhelming) - الغاشیہ (پرامن)\n\n\n89. 🌅 Al-Fajr (The Dawn) - الفجر (صبح)\n\n\n90. 🏙️ Al-Balad (The City) - البلد (شہر)\n\n\n91. ☀️ Ash-Shams (The Sun) - الشمس (سورج)\n\n\n92. 🌜 Al-Lail (The Night) - اللیل (رات)\n\n\n93. 🌅 Ad-Duha (The Morning Hours) - الضحی (صبح کے گھنٹے)\n\n\n94. 📖 As-Sharh (The Relief) - الشرح (آرام)\n\n\n95. 🍈 At-Tin (The Fig) - التین (انجیر)\n\n\n96. 💧 Al-Alaq (The Clot) - العلق (خون کا لوتھڑا)\n\n\n97. ⚡ Al-Qadr (The Power) - القدر (قدرت)\n\n\n98. 📜 Al-Bayyinah (The Clear Proof) - البینة (واضح دلیل)\n\n\n99. 🌍 Az-Zalzalah (The Earthquake) - الزلزلة (زلزلہ)\n\n\n100. 🐎 Al-Adiyat (The Chargers) - العادیات (چارج کرنے والے)\n\n\n101. ⚡ Al-Qari'ah (The Calamity) - القارعة (آفت)\n\n\n102. 💰 At-Takathur (The Abundance of Wealth) - التکاثر (مال کی کثرت)\n\n\n103. ⏳ Al-Asr (The Time) - العصر (وقت)\n\n\n104. 😠 Al-Humazah (The Scandal-Monger) - الہمزہ (چغلی کرنے والا)\n\n\n105. 🐘 Al-Fil (The Elephant) - الفیل (ہاتھی)\n\n\n106. 🕌 Quraysh (Quraysh) - قریش (قریش)\n\n\n107. 🤲 Al-Ma'un (Acts of Kindness) - الماعون (نیکی کے کام)\n\n\n108. 🍇 Al-Kawthar (The Abundance) - الکوثر (کثرت)\n\n\n109. ❌ Al-Kafirun (The Disbelievers) - الکافرون (کافر)\n\n\n110. 🛡️ An-Nasr (The Help) - النصر (مدد)\n\n\n111. 🔥 Al-Lahab (The Flame) - اللہب (شعلہ)\n\n\n112. ❤️ Al-Ikhlas (The Sincerity) - الإخلاص (اخلاص)\n\n\n113. 🌅 Al-Falaq (The Daybreak) - الفلق (طلوع صبح)\n\n\n114. 🌐 An-Nas (Mankind) - الناس (انسانیت)\n\n❀° ┄──•••───╮\n  *♥️ JAZAK ALLAH*\n╰───•••──┄ °❀\n\n \n > " + config.CAPTION;
            await _0x54adbc.sendMessage(_0x59e925, {
              'image': {
                'url': "https://qu.ax/vvtgy.jpg"
              },
              'caption': _0x382d61,
              'contextInfo': {
                'mentionedJid': [_0x39d831.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363391326900797@newsletter",
                  'newsletterName': '♛︎Legend-MD࿐"
                  'serverMessageId': 0x8f
                }
              }
            }, {
              'quoted': _0x37e6a6
            });
            break;
          case '2':
            let _0xb0737a = "        \n*[ • 👨‍💻 OWNER-CMD 👨‍💻 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ᴜᴘᴅᴀᴛᴇᴄᴍᴅ*\n*┋* *.sᴇᴛᴛɪɴɢs*\n*┋* *.ᴏᴡɴᴇʀ*\n*┋* *.ʀᴇᴘᴏ*\n*┋* *.ꜱʏꜱᴛᴇᴍ*\n*┋* *.ꜱᴛᴀᴛᴜꜱ*\n*┋* *.ʙʟᴏᴄᴋ*\n*┋* *.ᴜɴʙʟᴏᴄᴋ*\n*┋* *.sʜᴜᴛᴅᴏᴡɴ*\n*┋* *.ᴄʟᴇᴀʀᴄʜᴀᴛs*\n*┋* *.sᴇᴛᴘᴘ*\n*┋* *.ʙʀᴏᴀᴅᴄᴀsᴛ*\n*┋* *.ᴊɪᴅ*\n*┋* *.ɢᴊɪᴅ*\n*┋* *.ʀᴇꜱᴛᴀʀᴛ*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x54adbc.sendMessage(_0x59e925, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0xb0737a,
              'contextInfo': {
                'mentionedJid': [_0x39d831.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363391326900797@newsletter",
                  'newsletterName': '♛︎Legend-MD࿐"
                  'serverMessageId': 0x8f
                }
              }
            }, {
              'quoted': _0x37e6a6
            });
            break;
          case '3':
            let _0x2abe12 = "\n*[ • 📥 DOWNLOADER-CMD 📥 ‎• ]*                        \n*╭┈───────────────•*\n*┋* *.ғʙ <ᴜʀʟ>*\n*┋* *.ɪɴꜱᴛᴀ <ᴜʀʟ>*\n*┋* *.ᴠɪᴅᴇᴏ <ᴜʀʟ>*\n*┋* *.ɢᴅʀɪᴠᴇ <ᴜʀʟ>*\n*┋* *.ᴛᴡɪᴛᴛᴇʀ <ᴜʀʟ>*\n*┋* *.ᴛᴛ<ᴜʀʟ>*\n*┋* *.ᴍᴇᴅɪᴀғɪʀᴇ <ᴜʀʟ>*\n*┋* *.ꜱᴏɴɢ <ϙᴜᴇʀʏ>*\n*┋* *.ᴘʟᴀʏ <ᴜʀʟ>*\n*┋* *.ᴠɪᴅᴇᴏ <ϙᴜᴇʀʏ>*\n*┋* *.ᴠɪᴅᴇᴏ2 <ᴜʀʟ>*\n*┋* *.ɪᴍɢ <ϙᴜᴇʀʏ>*\n*┋* *.ᴀᴘᴋ <ɴᴀᴍᴇ>*\n*┋* *.ᴅᴀʀᴀᴍᴀ <ᴛɪᴛᴛʟᴇ>*\n*┋* *.ᴘʟᴀʏ2 <ᴛɪᴛᴛʟᴇ>*\n*┋* *.ʙᴀɪsᴄᴏᴘᴇ <ᴜʀʟ>*\n*┋* *.ɢɪɴɪsɪsɪʟᴀ <ᴛɪᴛᴛʟᴇ>*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x54adbc.sendMessage(_0x59e925, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x2abe12,
              'contextInfo': {
                'mentionedJid': [_0x39d831.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363391326900797@newsletter",
                  'newsletterName': "♛︎Legend-MD࿐",
                  'serverMessageId': 0x8f
                }
              }
            }, {
              'quoted': _0x37e6a6
            });
            break;
          case '4':
            let _0x385ec2 = "\n*[ • 👥 GROUP-CMD 👥 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ʀᴇᴍᴏᴠᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*\n*┋* *.ᴅᴇʟᴇᴛᴇ <ʀᴇᴘʟʏ ғᴏʀ ᴅᴇʟᴇᴛᴇ sᴍs>*\n*┋* *.ᴀᴅᴅ*\n*┋* *.ᴋɪᴄᴋ*\n*┋* *.ᴋɪᴄᴋᴀʟʟ*\n*┋* *.sᴇᴛɢᴏᴏᴅʙʏᴇ <ᴛᴇxᴛ>*\n*┋* *.sᴇᴛᴡᴇʟᴄᴏᴍᴇ <ᴛᴇxᴛ>*\n*┋* *.ᴘʀᴏᴍᴏᴛᴇ*\n*┋* *.ᴅᴇᴍᴏᴛᴇ*\n*┋* *.ᴛᴀɢᴀʟʟ*\n*┋* *.ɢᴇᴛᴘɪᴄ*\n*┋* *.ɪɴᴠɪᴛᴇ*\n*┋* *.ʀᴇᴠᴏᴋᴇ*\n*┋* *.ᴊᴏɪɴʀᴇǫᴜᴇsᴛs*\n*┋* *.ᴀʟʟʀᴇǫ*\n*┋* *.ᴍᴜᴛᴇ*\n*┋* *.ᴜɴᴍᴜᴛᴇ*\n*┋* *.ʟᴏᴄᴋɢᴄ*\n*┋* *.ᴜɴʟᴏᴄᴋɢᴄ*\n*┋* *.ʟᴇᴀᴠᴇ*\n*┋* *.ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*\n*┋* *.ᴜᴘᴅᴀᴛᴇɢᴅᴇsᴄ*\n*┋* *.ᴊᴏɪɴ*\n*┋* *.ʜɪᴅᴇᴛᴀɢ*\n*┋* *.ɢɪɴғᴏ*\n*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏɴ*\n*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ ᴏғғ*\n*┋* *.ᴅɪsᴀᴘᴘᴇᴀʀ 7ᴅ 24ʜ 90ᴅ*\n*┋* *.sᴇɴᴅᴅᴍ*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x54adbc.sendMessage(_0x59e925, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x385ec2,
              'contextInfo': {
                'mentionedJid': [_0x39d831.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363391326900797@newsletter",
                  'newsletterName': '♛︎Legend-MD࿐"
                  'serverMessageId': 0x8f
                }
              }
            }, {
              'quoted': _0x37e6a6
            });
            break;
          case '5':
            let _0x2d846c = "\n*[ • 📃 INFO-CMD 📃 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ᴍᴇɴᴜ*\n*┋* *.ᴍᴇɴᴜ2*\n*┋* *.ᴍᴇɴᴜ3*\n*┋* *.ᴀʙᴏᴜᴛ*\n*┋* *.sᴄʀɪᴘᴛ*\n*┋* *.ʀᴇᴘᴏ*\n*┋* *.ᴀʟɪᴠᴇ*\n*┋* *.ʙᴏᴛɪɴꜰᴏ*\n*┋* *.ꜱᴛᴀᴛᴜꜱ*\n*┋* *.ꜱᴜᴘᴘᴏʀᴛ*\n*┋* *.ᴘɪɴɢ*\n*┋* *.ᴘɪɴɢ2*\n*┋* *.ꜱʏꜱᴛᴇᴍ*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x54adbc.sendMessage(_0x59e925, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x2d846c,
              'contextInfo': {
                'mentionedJid': [_0x39d831.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363391326900797@newsletter",
                  'newsletterName': "♛︎Legend-MD࿐"
                  'serverMessageId': 0x8f
                }
              }
            }, {
              'quoted': _0x37e6a6
            });
            break;
          case '6':
            let _0x44e54a = "\n*[ • 🥂 RANDOM-CMD 🥂 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ᴋɪɴɢ*\n*┋* *.ᴅᴏɢ*\n*┋* *.ᴀɴɪᴍᴇ*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ1*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ2*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ3*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ4*\n*┋* *.ᴀɴɪᴍᴇɢɪʀʟ5*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x54adbc.sendMessage(_0x59e925, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x44e54a,
              'contextInfo': {
                'mentionedJid': [_0x39d831.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363391326900797@newsletter",
                  'newsletterName': "♛︎Legend-MD࿐"
                  'serverMessageId': 0x8f
                }
              }
            }, {
              'quoted': _0x37e6a6
            });
            break;
          case '7':
            let _0x2d2246 = "\n*[ • 🎡 CONVERTER-CMD 🎡 ‎• ]*\n*╭┈───────────────•*\n*┋* *.sᴛɪᴄᴋᴇʀ*\n*┋* *.ᴛʀᴛ <ᴛᴇxᴛ>*\n*┋* *.ᴛᴛs <ᴛᴇxᴛ>*\n*┋* *.ᴀᴛᴛᴘ <ᴛᴇxᴛ>*\n*┋* *.ᴛᴛᴘ <ᴛᴇxᴛ>*\n*┋* *.ᴠᴠ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*\n*┋* *.ᴜʀʟ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*\n*┋* *.ᴛᴏᴜʀʟ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*\n*┋* *.ɪᴍɢ2ᴜʀʟ <ɪᴍɢ ᴏʀ ᴠɪᴅᴇᴏ>*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x54adbc.sendMessage(_0x59e925, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x2d2246,
              'contextInfo': {
                'mentionedJid': [_0x39d831.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363391326900797@newsletter",
                  'newsletterName': "♛︎Legend-MD࿐"
                  'serverMessageId': 0x8f
                }
              }
            }, {
              'quoted': _0x37e6a6
            });
            break;
          case '8':
            let _0x49e4b8 = "\n*[ • 🧠 AI-CMD 🧠 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ɢᴘᴛ <ᴛᴇxᴛ>*\n*┋* *.ᴀɪ <ᴛᴇxᴛ>*\n*┋* *.ʙᴏᴛ <ᴛᴇxᴛ>*\n*┋* *.ʙʟᴀᴄᴋʙᴏx <ᴛᴇxᴛ>*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x54adbc.sendMessage(_0x59e925, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x49e4b8,
              'contextInfo': {
                'mentionedJid': [_0x39d831.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363391326900797@newsletter",
                  'newsletterName': "♛︎Legend-MD࿐"
                  'serverMessageId': 0x8f
                }
              }
            }, {
              'quoted': _0x37e6a6
            });
            break;
          case '9':
            let _0x46fcea = "\n*[ • 🏜️ WALLPAPERS-CMD 🏜️ ‎• ]*\n*╭┈───────────────•*\n*┋* *.ɪᴍɢ*\n*┋* *.ʀᴡ*\n*┋* *.ᴘɪɴᴛʀᴇsᴛ*\n*┋* *.ᴡᴀʟʟᴘᴀᴘᴘᴇʀ*\n*┋* *.ᴄᴘᴘ*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x54adbc.sendMessage(_0x59e925, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x46fcea,
              'contextInfo': {
                'mentionedJid': [_0x39d831.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363391326900797@newsletter",
                  'newsletterName': "♛︎Legend-MD࿐"",
                  'serverMessageId': 0x8f
                }
              }
            }, {
              'quoted': _0x37e6a6
            });
            break;
          case '10':
            let _0x226f3c = "\n*[ • 🌐 OTHER-CMD 🌐 ‎• ]*\n*╭┈───────────────•*\n*┋* *.ᴛʀᴛ*\n*┋* *.ᴊᴏᴋᴇ*\n*┋* *.ꜰᴀᴄᴛ*\n*┋* *.ɢɪᴛʜᴜʙꜱᴛᴀʟᴋ*\n*┋* *.ɢᴘᴀꜱꜱ*\n*┋* *.ʜᴀᴄᴋ*\n*┋* *.ʜᴀɴᴅ*\n*┋* *.ᴍᴏᴏɴ*\n*┋* *.ɴɪᴋᴀʟ*\n*┋* *.ǫᴜᴏᴛᴇ*\n*┋* *.ꜱʀᴇᴘᴏ*\n*┋* *.ᴅᴇꜰɪɴᴇ*\n*╰┈───────────────•*\n\n> " + config.CAPTION;
            await _0x54adbc.sendMessage(_0x59e925, {
              'image': {
                'url': config.ALIVE_IMG
              },
              'caption': _0x226f3c,
              'contextInfo': {
                'mentionedJid': [_0x39d831.sender],
                'forwardingScore': 0x3e7,
                'isForwarded': true,
                'forwardedNewsletterMessageInfo': {
                  'newsletterJid': "120363391326900797@newsletter",
                  'newsletterName': "♛︎Legend-MD࿐",
                  'serverMessageId': 0x8f
                }
              }
            }, {
              'quoted': _0x37e6a6
            });
            break;
          default:
            _0x38d3d7("*Please select a valid option 1 to 10🔴*");
        }
      }
    });
  } catch (_0x7b1d80) {
    console.error(_0x7b1d80); 
    await _0x54adbc.sendMessage(_0x59e925, {
      'react': {
        'text': '❌',
        'key': _0x37e6a6.key
      }
    });
    _0x38d3d7("An error occurred while processing your request.");
  }
});
