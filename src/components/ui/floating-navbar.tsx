"use client";
import React, { createContext, useContext, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavVisibilityContext = createContext({
  isNavVisible: true,
  setNavVisibility: (visible: boolean) => {},
});

export const NavVisibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const setNavVisibility = (visible: boolean) => {
    setIsNavVisible(visible);
  };
  return (
    <NavVisibilityContext.Provider value={{ isNavVisible, setNavVisibility }}>
      {children}
    </NavVisibilityContext.Provider>
  );
};

export type FloatingNavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
  onClick?: () => void;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: FloatingNavItem[];
  className?: string;
}) => {
  const { isNavVisible } = useContext(NavVisibilityContext);
  const pathname = usePathname();

  if (pathname === "/resume" && !isNavVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn(
        // Updated styling with dark purplish border and hover ring
        "flex max-w-fit fixed top-4 inset-x-0 mx-auto rounded-xl bg-white/80 dark:bg-black/80 shadow-lg px-6 py-3 items-center justify-center space-x-6 z-[5000] border-2 border-[#4B0082] hover:ring-2 hover:ring-[#4B0082] transition-all duration-300",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          onClick={(e) => {
            if (navItem.onClick) {
              e.preventDefault();
              navItem.onClick();
            }
          }}
          className={cn(
            "relative flex items-center space-x-2 text-neutral-600 dark:text-neutral-50 transition-transform duration-200 hover:scale-105 hover:text-neutral-500 dark:hover:text-neutral-300"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-lg">{navItem.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};

export default FloatingNav;
