"use client";

import styles from "./page.module.scss";
import useSWR from "swr";
const global_path_server = process.env.host;
import { Raleway } from "next/font/google";
import Button from "./styleComponents/Button/Button";
import SvgImage from "./styleComponents/SvgImage/SvgImage";
import "animate.css";
import basket from "../../public/images/basket.svg";
import basket_cliked from "../../public/images/basket_cliked.svg";
import PageProvider from "./pageComponents/PageProvider/PageProvider";
import BanerComponent from "./pageComponents/BanerComponent/BanerComponent";
import CatalogSection from "./pageComponents/CatalogSection/CatalogSection";
import { getData } from "./reducers/mainPageredcer";
import { ReactNode } from "react";

export default function Home() {
  const { data, error, isLoading } = useSWR(global_path_server, getData);

  return (
    <main className={`${styles.main_page}`}>
      <PageProvider error={error} isLoading={isLoading}>
        <div className={styles.banner__wrapper}>
          <BanerComponent />
        </div>
        <CatalogSection data={data} />
      </PageProvider>
    </main>
  );
}
