import { FiFacebook, FiInstagram, FiLinkedin, FiTwitch } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-heading-color text-primary-color font-family-heading py-5 text-sm">
      <div className="flex gap-5 justify-around pb-4">
        <div>
          <div>
            <h3 className="text-secondary-color text-xl">Adaopte</h3>
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
              <FiFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="blank"
              title="lien vers instagram"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="blank"
              title="lien vers linkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://www.twitch.tv/"
              target="blank"
              title="lien vers Twitch"
            >
              <FiTwitch />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-secondary-color text-xl">Informations Utiles</h3>
          <div className="text-zinc-400">
            <p>FAQs</p>
            <p>Conseils d'adoption</p>
            <p>Nous Contacter</p>
            <p>Mentions légales</p>
          </div>
        </div>
        <div>
          <h3 className="text-secondary-color text-xl ">Contact</h3>
          <p>
            116 Rue du Faubourg Saint-Martin <br /> 75010 Paris, France
          </p>
          <p> Email: contact@adaopte.fr</p>
          <p> Tél: +33 1 23 45 67 89</p>
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
