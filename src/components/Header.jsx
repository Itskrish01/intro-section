import React from "react";
import { MenuToggle } from "./MenuToggle";
import { SideBar } from "./SideBar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="container max-w-[85rem] sm:py-5 py-3 px-3 flex mx-auto items-center"
    >
      <img src="/images/logo.svg" className="mr-14 mt-1" alt="logo" />

      <div className="md:flex hidden justify-between items-center w-full">
        <ul className="flex gap-10">
          <li className="flex items-center gap-2 relative group text-gray-500 hover:text-gray-800 cursor-pointer">
            <span className="text-sm  cursor-pointer transition font-light">
              Features
            </span>
            <img src="/images/icon-arrow-down.svg" alt="" />
            <div class="absolute -top-2 -left-14 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform">
              <div
                class="relative top-6 p-5 bg-white rounded-lg w-full"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <div class="relative z-10">
                  <div class="">
                    <div>
                      <ul class=" text-[15px] flex flex-col gap-2">
                        <li className="flex items-center gap-4">
                          <div>
                            <img
                              src="/images/icon-todo.svg"
                              className="mb-1 mr-0.5"
                              alt="icon"
                            />
                          </div>
                          <span class=" text-gray-500 hover:text-gray-800  font-normal">
                            Todo List
                          </span>
                        </li>
                        <li className="flex items-center gap-4">
                          <div>
                            <img
                              src="/images/icon-calendar.svg"
                              className="mb-1"
                              alt="icon"
                            />
                          </div>
                          <span class="text-gray-500 hover:text-gray-800 font-normal">
                            Calender
                          </span>
                        </li>
                        <li className="flex items-center gap-4">
                          <div>
                            <img
                              src="/images/icon-reminders.svg"
                              className="mb-1 mr-4"
                              alt="icon"
                            />
                          </div>
                          <span class="text-gray-500 hover:text-gray-800 font-normal">
                            Reminders
                          </span>
                        </li>
                        <li className="flex items-center gap-4">
                          <img
                            src="/images/icon-planning.svg"
                            className="mb-1 mr-0.5"
                            alt="icon"
                          />
                          <span class="text-gray-500 hover:text-gray-800 font-normal">
                            Planning
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-center group relative gap-2 text-gray-500 hover:text-gray-800 cursor-pointer">
            <span className="text-sm cursor-pointer transition font-light">
              Company
            </span>
            <img src="/images/icon-arrow-down.svg" alt="" />
            <div class="absolute -top-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 transform">
              <div
                class="relative top-6 p-5 bg-white rounded-lg w-full"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <div class="relative z-10">
                  <div class="">
                    <div>
                      <ul class=" text-[15px] flex flex-col gap-2">
                        <li className="flex items-center gap-4">
                          <span class=" text-gray-500 hover:text-gray-800  font-normal">
                            Todo List
                          </span>
                        </li>
                        <li className="flex items-center gap-4">
                          <span class="text-gray-500 hover:text-gray-800 font-normal">
                            Calender
                          </span>
                        </li>
                        <li className="flex items-center gap-4">
                          <span class="text-gray-500 hover:text-gray-800 font-normal">
                            Reminders
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-center gap-2 text-gray-500 hover:text-gray-800 cursor-pointer">
            <span className="text-sm  cursor-pointer transition font-light">
              Careers
            </span>
          </li>
          <li className="flex items-center gap-2 text-gray-500 hover:text-gray-800 cursor-pointer">
            <span className="text-sm cursor-pointer transition font-light">
              About
            </span>
          </li>
        </ul>
        <div className="flex gap-10 items-center">
          <span className="text-sm text-gray-500 hover:text-gray-800 cursor-pointer transition font-light">
            Login
          </span>
          <button className="text-sm text-[#141414] hover:bg-[#141414] hover:text-white border-[#141414] border rounded-xl py-2.5 px-5 cursor-pointer transition font-light">
            Register
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
