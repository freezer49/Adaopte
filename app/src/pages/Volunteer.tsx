import { useForm } from "react-hook-form";

export default function Volunteer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <div>
      <section className="relative overflow-hidden text-center text-primary-color py-40 ">
        <div className="relative z-50">
          <h1 className="font-family-heading justify-center text-center pb-5 text-4xl font-bold">
            Comment ça marche{" "}
          </h1>
          <p>
            Offrez votre temps, changez des vies. Chez Adaopte, chaque bénévole
            contribue à redonner espoir aux animaux en attente d'un foyer.
          </p>
        </div>
        <img
          src="../public/images/alin-luna-8LfPXM6abRk-unsplash.jpg"
          className=" w-full h-full object-cover object-center brightness-80  absolute top-0"
        ></img>
      </section>

      {/* Le formulaire d'inscription */}

      <section className="max-w-2xl mx-auto py-16 px-4 pt-0 -mt-12.5 z-100 relative ">
        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h2 className="font-family-heading justify-center text-center pb-5 text-4xl font-bold">
            Formulaire d'inscription
          </h2>
          <p className="text-[#464646] ad-description font-family-body text-center mx-auto max-w-3xl px-4 text-sm leading-relaxed">
            Remplissez ce formulaire pour rejoindre notre réseau de bénévoles.
            Nous vous contacterons rapidement pour vous présenter les prochaines
            étapes.
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Votre prénom"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nom
                  <span className="text-red-600"> *</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            {/* Adresse email  */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Adresse email
                <span className="text-red-600"> *</span>
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="adressEmail"
                type="email"
                placeholder="exemple@gmail.com"
              />
            </div>

            {/* Ville et Code postal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Ville
                  <span className="text-red-600"> *</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="city"
                  type="text"
                  placeholder="Votre ville"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Code postal
                  <span className="text-red-600"> *</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="postalCode"
                  type="text"
                  placeholder="Code postal"
                />
              </div>
            </div>

            {/* Disponibilités ) */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Disponibilités
                <span className="text-red-600"> *</span>
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="availability"
              >
                <option value="">Sélectionnez vos disponibilités</option>
                <option value="weekdays">En semaine</option>
                <option value="weekends">Week-ends</option>
                <option value="evenings">Soirées</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            {/* Votre motivation */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Votre motivation
                <span className="text-red-600"> *</span>
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                id="motivation"
                rows={6}
                placeholder="Parlez-nous de votre motivation à devenir bénévole chez Adaopte"
              />
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
      </section>
    </div>
  );
}
