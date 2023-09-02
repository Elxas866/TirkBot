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
	console.log(member.tag + 'joined');
	console.log(member.guild.systemChannel);
	member.guild.systemChannel.send('<@' + member.id + '>' + ' Hast du ein Problem? (Taschenkontrolle)');
});

client.on('messageCreate', message => {

	schimpfwoerter = [
		'huan', 
		'hurensohn', 
		'neger', 
		'nigga', 
		'opfer',
		'behinderte',
		'schwuchtel',
		'trottl',
		'trotteline',
		'maximalpigmentierte',
		'gschissene',
		'oaschloch',
		'schiarch',
		'deppad',
		'fetznschädl',
		'missgeburt',
		'bastard',
		'penis',
		'schwanz',
		'kalb',
		'hmar',
		'geringverdiener',
		'idiot'
	];

	antworten = [
		'Darf er so?',
		'Hätte er mir gesagt!',
		'Abow!',
		'A B O W',
		'woah, woah, woah',
		'Ansage wallah'
	]

	antwortIndex = Math.floor(Math.random() * antworten.length + 0);
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