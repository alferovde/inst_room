import React from "react";
import style from "./header_navigation.module.scss";
import { headerMenu } from "@/app/local_store";
import Link from "next/link";
const HeaderNavigation = () => {
  const renderMenu = () => {
    return headerMenu.map((item) => {
      return (
        <Link key={item.id} href={item.href}>
          {item.title}
        </Link>
      );
    });
  };

  return <nav className={style.header_navigation}>{renderMenu()}</nav>;
};

export default HeaderNavigation;
