import Reac, { useState } from "react";
import style from "./collapse_menu.module.scss";
import Link from "next/link";

type CollapseType = {
  categories: { id: number; title: string }[];
  sub_categories: { id: number; title: string; categorie_id: number }[];
};
const CollapseMenu = ({ categories, sub_categories }: CollapseType) => {
  const [activeSub, setActiveSub] = useState<number>(0);
  const [subAnimate, setSubAnimate] = useState("");
  const handlerActiveSub = (id: number) => {
    console.log(id);
    setActiveSub(id);
    // setSubAnimate(style.hidden);

    if (activeSub === id) {
      setActiveSub(0);
    }
  };

  console.log(categories);

  console.log(sub_categories);

  const renderSubCategory = (sub_id: number) => {
    return sub_categories
      .filter((item) => item.categorie_id === sub_id)
      .map((sub) => {
        return activeSub === sub.categorie_id ? (
          <Link
            className={`${style.collapse_menu__subcategory_item}  `}
            href={"/"}
          >
            {sub.title}
          </Link>
        ) : undefined;
      });
  };

  const renderCategory = () => {
    return categories.map((category) => {
      {
        return (
          <>
            <div
              className={style.collapse_menu__category}
              key={category.id}
              onClick={() => handlerActiveSub(category.id)}
            >
              {category.title}
            </div>
            <nav
              className={`${style.collapse_menu__subcategory} ${subAnimate}  `}
            >
              {renderSubCategory(category.id)}
            </nav>
          </>
        );
      }
    });
  };

  return <div className={style.collapse_menu__wrapper}>{renderCategory()}</div>;
};

export default CollapseMenu;
// {sub_categories
//   .filter((item) => item.categorie_id === category.id)
//   .map((sub) => {
//     return activeSub === sub.categorie_id ? (
//       <div
//         className={`${style.collapse_menu__subcategory} animate__animated ${subAnimate}`}
//       >
//         {sub.title}
//       </div>
//     ) : undefined;
//   })}
