"use client";

import React, { useState } from "react";
import style from "./dropdownmenu.module.scss";
import { StaticImageData } from "next/image";
import Image from "next/image";
import SideRightMenu from "../SideRightMenu/SideRightMenu";
type DropDown = {
  title: string;
  img: StaticImageData;
  categories: { id: number; title: string }[];
  sub_categories: { id: number; title: string; categorie_id: number }[];
};

const DropDownMenu = ({ title, img, categories, sub_categories }: DropDown) => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [styleMenu, setStyleMenu] = useState(style.hidden);
  const handlerOpenMenu = () => {
    setHiddenMenu(!hiddenMenu);
    hiddenMenu ? setStyleMenu(style.open) : setStyleMenu(style.hidden);
  };

  const renderCategories = () => {
    return categories.map((item) => {
      return (
        <SideRightMenu
          key={item.id}
          title={item.title}
          sub_categories={sub_categories}
          id={item.id}
        />
      );
    });
  };

  return (
    <div className={style.drop_downmenu}>
      <div
        className={style.drop_downmenu__wrapper}
        onClick={() => handlerOpenMenu()}
      >
        <Image src={img} width={24} height={16} alt={title} />
        <p>{title}</p>
      </div>
      <ul className={`${style.drop_downmenu__menu} ${styleMenu}`}>
        {renderCategories()}
      </ul>
    </div>
  );
};

export default DropDownMenu;
