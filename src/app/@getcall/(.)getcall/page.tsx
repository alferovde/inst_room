"use client";
import Input from "@/app/styleComponents/Input/Input";
import ModalComponent from "@/app/styleComponents/Modal/page";
import React, { useState } from "react";
import style from "./getcall.module.scss";
import TextArea from "@/app/styleComponents/TextArea/TextArea";
import Button from "@/app/styleComponents/Button/Button";
import { useRouter } from "next/navigation";
import IsSendModal from "./IsSendModal";
import BtnClose from "@/app/pageComponents/BtnClose/BtnClose";
const page = () => {
  const route = useRouter();
  const [isSend, setIsSend] = useState(false);
  return (
    <ModalComponent>
      {isSend ? (
        <IsSendModal />
      ) : (
        <div className={style.get_call_wrapper}>
          <BtnClose />

          <h2>Заказать звонок</h2>
          <form className={style.get_call_form} method="dialog">
            <Input title={"Имя"} />
            <Input title={"Телефон"} />
            <TextArea title={"Комментарий"} />
            <Button color={"blackGrey"} click={() => setIsSend(!isSend)}>
              ОТПРАВИТЬ
            </Button>
            <p>
              <span> Нажимая на кнопку вы соглашаетесь</span> на обработку ваших
              персональных данных
            </p>
          </form>
        </div>
      )}
    </ModalComponent>
  );
};

export default page;
