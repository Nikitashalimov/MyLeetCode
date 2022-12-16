/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
	return encodeURI(longUrl);
};

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
	return decodeURI(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */