import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import LandingNavbar from "./landing-navbar";
import NavLogo from "./logo";

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center border-b border-zinc-200">
          <NavLogo />
          <LandingNavbar />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
