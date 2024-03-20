import React from "react";

function Footer() {
  return (
    <div className="bg-green-950 text-white h-24 text-center py-2 space-y-2  w-full">
      <div className="font-bold text-2xl">
        <span className="text-green-400">&lt;</span>
        <span>Pass</span>
        <span className="text-green-400">OP/&gt;</span>
      </div>
      <p className="flex justify-center items-center">
        Created with
        <lord-icon
          src="https://cdn.lordicon.com/ulnswmkk.json"
          trigger="hover"
          colors="primary:#e83a30"
        ></lord-icon>
        by Nitin yadav
      </p>
    </div>
  );
}

export default Footer;
