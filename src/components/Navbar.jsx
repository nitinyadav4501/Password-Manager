import React from 'react'

function Navbar() {
  return (
    <nav className="flex bg-green-950 text-white  justify-around sticky top-0 z-20 items-center py-3 px-4">
      <div className="font-bold text-2xl">
        <span className="text-green-400">&lt;</span>
        <span>Pass</span>
        <span className="text-green-400">OP/&gt;</span>
      </div>
      <button className=" bg-green-700 font-bold rounded-full px-2 gap-x-2 hover:bg-green-600 ring-1 ring-white">
        <a className="flex items-center" href="/">
          <img width={40} className="invert" src={"icons/github.png"} alt="" />
          <span className="pr-2">GitHub</span>
        </a>
      </button>
    </nav>
  );
}

export default Navbar
