"use client";

import ModalComponent from "@/app/styleComponents/Modal/page";
import React, { useEffect, useState } from "react";
import style from "./register_page.module.scss";
import { useRouter } from "next/navigation";
import Button from "@/app/styleComponents/Button/Button";
import BtnClose from "@/app/pageComponents/BtnClose/BtnClose";
import Input from "@/app/styleComponents/Input/Input";

import { getRegisterUser } from "@/app/reducers/mainPageredcer";
const page = () => {
  const route = useRouter();
  const [registerUser, setRegisterUer] = useState({
    surname: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [userError, setUserError] = useState("");

  const checkEmailError = () => {
    if (registerUser.email == "" || userError == "user is db") {
      setCheckEmail(!checkEmail);
      return false;
    } else {
      setCheckEmail(false);
    }

    return true;
  };

  const validator = (value: string) => {
    const regExp = /[a-zA-Z]/;

    return regExp.test(value);
  };

  const checkPasswordError = () => {
    if (
      registerUser.password !== registerUser.password_confirm ||
      registerUser.password === ""
    ) {
      setCheckPassword(!checkPassword);
      return false;
    } else {
      setCheckPassword(false);
    }

    if (
      !validator(registerUser.password) ||
      registerUser.password !== registerUser.password_confirm
    ) {
      setCheckPassword(!checkPassword);
      return false;
    } else {
      setCheckPassword(false);
    }

    return true;
  };

  const sendRegisterUserData = (e: Event) => {
    e.preventDefault();
    checkEmailError();
    checkPasswordError();
    setUserError("");
    if (checkEmailError() && checkPasswordError()) {
      console.log(registerUser);

      getRegisterUser(registerUser)
        .then((data) => {
          setUserError("");
          route.back();
        })
        .catch((error) => setUserError(error.response.data));
    }
  };

  useEffect(() => {
    if (checkEmail) {
      let interval = setInterval(() => {
        setCheckEmail(!checkEmail);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [checkEmail, registerUser, userError]);

  useEffect(() => {
    if (checkPassword) {
      let interval = setInterval(() => {
        setCheckPassword(!checkPassword);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [checkPassword, registerUser, userError]);

  return (
    <ModalComponent>
      <div className={style.register_page__wrapper}>
        <BtnClose />
        <h2>Регистрация</h2>

        <form className={style.register_page__form} method="dialog">
          <Input
            title={"Фамилия"}
            onChange={(e: any) =>
              setRegisterUer({ ...registerUser, surname: e.target.value })
            }
          />
          <Input
            title={"Имя"}
            onChange={(e: any) =>
              setRegisterUer({ ...registerUser, name: e.target.value })
            }
          />
          <Input
            title={"Телефон"}
            onChange={(e: any) =>
              setRegisterUer({ ...registerUser, phone: e.target.value })
            }
          />
          <Input
            title={"Электронная почта"}
            onChange={(e: any) =>
              setRegisterUer({ ...registerUser, email: e.target.value })
            }
            check={checkEmail}
          />
          <Input
            title={"Пароль"}
            type="password"
            onChange={(e: any) =>
              setRegisterUer({ ...registerUser, password: e.target.value })
            }
            check={checkPassword}
          />
          <Input
            title={"Подтвердите пароль"}
            type="password"
            confirmPassword
            onChange={(e: any) =>
              setRegisterUer({
                ...registerUser,
                password_confirm: e.target.value,
              })
            }
            check={registerUser.password !== registerUser.password_confirm}
          />
          <Button color={"blackGrey"} click={(e) => sendRegisterUserData(e)}>
            РЕГИСТРАЦИЯ
          </Button>
        </form>

        <p>
          <span> Нажимая на кнопку вы соглашаетесь</span> на обработку ваших
          персональных данных
        </p>
      </div>
    </ModalComponent>
  );
};

export default page;
