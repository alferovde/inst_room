import React from "react";
import Slider from "react-slick";
import style from "./simple_slider.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./simpleSliderStyle.scss";
import SmallProductCard from "../SmallProductCard/SmallProductCard";
type SimpleSlider = {
  id?: number;
  title: string;
  data: any[];
};

const SimpleSlider = ({ title, id, data }: SimpleSlider) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,

    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderCard = () => {
    return data.map((item) => {
      return item.category_id === id ? (
        <SmallProductCard {...item} />
      ) : undefined;
    });
  };

  return (
    <div className={style.simple_slider__wrapper}>
      <h2>{title}</h2>

      <Slider {...settings} draggable={false} className="main_slider">
        {renderCard()}
      </Slider>
    </div>
  );
};

export default SimpleSlider;
