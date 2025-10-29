import { Link, useLocation } from "react-router-dom";
import { Instagram, Music2 } from "lucide-react";

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: "https://www.instagram.com/srstrong_/?hl=es-la",
      tiktok: "https://www.tiktok.com/@sr_strong?is_from_webapp=1&sender_device=pc",
    };
    window.open(urls[platform as keyof typeof urls], "_blank");
  };

  const navLinks = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Mí", path: "/about" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contacto", path: "/contact" },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jonathan Strong</h3>
            <p className="text-sm text-primary-foreground/80">
              Transformando vidas a través del entrenamiento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`hover:text-primary transition-colors ${
                      isActivePath(link.path) ? "text-primary" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Sígueme</h4>
            <div className="flex space-x-4">
              <button
                onClick={() => handleSocialClick("instagram")}
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleSocialClick("tiktok")}
                className="bg-primary-foreground/10 p-3 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Fabian Perez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
