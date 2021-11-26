import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
import axios from "axios";
import Users from "../src/users";

jest.mock("axios");

const axios_ = axios as jest.Mocked<typeof axios>;

describe("Users", () => {
	beforeEach(() => {
		axios_.get.mockClear();
		axios_.post.mockClear();
		fetch.resetMocks();
	});
	const fakeResponse = [{ name: "John Doe" }];

	it("should return last user", async () => {
		axios_.get.mockResolvedValue({ data: fakeResponse });
		expect(await Users.getLastUserName()).toBe("John Doe");
	});

	it("should", async () => {
		fetch.mockResponseOnce(JSON.stringify(fakeResponse));
		expect(await Users.getLastUserNameFetch()).toBe("John Doe");
	});
});
