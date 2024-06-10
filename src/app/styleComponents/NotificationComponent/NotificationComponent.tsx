import React from "react";
import "./NotificationComponent.scss";

type Notification = {
  message: string | number;
  type: "info" | "error";
};

const NotificationComponent = ({ message, type }: Notification) => {
  return (
    <div
      className={
        type === "error"
          ? "notification__wrapper notification_error"
          : type === "info"
          ? "notification__wrapper notification_info"
          : "notification__wrapper"
      }
    >
      {message}

      {type === "info" ? (
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="1.5" />
          <path
            d="M12 17V11"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <circle
            cx="1"
            cy="1"
            r="1"
            transform="matrix(1 0 0 -1 11 9)"
            fill="#fff"
          />
        </svg>
      ) : (
        <svg
          fill="#fff"
          height="800px"
          width="800px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
        >
          <path
            d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M64,256c0-106.1,86-192,192-192
	c42.1,0,81,13.7,112.6,36.7L100.7,368.6C77.7,337,64,298.1,64,256z M256,448c-42.1,0-81-13.7-112.6-36.7l267.9-267.9
	c23,31.7,36.7,70.5,36.7,112.6C448,362.1,362,448,256,448z"
          />
        </svg>
      )}
    </div>
  );
};

export default NotificationComponent;
