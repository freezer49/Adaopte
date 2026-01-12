import { InfoCard } from "../components/infoCard";

export default function Volunteer() {
  return (
    <div>
      <section className=" py-20 bg-white">
        <div className="text-container mb-12">
          <h2 className="text-4xl pb-10 font-family-heading justify-center text-center pb-5font-bold">
            Pourquoi devenir bénévole ?
          </h2>
          <p>
            Etre bénévole chez Adaopte, c'est bien plus qu'un coup de main :
            c'est un engagement du coeur, qui change des vies - humaines et
            animales.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
          <InfoCard
            icon="🌱"
            title="Agir concrètement pour le bien-être animal"
            description="Chaque geste compte: un regard, une caresse, une balade... Vous contribuez à redonner confiance aux animaux abandonnés et à leurs offrir une seconde chance."
          />
          <InfoCard
            icon="🧠"
            title="Développer des compétences précieuses"
            description="Apprenez à mieux comprendre les comportements animaux, renforcez votre patience, votre sens de l'observation et votre capacité à prendre soin."
          />

          <InfoCard
            icon="👥"
            title="Rejoindre une communauté engagée"
            description="Intégrez un reseau solidaire de passionné.e.s, participez à des actions collectives et partagez des moments forts autour d'une cause essentielle."
          />
          <InfoCard
            icon="🌟"
            title="Donner du sens à votre temps libre"
            description="En vous impliquant chez Adaopte, vous transformez votre temps en veritable acte d'amour, de respect et de solidarité envers les animaux."
          />
        </div>
      </section>
    </div>
  );
}
