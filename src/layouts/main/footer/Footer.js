import React from "react";

import styles from "./styles.module.scss";
import Contact from "~/components/contact/Contact";

import { IoIosMail } from "react-icons/io";
import { MdSubject } from "react-icons/md";

import Send from "@rsuite/icons/Send";

import { ButtonToolbar, IconButton, Input, InputGroup } from "rsuite";
import { contactMethods } from "~/mocks/contactMethods";

const formFields = (
  <>
    <InputGroup size="md">
      <Input size="md" placeholder="Enter your email" />
      <InputGroup.Button>
        <IoIosMail />
      </InputGroup.Button>
    </InputGroup>
    <InputGroup size="md">
      <Input size="md" placeholder="Enter subject" />
      <InputGroup.Button>
        <MdSubject />
      </InputGroup.Button>
    </InputGroup>
    <Input as="textarea" size="md" rows={3} placeholder="Enter your message" />

    <ButtonToolbar>
      <IconButton icon={<Send />} appearance="primary" color="blue" size="md">
        Send
      </IconButton>
    </ButtonToolbar>
  </>
);

function Footer({ className }) {
  return (
    <div className={`${className} ${styles["wrapper"]}`} id="contact-segment">
      <div className={styles["contact"]}>
        <span className={styles["title"]}>Contact</span>
        <div className={styles["contact-methods"]}>
          {contactMethods &&
            contactMethods.map((method) => (
              <Contact key={method.id} {...method} />
            ))}
        </div>
      </div>
      <div className={styles["get-in-touch"]}>
        <span className={styles["title"]}>Get in touch</span>
        <div className={styles["form"]}>{formFields}</div>
      </div>
      <div className={styles["dev-info"]}>
        <span className={styles["title"]}>Developer by Phùng Đức Mạnh</span>
      </div>
    </div>
  );
}

export default Footer;
