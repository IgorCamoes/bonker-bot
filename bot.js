require('dotenv').config();

const jimp = require('jimp');
const Discord = require('discord.js');

const client = new Discord.Client();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.DISCORD_TOKEN);


client.on('message', msg => {
    let mention = msg.mentions.users.first();

    if(msg.content === 'bonk?'){
        const imagem = new Discord.MessageAttachment('https://media1.tenor.com/images/ae34b2d6cbac150bfddf05133a0d8337/tenor.gif?itemid=14889944');

        msg.channel.send("bonk!", imagem);
    }
    else if(msg.content === 'hmeter'){
        const rh = () => {return Math.floor(Math.random() * 100)};
        let hp = rh();

        msg.channel.send(`Pelas minhas contas... <@${msg.author.id}> está ${hp}% horny hoje... :thinking:`);
            if(hp > 80){
                msg.channel.send(':rotating_light: EITA PORRA BONK ALERT NO VERMELHO!!! :rotating_light:');
                msg.channel.send(`bonks <@${msg.author.id}>`);
            }
            else if(hp > 60 && hp <= 80){
                msg.channel.send('Ei... Nem pense em aumentar isso aí. **Análise**')
            }
            else if(hp >= 40 && hp <= 60){
                msg.channel.send('Creio que não vai precisar de nenhum bonk... ~~por enquanto~~');
            }
            else if(hp > 20 && hp < 40){
                msg.channel.send('Entendível, tenha um ótimo dia.')
            }
            else if(hp <= 20){
                msg.channel.send('Continue assim, mas não tanto ou vou ter que te dar um horny pass.')
            }
    }
    else if(msg.content.startsWith('hmeter')){

        const rh = () => {return Math.floor(Math.random() * 100)};
        let hp = rh();

        if(mention.id === msg.author.id || mention.id){
            msg.channel.send(`Pelas minhas contas... ${mention} está ${hp}% horny hoje... :thinking:`);
            if(hp > 80){
                msg.channel.send(':rotating_light: EITA PORRA BONK ALERT NO MÁXIMO!!! :rotating_light:');
                msg.channel.send(`bonks ${mention}`);
            }
            else if(hp > 60 && hp <= 80){
                msg.channel.send('Ei... Nem pense em aumentar isso aí. **Análise**')
            }
            else if(hp >= 40 && hp <= 60){
                msg.channel.send('Creio que não vai precisar de nenhum bonk... ~~por enquanto~~');
            }
            else if(hp > 20 && hp < 40){
                msg.channel.send('Entendível, tenha um ótimo dia.')
            }
            else if(hp <= 20){
                msg.channel.send('Continue assim, mas não tanto ou vou ter que te dar um horny pass.')
            }
        }
        else if(msg.mentions.users.size >= 2){msg.channel.send('Ei! Uma pessoa por medição por favor????')}
        else if(mention.id === '734806792923775136'){msg.channel.send('Pelas minhas contas... Eu estou 0% horny. Ah pera, sempre estou assim :zany_face: :v:')}
    }
    else if(msg.content.startsWith('hornyj')){
        let mention = msg.mentions.users.first();

        if(msg.mentions.users.size >= 2){msg.channel.send('TÁ TODO MUNDO NA HORNY JAIL BICHO')}
        else if(mention.id === msg.author.id){
            msg.channel.send(`Tá... <@${mention.id}> você foi pra horny jail por conta própria.`, {files:['./h.jpg']});
        }
        else if(mention.id === '734806792923775136'){
            msg.channel.send('**nÃO**', {files:['./bonks-assets/bonk3.jpg']});
        }
        else if(mention === undefined){
            msg.channel.send(`<@${msg.author.id}> não mandou ninguém pra horny jail`);
        }
        else{
            const gif = new Discord.MessageAttachment('https://media1.tenor.com/images/6493bee2be7ae168a5ef7a68cf751868/tenor.gif?itemid=17298755');
            msg.channel.send('HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL HORNY JAIL', gif)
        }
    }
})

client.on('message', async msg => {
    if(msg.content.startsWith('bonks')){
        let mention = msg.mentions.users.first();

        if(msg.mentions.users.size >= 2){msg.channel.send('Opa, apenas um bonk por vez!')} 
        else if(mention === undefined){
            const imagem = new Discord.MessageAttachment('1591912890316.png')
            msg.channel.send(`_<@${msg.author.id}> tentou bonkear alguém mas esqueceu de alguma coisa_`, imagem);
        }
        else if(mention.id === '734806792923775136'){
            const template = await jimp.read('./bonks-assets/bonk3.jpg');
            const bonkedMask = await jimp.read('./bonks-assets/bonked-mask3.png');
            await jimp.read(msg.author.avatarURL({format: 'png'})).then(async avatar =>{
                avatar.mask(bonkedMask, 0, 0).write('./bonks-assets/bonk3maskedbonk.png');
                template.composite(avatar, 170, 70).write('./bonks-assets/bonk3-final.jpg');
                msg.channel.send(`<@${msg.author.id}> tried to bonk me, but guess what`, {files:['./bonks-assets/bonk3-final.jpg']})
            });
        }
        else if(mention.id === msg.author.id){
            const template = await jimp.read('./bonks-assets/bonk2.jpg');
            const bonkedMask2 = await jimp.read('./bonks-assets/bonked2-mask.png');
            await jimp.read(msg.author.avatarURL({format: 'png'})).then(async avatar =>{
                await avatar.mask(bonkedMask2);
                template.composite(avatar, 178, 69).write('./bonks-assets/bonk2-final.jpg');
                msg.channel.send(`<@${msg.author.id}> tried to bonk someone but bonks themselves in confusion. ||Maybe they deserved??||`, {files:['./bonks-assets/bonk2-final.jpg']})
            });
        }
        else{
            const template = await jimp.read('./bonks-assets/bonk.jpg');
            const bonkedMask = await jimp.read('./bonks-assets/bonked-mask.png');
            await jimp.read(msg.author.avatarURL({format: 'png'})).then(avatar =>{
                template.composite(avatar, 180, 70).write('./bonks-assets/bonk-1.jpg');
            })

            await jimp.read(mention.avatarURL({format:'png'})).then(async avatar =>{
                let bonking = await jimp.read('./bonks-assets/bonk-1.jpg');
                avatar.mask(bonkedMask);
                bonking.composite(avatar, 434, 233).write('./bonks-assets/bonk-final.jpg');
                msg.channel.send(`<@${msg.author.id}> bonks ${mention} hard as **FUCK**`, {files:['./bonks-assets/bonk-final.jpg']});
                console.log(mention.id);
            })
            .catch(err =>{
                console.log(err);
            })
            
            
        };
    }
})