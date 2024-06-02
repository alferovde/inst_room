"use client";

import React, { useState } from "react";
import style from "./mobile_header_menu.module.scss";
import Image from "next/image";
import btn from "../../../../public/images/burger.png";
import close from "../../../../public/images/close_btn.png";
import CollapseMenu from "../CollapseMenu/CollapseMenu";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import SearchComponent from "../SearchComponent/SearchComponent";
const MobileHeaderMenuBottom = ({ categories, sub_categories }: any) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [animate, setAminate] = useState("animate__backInLeft");

  const handlerOpenMenu = () => {
    if (activeMenu) {
      setAminate("animate__backOutLeft");
      setTimeout(() => {
        setActiveMenu(!activeMenu);
      }, 1000);
    } else if (!activeMenu) {
      setAminate("animate__backInLeft");
      setActiveMenu(!activeMenu);
    }
  };
  return (
    <div className={style.mobile_bottom_menu}>
      <Image src={btn} alt="burger" onClick={() => handlerOpenMenu()} />
      {activeMenu ? (
        <div
          className={`${style.mobile_menu__wrapper} animate__animated ${animate}`}
        >
          <div className={style.mobile_top_menu__close}>
            <Image src={close} alt="close" onClick={() => handlerOpenMenu()} />
          </div>
          <div className={style.mobile_bottom_menu__content}>
            <HeaderNavigation />

            <div className={style.mobile_bottom_menu__collapse_menu}>
              <CollapseMenu
                categories={categories}
                sub_categories={sub_categories}
              />
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};

export default MobileHeaderMenuBottom;
