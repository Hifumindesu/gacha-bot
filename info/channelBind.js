// List of channels the bot is bound to
const boundChannels = new Map([
	// id, name
	['892826883555721236', 'bot-tests'],
]);

module.exports = {
	getBoundChannel(id) {
		return boundChannels.get(id);
	},

	setBoundChannel(id, name) {
		return boundChannels.set(id, name);
	},

	hasBoundChannel(id) {
		return boundChannels.has(id);
	},

	delBoundChannel(id) {
		return boundChannels.delete(id);
	},
};