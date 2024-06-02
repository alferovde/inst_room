import React, { useState, useEffect } from "react";
import style from "./side_right_menu.module.scss";
import Image from "next/image";
import arrow_left from "../../../../public/images/arrow-left.svg";
import SubCategoryItem from "../DropDownMenu/SubCategoryItem/SubCategoryItem";
type SideRightMenu = {
  id?: number | undefined;
  title: string;
  sub_categories: { id: number; title: string; categorie_id: number }[];
};

const SideRightMenu = ({ title, id, sub_categories }: SideRightMenu) => {
  const [currentSubCategoryId, setCurrentSuCategoryId] = useState<
    number | undefined
  >(0);

  const [subCategory, setSubCategory] = useState<any[]>([{}]);

  const openSubCategory = (id: number | undefined) => {
    setCurrentSuCategoryId(id);
    if (currentSubCategoryId === id) {
      setCurrentSuCategoryId(0);
    } else {
      setCurrentSuCategoryId(id);
    }
  };

  useEffect(() => {
    setSubCategory(
      sub_categories.filter(
        (item) => item.categorie_id === currentSubCategoryId
      )
    );
  }, [currentSubCategoryId]);

  return (
    <div className={style.sideRight_item__wrapper}>
      <div
        className={style.sideRight_item}
        onMouseEnter={() => openSubCategory(id)}
        onMouseLeave={() => openSubCategory(0)}
      >
        <p>{title}</p>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5L16 12L9 19"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {currentSubCategoryId === id ? (
        <SubCategoryItem isActive={true} data={subCategory} />
      ) : // <SubCategoryItem isActive={false} />
      undefined}
    </div>
  );
};

export default SideRightMenu;
