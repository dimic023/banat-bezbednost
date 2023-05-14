import Image from "next/image";
import { useEffect } from "react";

export default function LicencePage() {
  const imageFolder = "/images/licences/";
  const images = [
    "BZNR_pages-to-jpg-0001.jpg",
    "Ex Vinca.jpg",
    "Licenca BZR20220801_12181997_pages-to-jpg-0001.jpg",
    "Licenca i Rešenje_pages-to-jpg-0001.jpg",
    "Licenca odg izvođač.jpg",
    "Licenca projektantska.jpg",
    "Rešenje ZOP_page-0001.jpg",
    "Stručni ispit ZOP za slanje.jpg",
    "Uverenje stručni ispit montaža sist tehn zaštite _page-0001.jpg",
    "Uverenje stručni ispit projektovanje sist tehn zaštite _page-0001.jpg",
  ];

  function handleClick(event) {
    event.target.classList.toggle("fullscreen");
  }

  return (
    <div className="container">
      <div className="licence">
        <h1 className="sectionTitle">LICENCE</h1>
        <span className="underline"></span>
        <div className="images">
          {images.map((image) => (
            <Image
              key={image}
              src={`${imageFolder}${image}`}
              alt={`Image ${image}`}
              width={400}
              height={400}
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
