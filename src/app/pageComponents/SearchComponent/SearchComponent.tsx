import React from "react";
import style from "./search_component.module.scss";
import search from "../../../../public/images/search_icon.svg";
import Image from "next/image";
const SearchComponent = () => {
  return (
    <div className={style.search_component}>
      <Image src={search} alt="search" width={24} height={24} />
      <input type="text" placeholder="Поиск по каталогу" />
    </div>
  );
};

export default SearchComponent;
