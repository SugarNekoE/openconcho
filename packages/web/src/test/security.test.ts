import { describe, expect, it } from "vitest";
import { isHttpOrHttpsUrl, isSafeExternalUrl } from "@/lib/security";

describe("security URL helpers", () => {
	it("only allows http and https URLs for external OS opens", () => {
		expect(isSafeExternalUrl("https://example.com/webhook")).toBe(true);
		expect(isSafeExternalUrl("http://localhost:3000/webhook")).toBe(true);
		expect(isSafeExternalUrl("file:///etc/passwd")).toBe(false);
		expect(isSafeExternalUrl("javascript:alert(1)")).toBe(false);
		expect(isSafeExternalUrl("openconcho://settings")).toBe(false);
	});

	it("only accepts http and https webhook endpoints", () => {
		expect(isHttpOrHttpsUrl("https://hooks.example.com/a")).toBe(true);
		expect(isHttpOrHttpsUrl("http://hooks.example.com/a")).toBe(true);
		expect(isHttpOrHttpsUrl("ftp://hooks.example.com/a")).toBe(false);
		expect(isHttpOrHttpsUrl("notaurl")).toBe(false);
	});
});
