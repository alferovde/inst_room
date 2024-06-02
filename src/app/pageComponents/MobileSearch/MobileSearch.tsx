"use client";
import React, { useState } from "react";
import Image from "next/image";
import btn from "../../../../public/images/burger.png";
import style from "./search_mobile.module.scss";
import close from "../../../../public/images/close_btn.png";
import SearchComponent from "../SearchComponent/SearchComponent";
const MobileSearch = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handlerOpenMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className={style.search__mobile}>
      <Image src={btn} alt="burger" onClick={() => handlerOpenMenu()} />

      <div
        className={style.search__mobile__close}
        onClick={() => handlerOpenMenu()}
      >
        <Image src={close} alt="close" />
      </div>
      {activeMenu ? (
        <div className={style.search__mobile__wrapper}>
          <SearchComponent />
        </div>
      ) : undefined}
    </div>
  );
};

export default MobileSearch;
