import React from "react";
import MemoLogo from "../../assets/Logo";

export interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = ({}) => {
  return (
    <div className="fixed w-full top-0 left-0 z-10">
      <div className="flex flex-row items-center justify-between px-4 py-2 bg-white border-b">
        <div className="text-9xl absolute">
          <MemoLogo />
        </div>
        <div></div>
        <img
          className="rounded-full w-8 h-8"
          src="../../her.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
