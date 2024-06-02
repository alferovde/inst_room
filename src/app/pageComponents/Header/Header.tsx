import React from "react";
import style from "./header.module.scss";
import header_logo from "../../../../public/images/header__logo.png";
import Image from "next/image";
import burger from "../../../../public/images/burger.png";
import HeaderUserInfo from "../HeaderUserInfo/HeaderUserInfo";
import DropDownMenu from "@/app/styleComponents/DropDownMenu/DropDownMenu";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import SocialMenu from "../SocialMenu/SocialMenu";
import SearchComponent from "../SearchComponent/SearchComponent";
import { getData } from "@/app/reducers/mainPageredcer";
import { useRouter } from "next/router";
import Link from "next/link";
import MobileHeaderMenuBottom from "../MobileHeaderMenu/MobileHeaderMenuBottom";
import MobileHeaderMenuTop from "../MobileHeaderMenu/MobileHeaderMenuTop";
import MobileSearch from "../MobileSearch/MobileSearch";

const Header = async () => {
  let result = await getData();

  return (
    <header className={style.header}>
      <div className={style.header__top}>
        <div className={`${style.header__top__wrapper} container`}>
          <div className={style.header__logo}>
            <Link href={"/"}>
              <Image src={header_logo} width={90} height={56} alt="logo" />
            </Link>
          </div>
          <div className={style.header__time}>Время работы: 10:00-20:00</div>
          <div className={style.header__phone}>
            <p>+7 495 120-32-14</p>
            <a href="tel:+123456789">Заказать звонок</a>
          </div>
          <div className={style.header__product_info}>
            <HeaderUserInfo />
          </div>

          <div className={`${style.header__top__mobile_wrapper} `}>
            <MobileHeaderMenuTop />
          </div>
        </div>
      </div>

      <div className={style.header__bottom}>
        <div className={`${style.header__bottom__wrapper} container`}>
          <DropDownMenu
            title="Каталог товаров"
            img={burger}
            categories={result.categories}
            sub_categories={result.sub_categories}
          />
          <HeaderNavigation />
          <SocialMenu />
          <SearchComponent />
        </div>
        <div className={`${style.header__bottom__mobile_wrapper} container`}>
          <MobileHeaderMenuBottom
            categories={result.categories}
            sub_categories={result.sub_categories}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
