const Discord = require('discord.js');
const Commands = require('./command/maincmd');
const discordclient = new Discord.Client();
const disid = "NTE4NzM4Mzg3NDA2OTQ2MzE5.XMUcOQ.qmnIogHG-YI6rPwOIeGtSYj2Z5k";
var prefix = ('-');
discordclient.on("message", message => {
    const ch = message.channel;
    const aut = message.author;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (message.content.indexOf(prefix) == -1) return;
    //Commands.allcmd(discordclient,message,ch,aut,command,args,Discord);
    
});
discordclient.on('guildMemberAdd', member => {
    member.guild.systemChannel.send(`${member}` + "님 반갑습니다. DM으로 전송된 메시지를 확인해주세요.");
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField("반갑습니다!",`${member}` +  "처음 오신 분들은 < #이름이-뭐예요-？ > 에 자기소개 남겨주세용 :blush:\n :one: 말은 편하게 하되, 서로 기본적인 예의는 갖춰주세요.\n :two: 장난은 정도껏, 기분 나빠하면 사과 먼저:exclamation:\n :three: 소수인원으로 가는 방이기 때문에 물갈이 잦아요. \n활발한 소통과 참여 부탁드려요.\n굳이 게임을 못한다면 단톡에서라도 활발하게 :pray::pray:\n:four: 여미새 남미새 :x::x: 제발 plz :sob::sob:\n:five: 욕은 적당히^^! 본인이 말하지만 듣는건 상대방! \n듣는 상대가 기분 나쁘지 않을 선에서만 하기\n( 특히 방장이 욕을 굉장히 싫어하니 하지말아쥬세여ㅠㅠ 겜 하면서 욕 듣고싶지 않아..)")
    .setTimestamp()
    member.sendEmbed(embed)
    member.send("", {
    file: "https://cdn.discordapp.com/attachments/396573058208497674/570750013471326208/1.jpg"
});
member.send("", {
    file: "https://cdn.discordapp.com/attachments/396573058208497674/570750021062885386/2.jpg"
});
member.send("", {
    file: "https://cdn.discordapp.com/attachments/396573058208497674/570750022602326017/3.jpg"
});
    console.log(`${member}`,"has joined" + `${member.guild.name}`);
});
discordclient.on('guildMemberRemove', member => {
    member.guild.systemChannel.send("Bye...");
    console.log(`${member}`,"has Leaved" + `${member.guild.name}`);
});
discordclient.login(disid);

