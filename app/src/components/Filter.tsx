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
    <div>
      <div>
        <h3>Type d'animal</h3>
        <select
          value={animalType}
          onChange={(e) => setAnimalType(e.target.value)}
        >
          <option value="">Tous</option>
          {type.map((item) => (
            <option key={item.type} value={item.type}>
              {item.type}
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
