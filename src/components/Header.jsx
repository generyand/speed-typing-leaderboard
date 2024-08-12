import React from "react";
import logo from "../assets/imgs/logo.png";

function Header() {
  return (
    <header className="flex items-center px-4 py-2 border-b border-slate-700">
      <div className="flex items-center w-full mx-auto max-w-[1440px] gap-2">
        <img className="w-10 h-10" src={logo} alt="" />
        <h1 className="text-base font-bold text-white">PGITS</h1>
      </div>
    </header>
  );
}

export default Header;
