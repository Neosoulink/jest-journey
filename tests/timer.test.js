import { sleep } from "../src/timer";
describe('Timer', ()=> {
	it.concurrent("Should sleep for 3s", async () => {
		const t = Date.now();
		await sleep(2);

		expect(Date.now() - t).toBeGreaterThanOrEqual(2000);
	});

	it.concurrent("Should sleep for 1s", async () => {
		const t = Date.now();
		await sleep(1);

		expect(Date.now() - t).toBeGreaterThanOrEqual(1000);
	});

});
