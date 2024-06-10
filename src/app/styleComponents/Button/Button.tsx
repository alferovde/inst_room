import React from "react";
import style from "./button.module.scss";

type Button = {
  children: string;
  color: "accent" | "grey" | "lightGrey" | "blackGrey";
  disable?: boolean;
  click?: (params: any) => any;
};

const Button = ({
  children,
  color,
  disable = false,
  click = undefined,
}: Button) => {
  const setStyleButton = () => {
    switch (color) {
      case "accent":
        return style.accent_button;

      case "grey":
        return style.grey_button;

      case "lightGrey":
        return style.lightGrey_button;

      case "blackGrey":
        return style.blackGrey_button;

      default:
        break;
    }
  };

  return (
    <button
      className={`${style.style_button} ${setStyleButton()}`}
      disabled={disable}
      onClick={click}
      style={
        disable
          ? {
              cursor: "not-allowed",
              backgroundColor: "grey",
              color: "lightgray",
            }
          : undefined
      }
    >
      {children}
    </button>
  );
};

export default Button;
