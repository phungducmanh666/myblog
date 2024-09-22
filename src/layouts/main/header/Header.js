import React, { useState } from "react";

import styles from "./styles.module.scss";

import { IoLogoGithub } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

function Header({ className }) {
  const [openMenu, setOpenMenu] = useState(false);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  return (
    <div className={`${className} ${styles["wrapper"]}`}>
      <IoLogoGithub className={styles["logo"]} />
      <div className={`${styles["menus"]} ${openMenu && styles["active"]}`}>
        <IoIosClose
          className={styles["close-menu-icon"]}
          onClick={handleCloseMenu}
        />
        <a
          className={styles["menu"]}
          href="#home-segment"
          onClick={handleCloseMenu}
        >
          Home
        </a>
        <a
          className={styles["menu"]}
          href="#about-segment"
          onClick={handleCloseMenu}
        >
          About
        </a>
        <a className={styles["menu"]} href="#">
          Service
        </a>
        <a
          className={styles["menu"]}
          href="#contact-segment"
          onClick={handleCloseMenu}
        >
          Contact
        </a>
        <a className={styles["menu"]} href="#">
          Posts
        </a>
      </div>
      <IoMenu className={styles["menu-icon"]} onClick={handleOpenMenu} />
    </div>
  );
}

export default Header;
