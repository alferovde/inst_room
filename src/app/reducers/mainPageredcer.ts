const global_path_server = process.env.host;

export async function getData() {
  const res = await fetch(`${global_path_server}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
