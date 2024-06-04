import React from "react";
import style from "./catalog_section.module.scss";
import SimpleSlider from "../SimpleSlider/SimpleSlider";

type CatalogSection = {
  data: {
    categories: { id: number; title: string }[];
    sub_categories: { id: number; title: string };
    products: [];
  };
};

const CatalogSection = ({ data }: CatalogSection) => {
  const renderMainSlidersComponent = () => {
    return data.categories.map((item) => {
      return (
        <SimpleSlider
          key={item.id}
          title={item.title}
          id={item.id}
          data={data.products}
        />
      );
    });
  };

  return (
    <div className={`${style.catalog_section__wrapper} container`}>
      {renderMainSlidersComponent()}
    </div>
  );
};

export default CatalogSection;
