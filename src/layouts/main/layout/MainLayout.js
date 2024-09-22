import React from "react";

import styles from "./styles.module.scss";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import HomePage from "~/pages/home/HomePage";

function MainLayout({ children }) {
  return (
    <div className={styles["container"]}>
      <Header className={styles["header"]} />
      <div className={styles["page"]}>
        <HomePage />
      </div>
      <Footer className={styles["footer"]} />
    </div>
  );
}

export default MainLayout;
