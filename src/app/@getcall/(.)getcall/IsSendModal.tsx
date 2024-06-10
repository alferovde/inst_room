import React from "react";
import style from "./getcall.module.scss";
import { useRouter } from "next/navigation";
import Button from "@/app/styleComponents/Button/Button";
import BtnClose from "@/app/pageComponents/BtnClose/BtnClose";
const IsSendModal = () => {
  const route = useRouter();
  return (
    <div className={style.is_send__wrapper}>
      <BtnClose />

      <h2>Ваш заявка принята</h2>

      <p>Спасибо за заявку! Мы свяжемся с вами в ближайщее время</p>

      <Button color={"accent"} click={() => route.back()}>
        НА ГЛАВНУЮ
      </Button>
    </div>
  );
};

export default IsSendModal;
