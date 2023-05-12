import Image from "next/image";
import Logo from "public/images/BBLOGO3.png";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <Image
          src={Logo}
          alt="Banat Bezbednost"
          width={183}
          height={100}
        ></Image>
      </div>
      <div className="links">
        <Link href="#">POČETNA</Link>
        <Link href="#">USLUGE</Link>
        <Link href="#">O NAMA</Link>
        <Link href="#">LICENCE</Link>
        <Link href="#">KONTAKT</Link>
      </div>
      {/* <div className="menu-container">
        <Hamburger toggled={false} toggle={setIsOpen} />
        <nav className={`menu ${isOpen ? "show" : ""}`}>
          <Link href="#">POČETNA</Link>
          <Link href="#">USLUGE</Link>
          <Link href="#">O NAMA</Link>
          <Link href="#">LICENCE</Link>
          <Link href="#">KONTAKT</Link>
        </nav>
      </div> */}
    </header>
  );
}
