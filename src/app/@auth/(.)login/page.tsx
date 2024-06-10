"use client";

import React, { useState, useEffect } from "react";
import ModalComponent from "../../styleComponents/Modal/page";
import style from "./login_page.module.scss";
import { useRouter } from "next/navigation";
import BtnClose from "@/app/pageComponents/BtnClose/BtnClose";
import Input from "@/app/styleComponents/Input/Input";
import Button from "@/app/styleComponents/Button/Button";
import Link from "next/link";
import EnterCodeComponent from "./EnterCodeComponent";
import { getCode } from "@/app/reducers/userReducer";
import NotificationComponent from "@/app/styleComponents/NotificationComponent/NotificationComponent";
const page = () => {
  const route = useRouter();
  const [enterUserData, setEnterCode] = useState("");
  const [activeWindow, setActiveWindow] = useState(false);
  const [registerNeed, setRegisterNeed] = useState(false);
  const [currentCode, setCurrentCode] = useState(0);
  const [checkField, setCheckField] = useState(false);

  useEffect(() => {}, [checkField]);

  const handlerCodeEnter = () => {
    if (enterUserData == "") {
      setCheckField(!checkField);
    } else {
      getCode(enterUserData)
        .then((data) => {
          console.log(data);
          if (data.data) {
            console.log("-->", data.data);
            setCurrentCode(data.data);
            setActiveWindow(!activeWindow);
          } else {
            setRegisterNeed(!registerNeed);

            setTimeout(() => {
              setRegisterNeed(false);
            }, 3000);
          }
        })
        .catch(/*обработка возможной ошибки, но тут нет "плохих" кодов ответа*/);
    }
  };

  return (
    <ModalComponent>
      {registerNeed ? (
        <NotificationComponent message="необходима регистрация" type="error" />
      ) : undefined}
      {activeWindow ? (
        <EnterCodeComponent
          activeWindow={activeWindow}
          setActiveWindow={setActiveWindow}
          enterCode={enterUserData}
          code={currentCode}
        />
      ) : (
        <div className={style.login_page__wrapper}>
          <BtnClose />
          <h2>Вход</h2>
          <div className={style.login_form}>
            <Input
              type="text"
              title="Телефон / Email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEnterCode(e.target.value);
                setCheckField(false);
              }}
              check={checkField}
              required={"Заполните поле"}
            />

            <Button color="blackGrey" click={() => handlerCodeEnter()}>
              ПОЛУЧИТЬ КОД
            </Button>
            <p>
              <span> Нажимая на кнопку вы соглашаетесь</span> на обработку ваших
              персональных данных
            </p>
            <Link href={"/register"}>Зарегистрироваться</Link>
          </div>
        </div>
      )}
    </ModalComponent>
  );
};

export default page;
