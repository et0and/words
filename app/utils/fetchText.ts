export async function fetchText(filename: string): Promise<string> {
  const response = await fetch(filename);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.text();
}
