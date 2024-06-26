"use client";

import React, { useState } from "react";
import Image from "next/image";
import heart from "../../../../public/images/heart.svg";
import compare from "../../../../public/images/comporation.png";
import user from "../../../../public/images/user_login.png";
import basket from "../../../../public/images/shopping_cart.png";
import style from "./header_userinfo.module.scss";
import Link from "next/link";
import { useCookies } from "react-cookie";
import DropDownMenu from "@/app/styleComponents/DropDownMenu/DropDownMenu";
import DropDownUserMenu from "@/app/styleComponents/DropDownUserMenu/DropDownUserMenu";
const HeaderUserInfo = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const [activeUserMenu, setActiveUserMenu] = useState(false);
  return (
    <>
      {cookies.currentUser ? (
        <ul className={style.header__product_info__wrapper}>
          <li className={style.header__favourites}>
            <div className={style.info_data}>15</div>

            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.7881 6.14666C27.1071 5.46533 26.2985 4.92485 25.4086 4.5561C24.5187 4.18735 23.5648 3.99756 22.6015 3.99756C21.6381 3.99756 20.6843 4.18735 19.7943 4.5561C18.9044 4.92485 18.0958 5.46533 17.4148 6.14666L16.0015 7.55999L14.5881 6.14666C13.2125 4.77107 11.3468 3.99827 9.40146 3.99827C7.45608 3.99827 5.59038 4.77107 4.21479 6.14666C2.8392 7.52225 2.06641 9.38795 2.06641 11.3333C2.06641 13.2787 2.8392 15.1444 4.21479 16.52L5.62813 17.9333L16.0015 28.3067L26.3748 17.9333L27.7881 16.52C28.4695 15.839 29.0099 15.0304 29.3787 14.1405C29.7474 13.2505 29.9372 12.2966 29.9372 11.3333C29.9372 10.37 29.7474 9.41613 29.3787 8.52619C29.0099 7.63624 28.4695 6.82767 27.7881 6.14666V6.14666Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </li>
          <li className={style.header__comparison}>
            <div className={style.info_data}>0</div>
            <Image src={compare} width={32} height={32} alt="compare" />
          </li>
          <li
            className={style.header__user}
            onMouseLeave={() => setActiveUserMenu(false)}
            onClick={() => setActiveUserMenu(!activeUserMenu)}
          >
            <div className={style.header__user_section}>
              <Image src={user} width={32} height={32} alt="user" />
              {activeUserMenu ? <DropDownUserMenu /> : undefined}
            </div>
          </li>
          <li className={style.header__basket}>
            <div className={style.info_data}>0</div>
            <Image src={basket} width={32} height={32} alt="basket" />
          </li>
          <div className={style.header__cart__info}>
            Товаров на сумму <span>2 000 ₽</span>
          </div>
        </ul>
      ) : (
        <div className={style.header__not_auth}>
          <Link href={"/login"}>
            <Image src={user} width={32} height={32} alt="user" />
          </Link>
        </div>
      )}
    </>
  );
};

export default HeaderUserInfo;
