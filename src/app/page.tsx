import styles from "./page.module.scss";

import { Raleway } from "next/font/google";
import Button from "./styleComponents/Button/Button";
import SvgImage from "./styleComponents/SvgImage/SvgImage";
import "animate.css";
import basket from "../../public/images/basket.svg";
import basket_cliked from "../../public/images/basket_cliked.svg";
import PageProvider from "./pageComponents/PageProvider/PageProvider";
import BanerComponent from "./pageComponents/BanerComponent/BanerComponent";

export default function Home() {
  let isLoading = false;
  let isError = "";

  return (
    <main className={`${styles.main_page}`}>
      <PageProvider isError={isError} isLoading={isLoading}>
        <div className={styles.banner__wrapper}>
          <BanerComponent />
        </div>
      </PageProvider>
    </main>
  );
}
