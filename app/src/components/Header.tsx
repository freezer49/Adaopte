// src/components/Header.tsx
import { BiHomeAlt } from "react-icons/bi";
import { LuBone } from "react-icons/lu";
import { LuFish } from "react-icons/lu";
import { LuSquirrel } from "react-icons/lu";

export default function Header() {
  return (
    <header className="bg-color-#FFFAF8 shadow-md">
      <div className="w-full px-10 py-4 flex justify-between items-center">
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-medium text-gray-800 hover:opacity-80 transition-opacity"
        >
          <span role="img" aria-label="patte">
            🐾
          </span>
          <span>
            <strong>Ada</strong>
            <strong style={{ color: "#ff6d38" }}>opte</strong>
          </span>
        </a>
        <nav
          className="flex gap-8 items-center justify-center flex-1"
          aria-label="Navigation principale"
        >
          <a
            href="/"
            className="text-gray-800 font-medium hover:text-[#ff6d38] transition-colors flex items-center gap-1"
          >
            <BiHomeAlt />
            Accueil
          </a>
          <a
            href="/Adoption"
            className="text-gray-800 font-medium hover:text-[#ff6d38] transition-colors flex items-center gap-1"
          >
            <LuBone />
            J'adopte
          </a>
          <a
            href="/guide"
            className="text-gray-800 font-medium hover:text-[#ff6d38] transition-colors flex items-center gap-1"
          >
            <LuFish />
            Guide de l'adoption
          </a>
          <a
            href="/benevole"
            className="text-gray-800 font-medium hover:text-[#ff6d38] transition-colors flex items-center gap-1"
          >
            <LuSquirrel />
            Devenir bénévole
          </a>
        </nav>
        <button
          type="button"
          className="bg-[#E74B3B]! text-white! px-4! py-2! rounded-full! hover:bg-[#d43d2d]!"
        >
          Faire un don 🫶🏻
        </button>
      </div>
    </header>
  );
}
