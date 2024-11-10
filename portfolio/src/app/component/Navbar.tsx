"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  LucideArrowRightToLine,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

interface MenuItem {
  title: string;
  subItems: string[];
  link: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    subItems: [],
    link: "/",
  },
  {
    title: "Dev API",
    subItems: [],
    link: "/dev-api",
  },
  {
    title: "Record Conversation",
    subItems: [],
    link: "/record",
  },
  {
    title: "History",
    subItems: [],
    link: "/history",
  },
  {
    title: "About",
    subItems: ["Med Synopsis", "Devs", "Terms and Policy"],
    link: "/about",
  },
  {
    title: "Contact",
    subItems: [],
    link: "/contact",
  },
];

interface NavbarProps {
  isTransparent?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({isTransparent = true}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav
      className={`fixed w-full z-10 transition-colors duration-300 ${
        (isScrolled || !isTransparent)
          ? "bg-[#008ac086] backdrop-blur-3xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/"><Image src="/Med Synopsis.png" alt="Logo" width={100} height={100}/></Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMenuEnter(index)}
                  onMouseLeave={handleMenuLeave}
                >
                  <Link href={item.link}>
                    <button className="text-darkText group px-3 py-2 rounded-md text-sm font-medium flex items-center">
                      {item.title}
                      {item.subItems.length > 0 ? (
                        <ChevronDown className="ml-1 group-hover:rotate-180 duration-300 h-4 w-4" />
                      ) : (
                        ""
                      )}
                    </button>
                  </Link>
                  <AnimatePresence>
                    {activeMenu === index && item.subItems.length > 0 ? (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      >
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href="#"
                              className="block px-4 py-2 text-sm hover:bg-gray-100"
                              role="menuitem"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      ""
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <Link
              href="/sign-up"
              className="flex items-center justify-center w-32 bg-headBg text-lightText font-bold py-2 px-4 hover:rounded-full text-sm transition duration-300"
            >
              <LucideArrowRightToLine size={18} />
              <span className="pl-2">Sign Up</span>
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              className="text-gray-800 p-2 rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6 text-lightBg" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-white z-50 flex flex-col"
          >
            <div className="flex justify-end p-4">
              <button
                className="text-gray-800 p-2 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center space-y-8">
              {menuItems.map((item, index) => (
                <div key={index} className="w-full px-4">
                  {item.title !== "About" ? (
                    <Link href={item.link}>
                      <button
                        className="flex items-center justify-center px-3 py-2 rounded-md text-base font-medium w-full text-center"
                        onClick={() =>
                          setActiveMenu(activeMenu === index ? null : index)
                        }
                      >
                        {item.title}
                        {item.subItems.length > 0 ? (
                          <ChevronDown className="ml-1 duration-300 h-4 w-4" />
                        ) : (
                          ""
                        )}
                      </button>
                    </Link>
                  ) : (
                    <button
                      className="flex items-center justify-center px-3 py-2 rounded-md text-base font-medium w-full text-center"
                      onClick={() =>
                        setActiveMenu(activeMenu === index ? null : index)
                      }
                    >
                      {item.title}
                      {item.subItems.length > 0 ? (
                        <ChevronDown className="ml-1 duration-300 h-4 w-4" />
                      ) : (
                        ""
                      )}
                    </button>
                  )}
                  <AnimatePresence>
                    {activeMenu === index && item.subItems.length > 0 ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2"
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="block px-3 py-2 rounded-md text-base font-medium text-center text-red-500"
                          >
                            {subItem}
                          </a>
                        ))}
                      </motion.div>
                    ) : (
                      ""
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="block">
                <Link
                  href="/sign-up"
                  className="flex items-center justify-center w-32 bg-headBg text-lightText font-bold py-2 px-4 hover:rounded-full text-sm transition duration-300"
                >
                  <LucideArrowRightToLine size={18} />
                  <span className="pl-2">Sign Up</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
