import { ping, MESSAGE_TYPE } from "../src/discord";

describe("Describe", () => {
	it("should dm the user", async () => {
		const channelMock = {
			send: jest.fn(),
		};
		const createDMMock = jest.fn().mockResolvedValue(channelMock);
		const message: MESSAGE_TYPE = {
			delete: jest.fn().mockResolvedValue(new Promise(() => {})),
			author: {
				createDM: createDMMock,
			},
			reply: jest.fn(),
		};

		await ping(message);

		expect(message.delete).toHaveBeenCalled();
		expect(channelMock.send).toHaveBeenCalledWith("pong");
	});

	it("should reply to the user if dm are deactivated", async () => {
		const createDMMock = jest.fn().mockRejectedValue({});
		const message: MESSAGE_TYPE = {
			delete: jest.fn().mockResolvedValue(new Promise(() => {})),
			author: {
				createDM: createDMMock,
			},
			reply: jest.fn(),
		};

		await ping(message);

		expect(message.delete).toHaveBeenCalled();
		expect(message.reply).toHaveBeenCalledWith("pong");
	});
});
