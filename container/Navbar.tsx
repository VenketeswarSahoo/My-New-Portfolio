import { Logo } from "@/assets";
import { ThemeToggleButton } from "@/components/ui/ThemeToggleButton";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto max-w-3xl px-4 animate-fade-in-blur sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <Image
          src={Logo}
          alt="logo"
          width={100}
          height={100}
          className="h-12 w-12 rounded-md border border-gray-200 bg-blue-300 transition-all duration-300 ease-in-out hover:scale-90 dark:bg-yellow-300"
        />

        <div className="flex gap-4">
          <span className="cursor-pointer">Work</span>
          <span className="cursor-pointer">Blog</span>
          <span className="cursor-pointer">Project</span>
        </div>

        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Navbar;
