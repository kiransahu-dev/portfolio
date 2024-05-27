import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center text-white p-4 ">
        <div className="left">Logo</div>
        <ul className="flex gap-4 text-xl font-bold cursor-pointer">
          <li className="hover:text-violet-500">Home</li>
          <li className="hover:text-violet-500">Experience</li>
          <li className="hover:text-violet-500">Skills</li>
          <li className="hover:text-violet-500">Projects</li>
          <li className="hover:text-violet-500">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
