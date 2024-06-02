"use client";
import React, { useState } from "react";
import { parse } from "svg-parser";
import Image from "next/image";
import {
  StaticImageData,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";

type SvgComponent = {
  src: string;
  src_alt: any;
  click(): any;
  alt: string;
  active: boolean | number;
};
const SvgImage = ({ src, src_alt, click, alt, active }: SvgComponent) => {
  const [image, setImage] = useState(active ? src_alt : src);

  const clickHandler = () => {
    click();

    image === src ? setImage(src_alt) : setImage(src);
  };

  return (
    <>
      <Image
        src={image}
        width={60}
        height={56}
        alt={alt}
        onClick={() => clickHandler()}
      />
    </>
  );
};

export default SvgImage;
