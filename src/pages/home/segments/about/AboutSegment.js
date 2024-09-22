import React from "react";

import styles from "./styles.module.scss";
import { Tag } from "rsuite";

const photoURL =
  "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/460724202_122203771742032328_5761019579310722938_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Kv81cbW-C0wQ7kNvgEmcqYf&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=A0Lj-noyP9mVVlGSSULcY5s&oh=00_AYD-tdkijyljSm1LXakzwvboTf4CMkuDucMb28vkDSUghw&oe=66F39FA8";

function AboutSegment(props) {
  return (
    <div id="about-segment" className={styles["wrapper"]}>
      <span className={styles["title"]}>About me</span>
      <div className={styles["about-me"]}>
        <img className={styles["avatar"]} src={photoURL} />
        <div className={styles["info"]}>
          <div className={styles["user-info"]}>
            <span className={styles["name"]}>Phùng Đức Mạnh</span>
            <span className={styles["job"]}>Web appliction developer</span>
          </div>
          <span className={styles["intro"]}>
            <strong>Country: </strong>Viet Nam <br />
            <strong>Education: </strong>PTIT HCM (2020 - 2025) [Software
            technology] <br />
            <strong>Gender: </strong> Male <br />
            <strong>Date of birth: </strong> 18/11/2002 <br />
            <strong>Skill: </strong>
            <div className={styles["skills"]}>
              <Tag>HTML</Tag>
              <Tag>CSS</Tag>
              <Tag>SCSS</Tag>
              <Tag>JS</Tag>
              <Tag>ExpressJS</Tag>
              <Tag>ReactJS</Tag>
              <Tag>Java</Tag>
              <Tag>SQL</Tag>
              <Tag>Docker</Tag>
            </div>
            <br />
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutSegment;
