import { sleep } from "../src/timer";

test("Should sleep for 3s", async () => {
	const t = Date.now();
	await sleep(3);

	expect(Date.now() - t).toBeGreaterThanEqual(2000);
});
