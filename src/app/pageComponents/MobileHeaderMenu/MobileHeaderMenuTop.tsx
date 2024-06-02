"use client";

import React, { useState } from "react";
import style from "./mobile_header_menu.module.scss";
import Image from "next/image";
import btn from "../../../../public/images/burger.png";
import close from "../../../../public/images/close_btn.png";
import HeaderUserInfo from "../HeaderUserInfo/HeaderUserInfo";
import header_logo from "../../../../public/images/header__logo.png";
import Link from "next/link";
const MobileHeaderMenuTop = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [animate, setAminate] = useState("animate__backInDown");

  const handlerOpenMenu = () => {
    if (activeMenu) {
      setAminate("animate__backOutUp");
      setTimeout(() => {
        setActiveMenu(!activeMenu);
      }, 1000);
    } else if (!activeMenu) {
      setAminate("animate__backInDown");
      setActiveMenu(!activeMenu);
    }
  };

  return (
    <div className={style.mobile_top_menu}>
      <Image src={btn} alt="burger" onClick={() => handlerOpenMenu()} />

      {activeMenu ? (
        <div
          className={`${style.mobile_menu__wrapper} animate__animated ${animate}`}
        >
          <div className={style.mobile_top_menu__close}>
            <Image src={close} alt="close" onClick={() => handlerOpenMenu()} />
          </div>
          <div className={style.mobile_top_menu__content}>
            <div className={style.mobile_top_menu__info}>
              <Link href={"/"}>
                <Image src={header_logo} width={90} height={56} alt="logo" />
              </Link>
              <div className={style.header__time}>
                Время работы: 10:00-20:00
              </div>
              <div className={style.header__phone}>
                <p>+7 495 120-32-14</p>
                <a href="tel:+123456789">Заказать звонок</a>
              </div>
            </div>

            <HeaderUserInfo />
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default MobileHeaderMenuTop;
