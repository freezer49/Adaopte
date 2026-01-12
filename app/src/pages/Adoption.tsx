import { NavLink, useSearchParams } from "react-router";
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

      {filteredAnimals.length === 0 && <p>Aucun résultat</p>}

      <div className="flex flex-wrap flex-row justify-center gap-4">
        {filteredAnimals.map((animal) => (
          <div
            className="basis-sm shadow-[0_0_20px_rgba(0,0,0,0.1)] rounded-lg"
            key={animal.name}
          >
            <img
              className="h-70 w-full object-cover object-[50%_50%]"
              src={animal.imageUrl}
              alt={animal.breed}
            />
            <div className="p-10">
              <p className="mb-3 text-lg">{animal.type}</p>
              <h3 className="font-bold text-[#8482FF] text-xl mb-3">
                {animal.name}
              </h3>
              <p className="mb-1">{animal.age}</p>
              <p className="mb-6">{animal.city} 📍​</p>
              <p className="mb-6">{animal.description}</p>
              <NavLink
                className="mb-3 bg-[#333333] text-white font-semibold px-6 py-4 rounded-full shadow active:bg-[#4d4c4b] transition hover:bg-btn-primary-hover-bg"
                to="/"
              >
                Rencontrer
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
