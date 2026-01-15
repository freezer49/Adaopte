import { useState } from "react";
import { useNavigate } from "react-router";
import { type } from "../data/animals";

export function Filter() {
  const [animalType, setAnimalType] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(
      `/Adoption?type=${encodeURIComponent(
        animalType
      )}&ville=${encodeURIComponent(city)}`
    );
  };

  return (
    <div className="flex size-29 justify-center items-center rounded-lg w-225 bg-white shadow-lg mx-auto">
      <div className="flex flex-col items-start translate-y-3 w-1/3 ml-3 justify-start h-full p-2">
        <label>
          Type d'animal
          <select
            className="border border-[#bdc3c7] mt-1 p-[8px] w-full rounded-sm"
            value={animalType}
            onChange={(e) => setAnimalType(e.target.value)}
          >
            <option value="">Tous</option>
            {type.map((key) => (
              <option key={key.type} value={key.type}>
                {key.type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-col items-start justify-start translate-y-3 w-1/3 h-full p-2">
        <label>
          Localisation
          <input
            type="search"
            className="border border-[#bdc3c7] rounded-sm p-[6.7px] mt-1 w-full"
            placeholder="Votre ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
      </div>

      <button
        type="button"
        onClick={handleSearch}
        className="bg-dark-color text-[#FFF] translate-y-2.5 rounded-full mr-3 p-2 w-1/3 cursor-pointer transition-colors hover:bg-btn-primary-hover-bg"
      >
        Rechercher 🔍
      </button>
    </div>
  );
}
