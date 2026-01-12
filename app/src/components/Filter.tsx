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
    <div className="flex justify-center rounded-lg w-[700px] bg-amber-500 mx-auto -translate-y-5">
      <div>
        <h3>Type d'animal</h3>
        <select
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
      </div>

      <div>
        <h3>Localisation</h3>
        <input
          type="search"
          placeholder="Votre ville"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleSearch}>
        Rechercher 🔍
      </button>
    </div>
  );
}
