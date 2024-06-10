import React, { useState, useEffect } from "react";
import style from "./login_page.module.scss";
import Input from "@/app/styleComponents/Input/Input";

import { useRouter } from "next/navigation";
import BtnClose from "@/app/pageComponents/BtnClose/BtnClose";
import { SetStateAction, Dispatch } from "react";
import NotificationComponent from "@/app/styleComponents/NotificationComponent/NotificationComponent";
import { confirmCode } from "@/app/reducers/userReducer";
import { useCookies } from "react-cookie";
const EnterCodeComponent = ({
  activeWindow,
  setActiveWindow,
  enterCode,
  code,
}: {
  activeWindow: boolean;
  setActiveWindow: Dispatch<SetStateAction<boolean>>;
  enterCode: string;
  code: number;
}) => {
  const route = useRouter();
  const [time, setTime] = useState(59);
  const [refreshNumbre, setRefreshNumber] = useState(false);
  const [userCode, setUserCode] = useState(code);
  const [errorCode, setErrorCode] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  let phone_mail = enterCode.slice(0, 2) + "****" + enterCode.slice(7);

  useEffect(() => {
    if (time > 0) {
      let interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setRefreshNumber(!refreshNumbre);
    }
  }, [time]);

  const confirmEnterCode = (value: string | number) => {
    if (value.length === 4) {
      console.log(value);

      confirmCode({ code: value, email: enterCode })
        .then((data) => {
          setCookie("currentUser", enterCode);
          route.back();
        })
        .catch((err) => setErrorCode(!errorCode));
    }

    setTimeout(() => {
      setErrorCode(false);
    }, 3000);
  };

  return (
    <div className={style.code_component}>
      <NotificationComponent
        message={`Код может приходить на почту или телефона. Для простоты реслизации сделал окно с паролем на фронте ${userCode}`}
        type="info"
      />
      {errorCode ? (
        <NotificationComponent message={"неправильный код"} type="error" />
      ) : undefined}

      <BtnClose />
      <h2>Введите код</h2>
      <Input
        type="password"
        title="4 цифры"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          confirmEnterCode(e.target.value)
        }
      />

      <div className={style.change_number}>
        <p>Код отправлен на номер:</p>
        <div className={style.change_number_btn}>
          <p>{phone_mail}</p>
          {refreshNumbre ? (
            <p onClick={() => setActiveWindow(!activeWindow)}>Изменить</p>
          ) : undefined}
        </div>
      </div>

      <div className={style.code_component__timer}>
        Отправить код ещё раз можно {time ? "через 00:" + time : "сейчас"}
      </div>
    </div>
  );
};

export default EnterCodeComponent;
