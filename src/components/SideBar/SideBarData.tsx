import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import * as Icons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
interface SidebarTypes{
  title: string,
  path: string,
  icons: JSX.Element,
  cName: string

}
export const SidebarData=[
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icons: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icons: <Icons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    icons: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
];
