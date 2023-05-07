import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navbarItems = [
  {
    id: 1,
    label: "Features",
    button: false,
    subMenu: [
      {
        icon: "/images/icon-todo.svg",
        label: "Todo List",
      },
      {
        icon: "/images/icon-calendar.svg",
        label: "Calendar",
      },
      {
        icon: "/images/icon-reminders.svg",
        label: "Reminders",
      },
      {
        icon: "/images/icon-planning.svg",
        label: "Planning",
      },
    ],
  },
  {
    id: 2,
    label: "Company",
    button: false,
    subMenu: [
      {
        label: "History",
      },
      {
        label: "Our Team",
      },
      {
        label: "Blog",
      },
    ],
  },
  {
    id: 3,
    label: "Careers",
    button: false,
    subMenu: false,
  },
  {
    id: 4,
    label: "About",
    button: false,
    subMenu: false,
  },
  {
    id: 5,
    label: "Login",
    button: false,
    subMenu: false,
  },
  {
    id: 6,
    label: "Register",
    button: true,
    subMenu: false,
  },
];

export const Navigation = () => (
  <motion.ul variants={variants} className="flex flex-col gap-1">
    {navbarItems.map((item) => (
      <MenuItem item={item} key={item.id} />
    ))}
  </motion.ul>
);
