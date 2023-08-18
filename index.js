// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [
	GatewayIntentBits.Guilds, 
	GatewayIntentBits.GuildMessages, 
	GatewayIntentBits.MessageContent,
	GatewayIntentBits.GuildMembers
] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('guildMemberAdd', member => {
	console.log(member.tag);
	console.log(member.guild.systemChannel);
	member.guild.systemChannel.send('<@' + member.id + '>' + ' Hast du ein Problem? (Taschenkontrolle)');
});

client.on('messageCreate', message => {
	console.log(message.content);

	schimpfwoerter = [
		'huan', 
		'hurensohn', 
		'nega', 
		'nigga', 
		'opfer',
		'behinderte',
		'schwuchtel',
		'trottl',
		'trotteline',
		'maximalpigmentierte',
		'gschissener',
		'oaschloch',
		'schiarch',
		'deppad',
		'fetznschädl'
	];

	antworten = [
		'Darf er so?',
		'Hätte er mir gesagt!',
		'Abow!'
	]

	antwortIndex = Math.floor(Math.random() * 3 + 0);
	console.log(antwortIndex);

	if (message.mentions.members.size != 0) {
		victim = message.mentions.members.first();
		console.log('Victim: ' + victim);

		schimpfwoerter.forEach(wort => {
			if (message.content.toLowerCase().includes(wort)) {
				message.reply('<@' + victim + '>' + antworten[antwortIndex]);
			}
		});
	}
});

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);