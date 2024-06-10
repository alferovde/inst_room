const global_path_server = process.env.host;
import axios from "axios";
export async function getData() {
  const res = await fetch(`${global_path_server}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getRegisterUser(user: any) {
  const res = axios({
    method: "post",
    url: `${global_path_server}/register`,
    data: user,
  });

  return res;
}
