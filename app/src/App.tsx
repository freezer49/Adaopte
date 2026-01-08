import { NavLink } from "react-router";

export default function App() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden text-center text-primary-color py-40 ">
          <div className="relative z-50">
            <h1 className="text-6xl pb-12 font-family-heading">
              Donnons-leurs autant qu'ils nous apportent
            </h1>
            <p>
              Chaque jour, des milliers d'animaux attendent une famille aimante.
              Trouvez votre <br />
              compagnon idéal parmi nos animaux disponibles à l'adoption.
            </p>
          </div>
          <img
            src="../images/background.jpg"
            className="w-full h-full object-cover object-center brightness-80 absolute top-0"
          ></img>
        </section>
        <section>
          <div className="p-20">
            <h2 className="text-5xl flex justify-center font-family-heading">
              Nos animaux à adopter
            </h2>
            <p className="flex justify-center">
              Découvrez en images tous nos animaux qui attendent une famille
              aimante. Chaque photo raconte une histoire et un espoir.
            </p>
          </div>
          <div className="grid grid-flow-col grid-cols-4 grid-rows-3 pl-60 pr-60 gap-4 ">
            <img
              className=" rounded-2xl row-span-2 object-cover h-full w-full"
              src="../images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"
            ></img>
            <img
              className="rounded-2xl row-span-1 object-cover h-full w-full"
              src="../images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"
            ></img>
            <img
              className="rounded-2xl row-span-1 object-cover h-full w-full"
              src="../images/chan-swan-NKyl19P5IHg-unsplash.jpg"
            ></img>
            <img
              className="rounded-2xl row-span-2 object-cover h-full w-full"
              src="../images/alan-king-KZv7w34tluA-unsplash.jpg"
            ></img>
            <img
              className="rounded-2xl row-span-2 object-cover h-full w-full"
              src="../images/jae-park-7GX5aICb5i4-unsplash.jpg"
            ></img>
            <img
              className="rounded-2xl row-span-1 object-cover h-full w-full"
              src="../images/yosei-g-OVgE3m4MHKM-unsplash.jpg"
            ></img>
            <img
              className="rounded-2xl row-span-1 object-cover h-full w-full"
              src="../images/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg"
            ></img>
            <img
              className="rounded-2xl row-span-2 object-cover h-full w-full"
              src="../images/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg"
            ></img>
          </div>
          <div className="flex justify-center pb-20 pt-5">
            <NavLink
              to="/Adoption"
              className="btn-secondary bg-btn-primary-bg text-white! cursor-pointer px-4! py-2! rounded-full! hover:bg-[#D43C2C]!"
            >
              Voir tous les animaux
            </NavLink>
          </div>
        </section>
        <section className="cta-section bg-light-color pb-5">
          <h2 className="cta-title font-family-heading justify-center text-center pb-5 pt-5 text-4xl font-bold">
            Prêt·e à changer une vie ?{" "}
          </h2>

          <p className="text-[#464646]cta-description font-family-body text-center mx-auto max-w-3xl px-4 text-sm leading-relaxed">
            Adoptez, partagez, soutenez... Chaque geste compte. Que vous ouvriez
            votre foyer ou votre coeur, vous pouvez offrir une seconde chance à
            un animal abandonné.
          </p>

          <div className="cta-buttons flex justify-center gap-4 mt-8 mb-5 px-4">
            <button className="btn-primary bg-[#333333]! text-white! cursor-pointer px-4! py-2! rounded-full! hover:bg-[#1a1a1a]!">
              Adoptez un animal
            </button>
            <button className="btn-secondary  bg-btn-secondary-bg text-white! cursor-pointer px-4! py-2! rounded-full! hover:bg-[#D43C2C]!">
              Faire un don 🫶
            </button>
            <button className="btn-tertiary  bg-[#04A552]! text-white! cursor-pointer px-4! py-2! rounded-full! hover:bg-[#0a994f]!">
              Devenir bénévole
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
