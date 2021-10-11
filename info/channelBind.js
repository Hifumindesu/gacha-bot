// List of channels the bot is bound to
const boundChannels = new Map([
	['bot-tests', '892826883555721236'],
]);

module.exports = {
	data: boundChannels,

	getBoundChannel(channel) {
		return boundChannels.get(channel);
	},

	setBoundChannel(channel, id) {
		return boundChannels.set(channel, id);
	},
};