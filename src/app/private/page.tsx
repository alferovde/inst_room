"use client";

import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
const UserPrivatePage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const route = useRouter();

  useEffect(() => {
    if (!cookies.currentUser) {
      route.back();
    }
  }, []);

  return <div>UserPrivatePage</div>;
};

export default UserPrivatePage;
