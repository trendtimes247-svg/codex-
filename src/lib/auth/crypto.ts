const encoder = new TextEncoder();
function toBase64Url(bytes: Uint8Array) { return btoa(String.fromCharCode(...bytes)).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", ""); }
function fromBase64Url(value: string) { const normalized = value.replaceAll("-", "+").replaceAll("_", "/"); const binary = atob(normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=")); return Uint8Array.from(binary, (char) => char.charCodeAt(0)); }
export async function sha256(value: string) { const hash = await crypto.subtle.digest("SHA-256", encoder.encode(value)); return toBase64Url(new Uint8Array(hash)); }
export async function signPayload(payload: string, secret: string) { const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]); const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload)); return `${payload}.${toBase64Url(new Uint8Array(signature))}`; }
export async function verifyPayload(signed: string, secret: string) { const index = signed.lastIndexOf("."); if (index < 0) return null; const payload = signed.slice(0, index); const signature = signed.slice(index + 1); const expected = await signPayload(payload, secret); const expectedSignature = expected.slice(expected.lastIndexOf(".") + 1); return signature === expectedSignature ? payload : null; }
export function encodeJson(value: unknown) { return toBase64Url(encoder.encode(JSON.stringify(value))); }
export function decodeJson<T>(value: string): T { return JSON.parse(new TextDecoder().decode(fromBase64Url(value))) as T; }
