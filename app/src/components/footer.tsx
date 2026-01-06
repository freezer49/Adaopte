import { FiFacebook, FiInstagram, FiLinkedin, FiTwitch } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-heading-color text-primary-color gap-5">
      <div>
        <div>
          <div>
            <h3>Adaopte</h3>
            <p>
              Notre mission est de trouver des foyers aimants pour <br /> chaque
              animal abandonné et de promouvoir le bien-être <br /> animal.{" "}
            </p>
          </div>
          <div className="flex gap-2">
            <a>
              <FiFacebook />
            </a>
            <a>
              <FiInstagram />
            </a>
            <a>
              <FiLinkedin />
            </a>
            <a>
              <FiTwitch />
            </a>
          </div>
        </div>
        <div>
          <h3>Informations Utiles</h3>
          <a>FAQs</a>
          <a>Conseils d'adoption</a>
          <a>Nous Contacter</a>
          <a>Mentions légales</a>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            116 Rue du Faubourg Saint-Martin <br /> 75010 Paris, France
          </p>
          <p> Email: contact@adaopte.fr</p>
          <p> Tél: +33 1 23 45 67 89</p>
        </div>
      </div>
      <div className="text-center">
        <p>&copy; 2025 Adaopte. Tous droits réservés.</p>
        <p>
          Ce site à été développé dans le cadre d'un projet pour ADA Tech
          School.
        </p>
      </div>
    </footer>
  );
}
