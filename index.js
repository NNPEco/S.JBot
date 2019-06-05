const Discord = require('discord.js');
const Commands = require('./command/maincmd.js'); 
const discordclient = new Discord.Client({disableEveryone: true});
var prefix = ('-');
discordclient.on("message", message => {
    const ch = message.channel;
    const aut = message.author;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.content.indexOf(prefix) == -1) return;
    discordclient.user.setActivity('반갑습니다!!');
    Commands.allcmd(discordclient,message,ch,aut,command,args,Discord);
    
});
discordclient.on('guildMemberAdd', member => {
    member.guild.systemChannel.send(`${member}` + "님 반갑습니다. DM으로 전송된 메시지를 확인해주세요.");
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("반갑습니다!",`${member}` +  "처음 오시는 분들은 <#자기소개>에 양식에 맞게 작성 부탁드립니다.\n\n 1. 말은 편하게 반말을 사용합니다. 그러나 기본적인 예의는 지켜주세요. \n 2. 방의 활성화를 위해서 물갈이 잦은 편입니다. \n 활동이 적은게 보일시 무통보 추방한다는 점 주의 해주세요. \n 3. 서로서로 존중하면서 게임 부탁드려요. 욕은 최대한 자제 해주세요. :blue_heart: \n\n 서로 배려하면서 재밌게 놀고 오래 봅시당 :pray::purple_heart: \n")
    .setTimestamp()
    member.sendEmbed(embed)
    console.log(`${member}`,"has joined" + `${member.guild.name}`);
});
discordclient.on('guildMemberRemove', member => {
    member.guild.systemChannel.send(`${member}` + " 님 잘가요 ㅠㅠ");
    console.log(`${member}`,"has Leaved" + `${member.guild.name}`);
});
discordclient.login(process.env.token);
