import React from "react";

import styles from "./styles.module.scss";
import { Button, IconButton } from "rsuite";

import { contactMethods } from "~/mocks/contactMethods";
import Contact from "~/components/contact/Contact";

import FileDownloadIcon from "@rsuite/icons/FileDownload";
import ExportIcon from "@rsuite/icons/Export";

function HomeSegment(props) {
  return (
    <div id="home-segment" className={styles["wrapper"]}>
      <div className={styles["info"]}>
        <div className={styles["common-info"]}>
          <span className={styles["hi"]}>Hello, I'm</span>
          <span className={styles["name"]}>Phùng Đức Mạnh</span>
          <span className={styles["skill"]}>Web application developer</span>
        </div>
        <div className={styles["actions"]}>
          <IconButton color="red" appearance="primary" icon={<ExportIcon />}>
            Hire me
          </IconButton>
          <IconButton
            color="blue"
            appearance="primary"
            icon={<FileDownloadIcon />}
          >
            Download CV
          </IconButton>
        </div>
        <div className={styles["contact-methods"]}>
          {contactMethods &&
            contactMethods.map((method) => (
              <Contact key={method.id} {...method} />
            ))}
        </div>
      </div>
      <div className={styles["banner"]}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/029/711/176/small_2x/developer-with-ai-generated-free-png.png" />
      </div>
    </div>
  );
}

export default HomeSegment;
