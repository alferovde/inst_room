import React from "react";
import style from "./small_product_card.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from "react-slick";
import check from "../../../../public/images/check.png";

const SmallProductCard = ({
  title,
  img,
  is_new,
  price,
  old_price,
  in_stock,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderSmallSlider = () => {
    return img.split(";").map((item) => {
      return (
        <div className={style.small_product_card_slider_item}>
          <Image
            src={process.env.public + item}
            width={212}
            height={184}
            alt={title}
          />
        </div>
      );
    });
  };

  const BasketButton = () => {
    return (
      <div className={style.small_product_card_basket_btn}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 31C13.5523 31 14 30.5523 14 30C14 29.4477 13.5523 29 13 29C12.4477 29 12 29.4477 12 30C12 30.5523 12.4477 31 13 31Z"
            stroke="#F05A00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25 31C25.5523 31 26 30.5523 26 30C26 29.4477 25.5523 29 25 29C24.4477 29 24 29.4477 24 30C24 30.5523 24.4477 31 25 31Z"
            stroke="#F05A00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 4H7.72727L10.8945 20.9603C11.0026 21.5434 11.2986 22.0672 11.7307 22.4401C12.1629 22.8129 12.7036 23.0109 13.2582 22.9995H24.7455C25.3001 23.0109 25.8408 22.8129 26.2729 22.4401C26.705 22.0672 27.001 21.5434 27.1091 20.9603L29 10.3332H8.90909"
            stroke="#F05A00"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    );
  };

  return (
    <div className={style.small_product_card}>
      <div className={style.small_product_card_header}>
        {is_new === 1 ? (
          <div className={style.small_product_card_new}>Новинка</div>
        ) : (
          <div className={style.small_product_card_new_empty}></div>
        )}

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 20V10"
            stroke="#DEDBDB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 20V4"
            stroke="#DEDBDB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 20V14"
            stroke="#DEDBDB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.8411 4.61012C20.3303 4.09912 19.7239 3.69376 19.0564 3.4172C18.389 3.14064 17.6736 2.99829 16.9511 2.99829C16.2286 2.99829 15.5132 3.14064 14.8457 3.4172C14.1783 3.69376 13.5719 4.09912 13.0611 4.61012L12.0011 5.67012L10.9411 4.61012C9.9094 3.57842 8.51013 2.99883 7.0511 2.99883C5.59206 2.99883 4.19279 3.57842 3.1611 4.61012C2.1294 5.64181 1.5498 7.04108 1.5498 8.50012C1.5498 9.95915 2.1294 11.3584 3.1611 12.3901L4.2211 13.4501L12.0011 21.2301L19.7811 13.4501L20.8411 12.3901C21.3521 11.8794 21.7574 11.2729 22.034 10.6055C22.3106 9.93801 22.4529 9.2226 22.4529 8.50012C22.4529 7.77763 22.3106 7.06222 22.034 6.39476C21.7574 5.7273 21.3521 5.12087 20.8411 4.61012V4.61012Z"
            stroke="#DEDBDB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div className={style.small_product_card_slider}>
        <Slider {...settings} arrows={false}>
          {renderSmallSlider()}
        </Slider>
      </div>

      <h3> {title}</h3>
      <div className={style.small_product_card_footer}>
        <p className={style.small_product_card_footer__price}>{price}₽</p>
        <p className={style.small_product_card_footer__old_price}>
          {old_price}₽
        </p>
        {in_stock === 1 ? (
          <p className={style.small_product_card_footer__check}>
            <Image src={check} width={16} height={16} alt="check" /> в наличии
          </p>
        ) : undefined}

        <BasketButton />
      </div>
    </div>
  );
};

export default SmallProductCard;
