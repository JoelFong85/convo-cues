import camelcaseKeys from "camelcase-keys";

const BASE_URL = "http://localhost:8000";

export async function apiFetch<T>(
  path: string,
  options?: RequestInit
): Promise<T> {
  const endpoint = `${BASE_URL}${path}`;
  const res = await fetch(endpoint, options);

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const data = await res.json();
  return camelcaseKeys(data, { deep: true }) as T;
}
