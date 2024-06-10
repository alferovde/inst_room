"use client";

import React from "react";
import style from "./modal.module.scss";
import Link from "next/link";

import { useRouter } from "next/navigation";
const ModalComponent = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  return (
    <div className={`${style.modal__overlay} `}>
      <div className={style.modal__container}>{children}</div>
    </div>
  );
};

export default ModalComponent;
