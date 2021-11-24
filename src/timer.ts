export function sleep(s: number): Promise<any> {
	return new Promise((resolve) => {
		const ms = s * 1000;
		setTimeout(() => {
			resolve(ms);
		}, ms);
	});
}
