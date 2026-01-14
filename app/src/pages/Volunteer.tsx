import { useForm } from "react-hook-form";
import { InfoCard } from "../components/infoCard";

export default function Volunteer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <div>
      <section className="relative overflow-hidden text-center text-primary-color py-40 bg-[#F9F9F9]">
        <div className="relative z-50 ">
          <h1 className="font-family-heading justify-center text-center pb-5 text-4xl font-bold">
            Devenir Bénévole{" "}
          </h1>
          <p>
            Offrez votre temps, changez des viees. Chez Adaopte, chaque bénévole
            contribue à redonner espoir aux animaux en attente d'un foyer.
          </p>
        </div>
        <img
          src="../public/images/alin-luna-8LfPXM6abRk-unsplash.jpg"
          className=" w-full h-full object-cover object-center brightness-80  absolute top-0"
        ></img>
      </section>

      {/* Le formulaire d'inscription */}

      <section className="bg-[#F9F9F9] pt-0 pb-16">
        <div className="max-w-2xl mx-auto px-4 relative -mt-15">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 relative z-10">
            <h2 className="font-family-heading justify-center text-center pb-5 text-4xl font-bold">
              Formulaire d'inscription
            </h2>
            <p className="text-[#464646] ad-description font-family-body text-center mx-auto max-w-3xl px-4 text-sm leading-relaxed">
              Remplissez ce formulaire pour rejoindre notre réseau de bénévoles.
              Nous vous contacterons rapidement pour vous présenter les
              prochaines étapes.
            </p>
            <form
              onSubmit={handleSubmit((data: any) => {
                alert(JSON.stringify(data));
              })}
              className="space-y-6 mt-6"
            >
              {/* Prénom + Nom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Prénom
                    <span className="text-red-600"> *</span>
                  </label>
                  <input
                    {...register("firstName", {
                      required: "Le prénom est obligatoire",
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="Votre prénom"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm mt-1">
                      Le prénom est obligatoire
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Nom
                    <span className="text-red-600"> *</span>
                  </label>
                  <input
                    {...register("lastName", {
                      required: "Le nom est obligatoire",
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Votre nom"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm mt-1">
                      Le nom est obligatoire
                    </p>
                  )}
                </div>
              </div>

              {/* Adresse email  */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Adresse email
                  <span className="text-red-600"> *</span>
                </label>
                <input
                  {...register("adressEmail", {
                    required: "L'adresse email est obligatoire",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse email invalide",
                    },
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="adressEmail"
                  type="email"
                  placeholder="exemple@gmail.com"
                />
                {errors.adressEmail && (
                  <p className="text-red-600 text-sm mt-1">
                    Adresse email invalide
                  </p>
                )}
              </div>

              {/* Ville et Code postal */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Ville
                    <span className="text-red-600"> *</span>
                  </label>
                  <input
                    {...register("city", {
                      required: "La ville est obligatoire",
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="city"
                    type="text"
                    placeholder="Votre ville"
                  />
                  {errors.city && (
                    <p className="text-red-600 text-sm mt-1">
                      La ville est obligatoire
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Code postal
                    <span className="text-red-600"> *</span>
                  </label>
                  <input
                    {...register("postalCode", {
                      required: "Le code postal est obligatoire",
                    })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="postalCode"
                    type="text"
                    placeholder="Code postal"
                  />
                  {errors.postalCode && (
                    <p className="text-red-600 text-sm mt-1">
                      Le code postal est obligatoire
                    </p>
                  )}
                </div>
              </div>

              {/* Disponibilités ) */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Disponibilités
                  <span className="text-red-600"> *</span>
                </label>
                <select
                  {...register("availability", {
                    required: "Les disponibilités sont obligatoires",
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="availability"
                >
                  <option value="">Sélectionnez vos disponibilités</option>
                  <option value="weekdays">En semaine</option>
                  <option value="weekends">Week-ends</option>
                  <option value="evenings">Soirées</option>
                  <option value="flexible">Flexible</option>
                </select>
                {errors.availability && (
                  <p className="text-red-600 text-sm mt-1">
                    Les disponibilités sont obligatoires
                  </p>
                )}
              </div>

              {/* Votre motivation */}
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Votre motivation
                  <span className="text-red-600"> *</span>
                </label>
                <textarea
                  {...register("motivation", {
                    required: "La motivation est obligatoire",
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                  id="motivation"
                  rows={6}
                  placeholder="Parlez-nous de votre motivation à devenir bénévole chez Adaopte"
                />
                {errors.motivation && (
                  <p className="text-red-600 text-sm mt-1">
                    La motivation est obligatoire
                  </p>
                )}
              </div>

              <div className="flex justify-center">
                <input
                  type="submit"
                  value="Envoyer ma candidature"
                  className="btn-tertiary bg-[#04A552] text-white cursor-pointer px-6 py-3 rounded-full hover:bg-[#0a994f] transition-colors duration-200"
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Pourquoi devenir bénévole ? */}
      <section className=" py-20 bg-white">
        <div className="text-container mb-12">
          <h2 className="font-family-heading justify-center text-center pb-5 text-4xl font-bold">
            Pourquoi devenir bénévole ?
          </h2>
          <p className="text-[#464646] ad-description font-family-body text-center mx-auto max-w-3xl px-4 text-sm leading-relaxed">
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

      <section className="cta-section bg-light-color pb-5">
        <h2 className="cta-title font-family-heading justify-center text-center pb-5 pt-5 text-4xl font-bold">
          Des questions ?{" "}
        </h2>

        <p className="text-[#464646] cta-description font-family-body text-center mx-auto max-w-3xl px-4 text-sm leading-relaxed">
          Nous sommes là pour répondre à toutes vos interrogations concernant le
          bénévolat chez Adaopte. N'hésitez pas à nous contacter pour en savoir
          plus sur notre démarche.
        </p>

        <div className="cta-buttons flex justify-center gap-4 mt-8 mb-5 px-4">
          <button className="btn-primary bg-[#333333]! text-white! cursor-pointer px-4! py-2! rounded-full! hover:bg-[#1a1a1a]!">
            Foire aux questions
          </button>
          <button className="btn-secondary  bg-btn-secondary-bg text-white! cursor-pointer px-4! py-2! rounded-full! hover:bg-[#D43C2C]!">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
}
