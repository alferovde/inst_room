"use client";

import React from "react";
import style from "./baner_component.module.scss";
import Image from "next/image";
import baner_1 from "../../../../public/images/baner1.png";
import baner_2 from "../../../../public/images/baner2.png";
import baner_3 from "../../../../public/images/baner3.png";
import baner_4 from "../../../../public/images/baner4.png";
import Button from "@/app/styleComponents/Button/Button";
import arrow_left from "../../../../public/images/arrow-left_baner.png";
import { useRouter } from "next/navigation";
const ArrowComponent = () => {
  return (
    <div className={style.baner__arrow}>
      <Image src={arrow_left} alt="arrow" />
    </div>
  );
};

const BanerComponent = () => {
  const router = useRouter();
  return (
    <div className={`${style.baner__wrapper} container`}>
      <div className={style.baner__img_1}>
        <h1>DeWALT - Инструмент с настоящим характером</h1>
        <Button color="accent" click={() => router.push("/catalog")}>
          ПЕРЕЙТИ В КАТАЛОГ
        </Button>
        <ArrowComponent />
      </div>
      <div className={style.baner__img_2}>
        <h2>Акции</h2>
        <ArrowComponent />
      </div>
      <div className={style.baner__img_3}>
        <h2>Новое поступление</h2>
        <ArrowComponent />
      </div>
      <div className={style.baner__img_4}>
        <h2>Акции на сверла</h2>
        <ArrowComponent />
      </div>
    </div>
  );
};

export default BanerComponent;
