import React from "react";
import "./dropdows_usermenu.scss";
import Image from "next/image";
import logout from "../../../../public/images/logout.svg";
import { useCookies } from "react-cookie";
import style from "./drop_down_usermenu.module.scss";
import user from "../../../../public/images/user_login.png";
import { useRouter } from "next/navigation";
const DropDownUserMenu = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const route = useRouter();
  return (
    <ul className={style.dropdown_usermenu__wrapper}>
      <li onClick={() => route.push("/private")} key={1}>
        <Image src={user} width={32} height={32} alt="private" />
      </li>

      <li
        onClick={() => {
          removeCookie("currentUser", cookies.currentUser);
          route.push("/");
        }}
        key={2}
      >
        <Image src={logout} width={32} height={32} alt="logout" />
      </li>
    </ul>
  );
};

export default DropDownUserMenu;
