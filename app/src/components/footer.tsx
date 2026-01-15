import { FiFacebook, FiInstagram, FiLinkedin, FiTwitch } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-heading-color text-primary-color p-5 text-sm">
      <div className="flex gap-5 justify-around pb-4 md:max-w-1xl lg:max-w-2xl xl:max-w-4xl mx-auto flex-2 md:flex-row ">
        <div>
          <div className="pb-5">
            <h3 className="text-secondary-color text-xl pb-5 font-family-heading">
              Adaopte
            </h3>
            <p>
              Notre mission est de trouver des foyers aimants pour <br /> chaque
              animal abandonné et de promouvoir le bien-être <br /> animal.{" "}
            </p>
          </div>
          <div className="flex gap-2">
            <a
              href="https://www.facebook.com/"
              target="blank"
              title="lien vers Facebook"
            >
              <FiFacebook className="w-7 hover:bg-white hover:text-black rounded-2xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="blank"
              title="lien vers instagram"
            >
              <FiInstagram className="w-7 hover:bg-white hover:text-black rounded-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="blank"
              title="lien vers linkedIn"
            >
              <FiLinkedin className="w-7 hover:bg-white hover:text-black rounded-2xl" />
            </a>
            <a
              href="https://www.twitch.tv/"
              target="blank"
              title="lien vers Twitch"
            >
              <FiTwitch className="w-7 hover:bg-white hover:text-black rounded-2xl" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-secondary-color pb-5 text-xl font-family-heading">
            Informations Utiles
          </h3>
          <div className="text-zinc-400">
            <p className="pb-2">FAQs</p>
            <p className="pb-2">Conseils d'adoption</p>
            <p className="pb-2">Nous Contacter</p>
            <p>Mentions légales</p>
          </div>
        </div>
        <div>
          <h3 className="text-secondary-color pb-5 text-xl font-family-heading">
            Contact
          </h3>
          <p className="pb-2">
            116 Rue du Faubourg Saint-Martin <br /> 75010 Paris, France
          </p>
          <p className="pb-2"> Email: contact@adaopte.fr</p>
          <p className="pb-2"> Tél: +33 1 23 45 67 89</p>
        </div>
      </div>
      <div className="text-center pt-4 text-xs border-t border-t-zinc-600 text-zinc-400">
        <p>&copy; 2025 Adaopte. Tous droits réservés.</p>
        <p>
          Ce site à été développé dans le cadre d'un projet pour ADA Tech
          School.
        </p>
      </div>
    </footer>
  );
}
