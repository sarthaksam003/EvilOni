import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as GiIcons from "react-icons/gi";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    clsname: "nav-text",
  },
  {
    title: "Size Chart",
    path: "/size-chart",
    icon: <GiIcons.GiSewingNeedle />,
    clsname: "nav-text",
  },
  {
    title: "Contact us",
    path: "/contact-us",
    icon: <BiIcons.BiPhone />,
    clsname: "nav-text",
  },
  {
    title: "FAQs",
    path: "/frequently-asked-questions",
    icon: <AiIcons.AiOutlineQuestionCircle />,
    clsname: "nav-text",
  },
];
