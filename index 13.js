const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  PermissionsBitField,
  ButtonBuilder,
  ButtonStyle,
  userMention,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ModalSubmitInteraction,
  AttachmentBuilder
} = require("discord.js");

const client = new Client({
  intents: 131071,
});

const db = require('pro.db');

const prefix = "+"; // البريفكس

const probotid = "282859044593598464";

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!
    Index.js  ✅
    
    Database.json ✅
    
    BY GENERAL PROGS 💻
    
    https://discord.gg/3XUFDfSGQw
    `);
  client.user.setActivity("General Progs ON TOP", { type: 3 });
  client.user.setStatus("idle");
});




//================= resend probot message =========================//
client.on("messageCreate", message => {
  if (message.author.bot && message.author.id == probotid) {
    if(db.get('probotst') == 0) return;
    message.delete();
    let _0x10bdx2 = message.channel.send({content: message.content || "\u200B", files: (message.attachments.first() ? [message.attachments.first().url] : null) || null, embeds: message.embeds.length > 0 ? Array.from(message.embeds) : null, components: message.components.length > 0 ? Array.from(message.components) : null});
    if (message.content.endsWith("** left)")) {
      const _0x10bdx3 = async () => {
        message.delete();
      };
      setTimeout(_0x10bdx3, 3e3);
    }
  } else {
    if (message.author.id == client.user.id) {
      if (message.content.endsWith("** type these numbers to confirm :")) {
        const _0x10bdx4 = message.content.split(" ");
        const _0x10bdx5 = _0x10bdx4.indexOf("Transfer");
        const _0x10bdx6 = _0x10bdx4[_0x10bdx5 - 1];
        const _0x10bdx7 = message.channel.createMessageCollector({filter: _0x10bdx5 => {
          return _0x10bdx5.author.id == client.user.id && _0x10bdx5.content.startsWith(`${"**:moneybag: | "}${_0x10bdx6}${" has transferred"}`);
        }, time: 1e4});
        _0x10bdx7.on("collect", async _0x10bdx5 => {
          message.delete();
        });
        _0x10bdx7.on("end", async _0x10bdx3 => {
          if (_0x10bdx3.size == 0) {
            message.delete();
          }
        });
      }
      ;
      if (message.content.startsWith(`${"**:moneybag: | "}`) && message.content.includes("has transferred")) {
        const _0x10bdx8 = message.content.split(" ");
        const _0x10bdx5 = _0x10bdx8.indexOf("transferred");
        const _0x10bdx9 = Number(_0x10bdx8[_0x10bdx5 + 1].replace("`", "").replace("$", "").slice(0, -1));
        const _0x10bdx6 = _0x10bdx8[_0x10bdx5 - 2].slice(0, -1);
        const _0x10bdxa = message.guild.members.cache.find(_0x10bdxb => {
          return _0x10bdxb.user.username == _0x10bdx6;
        }).id || null;
        const _0x10bdxc = message.mentions.members.first();
        _0x10bdxc.user.send(`${"🏧 | Transfer Receipt \\`\\`\\`You have received \\$"}${_0x10bdx9}${" from user "}${_0x10bdx6}${" (ID: "}${_0x10bdxa}${")\r\nReason: No reason provided \r\n\\`\\`\\`"}`);
      }
    }
  }
});


client.on("messageCreate" , (message) => {
  if(message.content.startsWith(prefix + 'psystem on')){
    if (!message.member.permissions.has("Administrator")) return;
      db.set("probotst" , 1)
      message.reply("[√] تم تشغيل نظام البروبوت بريميوم")

  }else if(message.content.startsWith(prefix + 'psystem off')){
    if (!message.member.permissions.has("Administrator")) return;
    db.set("probotst" , 0)
    message.reply("[√] تم اطفاء نظام البروبوت بريميوم")

}
})



client.on("messageCreate" , (message) => {
  if(message.content == `<@${client.user.id}>`){
    if(db.get('probotst') == 1){
      message.reply(`مرحبا انا البربوت بريميوم وانا الان في حالة \`اشتغال\``)
    }else if(db.get('probotst') == 0){
      message.reply(`مرحبا انا البربوت بريميوم وانا الان في حالة \`اطفاء\``)
    }
  }
})


//===================================== جميع الاكواد هنا ====================================================//
client.login(process.env.token); // توكن البوت 
