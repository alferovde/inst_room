const global_path_server = process.env.host;
import axios from "axios";

export async function getCode(enterUserData: any) {
  const res = axios({
    method: "post",
    url: `${global_path_server}/loginconfirm`,
    data: { email: enterUserData },
  });

  return res;
}

export async function confirmCode(code: {}) {
  console.log(code);
  const res = axios({
    method: "post",
    url: `${global_path_server}/loginconcode`,
    data: code,
  });

  return res;
}
