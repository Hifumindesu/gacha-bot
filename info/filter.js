// Filter slash commands so that they only work in channels the bot is bound to
const boundChannels = require('../info/channelBind.js');

module.exports = {
	filter(channelId) {
		let filter = false;
		boundChannels.data.forEach((_value, key) => {
			if (channelId === key) {
				filter = false;
				return;
			}
			else if (channelId !== key) {
				filter = true;
			}
		});
		return filter;
	},
};
