"use client";
import React, { useState } from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import {
  Home,
  Folder,
  Star,
  Phone,
  FileText,
  MessageSquare,
  X,
} from "lucide-react";
import ResumePage from "./resume";
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
  onClick?: () => void;
};

const Navbar = () => {
  const [showResume, setShowResume] = useState(false);

  const navItems: NavItem[] = [
    {
      name: "Home",
      link: "#home",
      icon: <Home size={16} className="text-neutral-500" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <Folder size={16} className="text-neutral-500" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <Star size={16} className="text-neutral-500" />,
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: <MessageSquare size={16} className="text-neutral-500" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Phone size={16} className="text-neutral-500" />,
    },
    {
      name: "Resume",
      link: "#",
      icon: <FileText size={16} className="text-neutral-500" />,
      onClick: () => setShowResume(true),
    },
  ];

  return (
    <>
      <FloatingNav
        navItems={navItems.map((item) => ({
          ...item,
          link: item.onClick ? "#" : item.link,
        }))}
      />
      {/* Modal Overlay for Resume */}
      {showResume && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-auto max-w-4xl w-full max-h-full p-4">
            {/* Desktop Close Button */}
            <div className="hidden sm:flex justify-end px-4">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                onClick={() => setShowResume(false)}
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span>Close</span>
              </HoverBorderGradient>
            </div>
            {/* Mobile Cross Icon positioned at top-right */}
            <div className="sm:hidden absolute top-4 right-4">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                onClick={() => setShowResume(false)}
                className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center p-2"
              >
                <X size={20} />
              </HoverBorderGradient>
            </div>
            <ResumePage />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
