"use client";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { Home, Folder, Star, Phone } from "lucide-react";

type NavItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

const Navbar = () => {
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
      name: "Contact",
      link: "#contact",
      icon: <Phone size={16} className="text-neutral-500" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
};

export default Navbar;
