import React from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex-1">
          <a className="btn btn-ghost font-bold italic text-xl">Aiman Arif</a>
        </div>
        <div className="flex-none gap-2">
          <div className="badge h-full">
            <AiFillPhone size={25} className="pr-2" />
            +60-17 213 9693
          </div>
          <div className="badge h-full">
            <AiTwotoneMail size={25} className="pr-2" />
            aimanarif217@gmail.com
          </div>
          <div className="badge h-full">
            <AiTwotoneMail size={25} className="pr-2" />
            aimanarif217@student.usm.my
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
