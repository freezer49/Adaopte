import { useSearchParams } from "react-router";
import { animals } from "../data/animals";
import { Filter } from "../components/Filter";

export default function Adoption() {
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const ville = searchParams.get("ville");

  const filteredAnimals = animals.filter((animal) => {
    const matchType = !type || animal.type === type;
    const matchCity =
      !ville || animal.city.toLowerCase().includes(ville.toLowerCase());

    return matchType && matchCity;
  });

  return (
    <main>
      <div className="mt-10 mb-10">
        <Filter />
      </div>

      <h2>Résultats</h2>

      {filteredAnimals.length === 0 && <p>Aucun résultat</p>}

      <div>
        {filteredAnimals.map((animal) => (
          <div key={animal.name}>
            <p>{animal.type}</p>
            <h3>{animal.name}</h3>
            <span>{animal.age}</span>
            <p>{animal.city}</p>
            <p>{animal.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
