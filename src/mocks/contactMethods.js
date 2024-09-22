import { IoLogoGithub } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const contactMethods = [
  {
    id: 1,
    type: "link",
    icon: <IoLogoGithub />,
    title: "Github",
    url: "https://github.com/phungducmanh666",
    description: "phungducmanh666",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+84 708-850-496",
  },
  {
    id: 3,
    type: "link",
    icon: <FaYoutube />,
    title: "Youtube",
    url: "https://www.youtube.com/@laptrinhbe",
    description: "@laptrinhbe",
  },
  {
    id: 4,
    icon: <IoIosMail />,
    title: "Gmail",
    description: "phungducmanh666@gmail.com",
  },
];
