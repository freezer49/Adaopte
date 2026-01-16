import { NavLink } from "react-router";
import { Filter } from "./components/Filter";
import { InfoCard } from "./components/infoCard";
import { link } from "./components/pageLinks";

export default function App() {
  return (
    <>
      <main>
        <section className="relative overflow-hidden text-center text-primary-color py-40">
          <div className="relative z-50 ">
            <h1 className="text-6xl pb-12 font-family-heading ">
              Donnons-leurs autant qu'ils nous apportent
            </h1>
            <p>
              Chaque jour, des milliers d'animaux attendent une famille aimante.
              Trouvez votre <br />
              compagnon idéal parmi nos animaux disponibles à l'adoption.
            </p>
          </div>
          <img
            src="../public/images/background.jpg"
            alt="tête de chien de face, la gueule ouverte, fond flou"
            className=" w-full h-full object-cover object-center brightness-80  absolute top-0"
          ></img>
        </section>

        <section>
          <div className="-translate-y-9">
            <Filter />
          </div>

          <div className="p-20">
            <h2 className="text-5xl flex justify-center font-family-heading">
              Nos animaux à adopter
            </h2>
            <p className="flex justify-center">
              Découvrez en images tous nos animaux qui attendent une famille
              aimante. Chaque photo raconte une histoire et un espoir.
            </p>
          </div>
          <div className="grid grid-flow-col grid-cols-4 grid-rows-3 pl-60 pr-60 gap-4 h-200">
            <img
              className=" rounded-2xl row-span-2 object-cover h-full w-full"
              src="../images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg"
              alt=" Petit chien de face portant une veste en jean"
            ></img>
            <img
              className="rounded-2xl row-span-1 object-cover h-full w-full"
              src="../images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg"
              alt="chat blanc et noir de face avec les pates avant sur une table"
            ></img>
            <img
              className="rounded-2xl row-span-1 object-cover h-full w-full"
              src="../images/chan-swan-NKyl19P5IHg-unsplash.jpg"
              alt="Lapin blanc et marron dans l'herbe"
            ></img>
            <img
              className="rounded-2xl row-span-2 object-cover h-full w-full"
              src="../images/alan-king-KZv7w34tluA-unsplash.jpg"
              alt="Chien taille moyenne allongé sur du carrelage, la gueule ouverte et qui porte des lunettes de soleil blanches"
            ></img>
            <img
              className="rounded-2xl row-span-2 object-cover h-full w-full"
              src="../images/jae-park-7GX5aICb5i4-unsplash.jpg"
              alt="Chat tigré assis au sol, de face, geule ouverte, portant un bandana jaune"
            ></img>
            <img
              className="rounded-2xl row-span-1 object-cover h-full w-full"
              src="../images/yosei-g-OVgE3m4MHKM-unsplash.jpg"
              alt="Cochon d'inde marron et blanc, de profil, sur une table, fond flou"
            ></img>
            <img
              className="rounded-2xl row-span-1 object-cover h-full w-full"
              src="../images/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg"
              alt="Lapin marron de face sur une couverture bleue"
            ></img>
            <img
              className="rounded-2xl row-span-2 object-cover h-full w-full"
              src="../images/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg"
              alt="Grand chien blanc, de face,assis, gueule ouverte, confétis au sol, fond rose"
            ></img>
          </div>
          <div className="flex justify-center pb-20 pt-5">
            <NavLink
              to="/Adoption"
              className="btn-secondary bg-btn-primary-bg text-white! cursor-pointer px-4! py-2! rounded-full! hover:bg-btn-hover-secondary-bg"
            >
              Voir tous les animaux
            </NavLink>
          </div>
        </section>

        {/* section processus adoption card  */}

        <section className="adoption-process-section py-20 bg-white">
          {/* texte */}
          <div className="text-container mb-12">
            <h2 className="font-family-heading justify-center text-center pb-5 text-4xl font-bold">
              Comment ça marche{" "}
            </h2>

            <p className="text-cta-bg ad-description font-family-body text-center mx-auto max-w-3xl px-4 text-sm leading-relaxed">
              Adopter un animal est un engagement sérieux et à long terme. Voici
              notre processus d'adoption en quelques étapes simples.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
            {/* 1ere card */}
            <InfoCard
              icon="🔍"
              title="1. Trouvez votre compagnon"
              description="Parcourez notre base de données d'animaux disponibles et
                  utilisez nos filtres pour trouver celui qui correspond à votre
                  mode de vie."
            />
            {/* 2eme card */}
            <InfoCard
              icon="📝"
              title="2. Remplissez une demande"
              description="Soumettez votre formulaire d'adoption pour l'animal qui vous intéresse. Nous examinons chaque demande avec soin."
            />
            {/* 3 eme card */}
            <InfoCard
              icon="👋"
              title="3. Rencontrez l'animal"
              description="Visitez le refuge pour rencontrer l'animal et voir si vous êtes compatibles. C'est un étape essentielle du processus."
            />
            {/* 4eme card */}
            <InfoCard
              icon="🏠"
              title="4. Bienvenue à la maison"
              description="Une fois votre demande approuvée, vous pouvez accueillir votre nouvel ami chez vous. Nous restons disponibles pour vous conseiller."
            />
          </div>
        </section>

        <section className="cta-section bg-light-color pb-5">
          <h2 className="cta-title font-family-heading justify-center text-center pb-5 pt-5 text-4xl font-bold">
            Prêt·e à changer une vie ?{" "}
          </h2>

          <p className="text-cta-bg cta-description font-family-body text-center mx-auto max-w-3xl px-4 text-sm leading-relaxed">
            Adoptez, partagez, soutenez... Chaque geste compte. Que vous ouvriez
            votre foyer ou votre coeur, vous pouvez offrir une seconde chance à
            un animal abandonné.
          </p>

          <div className="cta-buttons flex justify-center gap-4 mt-8 mb-5 px-4">
            <NavLink
              to={link[1].link}
              className="btn-primary bg-cta-button-bg text-white! cursor-pointer px-4! py-2! rounded-full! hover:bg-cta-button-hover-bg!"
            >
              Adoptez un animal
            </NavLink>
            <NavLink
              to="/"
              className="btn-secondary  bg-btn-secondary-bg text-black cursor-pointer px-4! py-2! rounded-full! hover:bg-btn-hover-secondary-bg"
            >
              Faire un don 🫶
            </NavLink>
            <NavLink
              to={link[3].link}
              className="btn-tertiary  bg-btn-tertiary-bg text-black cursor-pointer px-4! py-2! rounded-full! hover:bg-btn-tertiary-hover-bg"
            >
              Devenir bénévole
            </NavLink>
          </div>
        </section>
      </main>
    </>
  );
}
