import React from "react";

export default function Header() {
  return (
    <header className="header">
      <nav className=" flex justify-start items-center gap-5 mx-auto px-4 bg-black/20 text-white/60 h-[45px]">
        <h1 className="hover:text-white">
          <a href="/">logo</a>
        </h1>
        <ul className=" flex justify-start gap-3">
          <li className="hover:text-white">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-white">
            {" "}
            <a href="/notes">Notes</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Advanteges RSC🧮 
// Load faster dont wait js to loead
// SEO friendly
// Access to resources
// Hide sensitive data from client
// Secure xss attacks
// improved dev experrience
