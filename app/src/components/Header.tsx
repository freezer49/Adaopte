// src/components/Header.tsx
import { LuHouse, LuBone, LuFish, LuSquirrel } from "react-icons/lu";
import { NavLink } from "react-router";

const link = [
  { link: "/", label: "Accueil", icon: <LuHouse /> },
  { link: "/Adopte", label: "J'adopte", icon: <LuBone /> },
  { link: "/", label: "Guide de l'adoption", icon: <LuFish /> },
  { link: "/", label: "Devenir bénévole", icon: <LuSquirrel /> },
];

export default function Header() {
  return (
    <header className="bg-color-#FFFAF8 shadow-md">
      <ul className="w-full px-10 py-4 flex justify-between items-center">
        <li>
          <a
            href="https://cataas.com/cat"
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
        </li>
        <nav aria-label="Navigation principale">
          <ul className="flex gap-8 items-center justify-center flex-1">
            {link.map((key) => (
              <li key={key.link}>
                <NavLink
                  to={key.link}
                  className="text-gray-800 font-medium hover:text-[#ff6d38] transition-colors flex items-center gap-1"
                >
                  {key.icon}
                  {key.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="bg-[#E74B3B]! text-white! px-4! py-2! rounded-full! hover:bg-[#d43d2d]!"
        >
          Faire un don 🫶🏻
        </button>
      </ul>
    </header>
  );
}
