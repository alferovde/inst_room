import React from "react";
import "./text_area.scss";

type TextArea = {
  title: string;
};

const TextArea = ({ title }: TextArea): React.ReactNode => {
  return (
    <div className="text_area__wrapper">
      <label htmlFor={title}>{title}</label>
      <textarea id={title} />
    </div>
  );
};

export default TextArea;
