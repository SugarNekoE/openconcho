const LOOPBACK_HOSTS = new Set(["localhost", "127.0.0.1", "::1", "[::1]", "0.0.0.0"]);

function parseUrl(value: string): URL | null {
	try {
		return new URL(value);
	} catch {
		return null;
	}
}

export function isLoopbackUrl(value: string): boolean {
	const parsed = parseUrl(value);
	if (!parsed) return false;
	return LOOPBACK_HOSTS.has(parsed.hostname.toLowerCase());
}

export function isHttpOrHttpsUrl(value: string): boolean {
	const parsed = parseUrl(value);
	return parsed?.protocol === "https:" || parsed?.protocol === "http:";
}

export function isSafeExternalUrl(value: string): boolean {
	const parsed = parseUrl(value);
	return parsed?.protocol === "https:" || parsed?.protocol === "http:";
}
