import React from "react";

import styles from "./styles.module.scss";
import HomeSegment from "./segments/home/HomeSegment";
import AboutSegment from "./segments/about/AboutSegment";

function HomePage(props) {
  return (
    <div className={styles["container"]}>
      <HomeSegment />
      <AboutSegment />
    </div>
  );
}

export default HomePage;
