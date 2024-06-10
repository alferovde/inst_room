import React, { useEffect } from "react";
import style from "./input.module.scss";
import "./styled_input.scss";
type Input = {
  id?: number;
  title: string;
  type?: string;
  onChange?: any;
  check?: boolean;
  confirmPassword?: boolean;
  required?: string;
};

const Input = ({
  title,
  type = "text",
  onChange,
  check,
  confirmPassword,
  required,
}: Input): React.ReactNode => {
  return (
    <div className={` ${check ? "error_style" : "input__wrapper"}`}>
      <label htmlFor={title}>{title}</label>
      <input type={type} id={title} onChange={onChange} />
      {type == "password" && check && !confirmPassword
        ? "Пароль не менее 6 символов, содержит заглавные буквы (A-Z)"
        : undefined}
      {check && confirmPassword ? "Пароли не совпадают" : undefined}
      {type === "text" && check && !required
        ? "Пользователь с таким email уже зарегистрирован или неверный email"
        : undefined}
      {required && check && type === "text" ? required : undefined}
    </div>
  );
};

export default Input;
