import React from "react";
import "./BtnClose.scss";
import { useRouter } from "next/navigation";
const BtnClose = () => {
  const route = useRouter();
  return (
    <div className="btn_close_component" onClick={() => route.back()}></div>
  );
};

export default BtnClose;
