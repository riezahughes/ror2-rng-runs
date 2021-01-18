require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.api.applications(client.user.id).guilds(process.env.GUILD_ID).commands.post({
        data: {
            name: "hello",
            description: "hello world command"
            // possible options here e.g. options: [{...}]
        }
    });


    client.ws.on('INTERACTION_CREATE', async (interaction: { data: { name: string; options: any; }; id: any; token: any; }) => {
        const command = interaction.data.name.toLowerCase();
        const args = interaction.data.options;

        if (command === 'hello'){ 
            // here you could do anything. in this sample
            // i reply with an api interaction
            client.api.interactions(interaction.id, interaction.token).callback.post({
                data: {
                    type: 4,
                    data: {
                        content: "hello world!!!"
                    }
                }
            })
        }
    });
});

client.login(process.env.TOKEN);