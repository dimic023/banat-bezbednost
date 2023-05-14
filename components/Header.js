import Image from "next/image";
import Logo from "public/images/BBLOGO3.png";
//import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { React, useState } from "react";

import { Link as ScrollLink } from "react-scroll";

//import useWindowSize from "@/helpers/useWindowSize";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
    console.log("CLICK!!!");
  }

  return (
    <header>
      <div className="logo">
        <Link href="/">
          <Image
            src={Logo}
            alt="Banat Bezbednost"
            width={183}
            height={100}
          ></Image>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </div>
      {showMenu && (
        <div className="mobileLinks">
          <Link href="" onClick={toggleMenu}>
            POČETNA
          </Link>
          <Link href="/#services" onClick={toggleMenu}>
            USLUGE
          </Link>
          {/* <Link href="#">O NAMA</Link> */}
          <Link href="/licence" onClick={toggleMenu}>
            LICENCE
          </Link>
          <Link href="/#contact" onClick={toggleMenu}>
            KONTAKT
          </Link>
        </div>
      )}
      {/* <div className="mobileLinks">
        <Link href="#">POČETNA</Link>
        <Link href="#">USLUGE</Link>
        <Link href="#">O NAMA</Link>
        <Link href="#">LICENCE</Link>
        <Link href="#">KONTAKT</Link>
      </div> */}
      <div className="links">
        <Link href="/">POČETNA</Link>
        <Link href="/#services">USLUGE</Link>
        {/* <Link href="#">O NAMA</Link> */}
        <Link href="/licence">LICENCE</Link>
        <Link href="/#contact" smooth={true} duration={500}>
          KONTAKT
        </Link>
      </div>
    </header>
  );
}
