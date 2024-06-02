import React from "react";
import style from "./sub_category.module.scss";
import Link from "next/link";

type SubCategory = {
  click?: any;
  isActive: boolean;
  data: { id: number; title: string; categorie_id: number }[];
};

const SubCategoryItem = ({ click, isActive, data }: SubCategory) => {
  console.log(data);

  const renderSubCategories = () => {
    if (data?.length > 0) {
      return data?.map((item) => {
        return (
          <Link href={""} key={item.id}>
            {item.title}
          </Link>
        );
      });
    } else {
      return "нет подходящих категорий";
    }
  };

  return (
    <div
      className={`${style.sub_category_item} ${
        isActive ? style.open : style.hidden
      } `}
      onClick={() => console.log(click)}
    >
      <nav>{renderSubCategories()}</nav>
    </div>
  );
};

export default SubCategoryItem;
