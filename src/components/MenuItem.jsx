import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 100, velocity: -10 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ item }) => {
  const [subBar, setSubBar] = React.useState("");
  return (
    <motion.li variants={variants} className="mb-4">
      {item.button ? (
        <div className="text-sm text-center text-[#141414] hover:bg-[#141414] hover:text-white border-[#141414] border rounded-xl py-2.5 px-5 cursor-pointer transition font-light">
          {item.label}
        </div>
      ) : (
        <div
          onClick={() =>
            item.id === subBar ? setSubBar("") : setSubBar(item.id)
          }
          className={`item-parent flex items-center gap-3 ${
            item.label === "Login"
              ? "justify-center hover:text-black/80 text-gray-500"
              : ""
          }`}
        >
          <span>{item.label}</span>
          {item.subMenu && <img src="/images/icon-arrow-down.svg" alt="" />}
        </div>
      )}

      {item.subMenu && (
        <div
          className={`ml-4 mt-4 transition ${
            item.id === subBar ? "h-auto block" : "h-0 hidden"
          }`}
        >
          {item.subMenu.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              {item.icon && (
                <div>
                  <img src={item.icon} className="mb-1 mr-3" alt="icon" />
                </div>
              )}
              <span class="text-gray-500 hover:text-gray-800 font-normal">
                {item.label}
              </span>
            </li>
          ))}
        </div>
      )}
    </motion.li>
  );
};
