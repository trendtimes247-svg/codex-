export type JsonResult<T> = { ok: true; data: T } | { ok: false; status: number; error: string };

export async function readJson<T>(request: Request, maxBytes = 16_384): Promise<JsonResult<T>> {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) return { ok: false, status: 415, error: "Expected application/json." };
  const text = await request.text();
  if (text.length > maxBytes) return { ok: false, status: 413, error: "Request body is too large." };
  try {
    return { ok: true, data: JSON.parse(text) as T };
  } catch {
    return { ok: false, status: 400, error: "Malformed JSON." };
  }
}
