export type MESSAGE_TYPE = {
	delete: () => Promise<any>;
	author: { createDM: () => Promise<any> };
	reply: (msg: string) => {};
};

/**
 * @param {module:DynamicsCompressorNode.ts/message} message
 */
export async function ping(message: MESSAGE_TYPE): Promise<any> {
	message.delete().catch(console.error);
	return message.author
		.createDM()
		.then((ch) => ch.send("pong"))
		.catch(() => message.reply("pong"));
}
