import React from "react";

import styles from "./styles.module.scss";

function Contact({ icon, title, description, type, url }) {
  if (type === "link") {
    return (
      <div className={styles["wrapper"]}>
        <div className={styles["icon"]}>{icon}</div>
        <div className={styles["info"]}>
          <a className={styles["title"]} href={url}>
            {title}
          </a>
          <div className={styles["description"]}>{description}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["icon"]}>{icon}</div>
      <div className={styles["info"]}>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["description"]}>{description}</div>
      </div>
    </div>
  );
}

export default Contact;
