import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import fondo from "@/assets/fondo.png";
import sponsor1 from "@/assets/sp1.jpg";
import sponsor2 from "@/assets/sp2.jpg";
import sponsor3 from "@/assets/sp3.jpg";
import { useNavigate } from "react-router-dom";

const Sponsors = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-[Montserrat]">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section
        className="pt-32 pb-16 bg-cover bg-center bg-no-repeat text-primary-foreground text-center relative"
        style={{
          backgroundImage: `url(${fondo})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* 🔹 oscurece fondo */}
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-quicksand mb-6 animate-fade-in tracking-wide text-white drop-shadow-lg">
            SPONSORS
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-monserrat leading-relaxed text-gray-100 drop-shadow">
            Marcas que confían en mí.
          </p>
        </div>
      </section>

      {/* Publicaciones */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-[Quicksand] font-bold text-center mb-16">
            Desde las redes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {/* Publicación 1 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-[9/16] w-full h-[620px] mx-auto">
                <iframe
                  src="https://www.instagram.com/reel/DMf_jTEssv7/embed"
                  width="100%"
                  height="100%"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Instagram Reel 1"
                  className="rounded-xl"
                ></iframe>
              </div>
            </Card>

            {/* Publicación 2 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-[9/16] w-full h-[620px] mx-auto">
                <iframe
                  src="https://www.instagram.com/p/DOwLSDygnyh/embed"
                  width="100%"
                  height="100%"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Instagram Perfil ICEN"
                  className="rounded-xl"
                ></iframe>
              </div>
            </Card>

            {/* Publicación 3 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="aspect-[9/16] w-full h-[620px] mx-auto">
                <iframe
                  src="https://www.instagram.com/p/DTWfdI9keRn/embed"
                  width="100%"
                  height="100%"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Instagram Post 3"
                  className="rounded-xl"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsors / Embajadores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-[Quicksand] font-bold text-center mb-12">
            Embajadores & Marcas Aliadas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Sponsor 1 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <img
                src={sponsor1}
                alt="All Nutrition"
                className="w-32 h-32 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-[Quicksand] font-bold mb-2">All Nutrition</h3>
              <p className="text-muted-foreground mb-4 font-[Montserrat]">
                Somos la tienda especialista en suplementos alimenticios y deportivos, vitaminas, salud y nutrición.
              </p>
              <a
                href="https://www.instagram.com/allnutritiononline/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                @allnutritiononline
              </a>
            </Card>

            {/* Sponsor 2 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <img
                src={sponsor2}
                alt="ICEN"
                className="w-32 h-32 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-[Quicksand] font-bold mb-2">ICEN</h3>
              <p className="text-muted-foreground mb-4 font-[Montserrat]">
                Formación profesional y Universitaria.
              </p>
              <a
                href="https://www.instagram.com/icen.es/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                @icen.es
              </a>
            </Card>

            {/* Sponsor 3 */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <img
                src={sponsor3}
                alt="Strong Academy"
                className="w-32 h-32 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-[Quicksand] font-bold mb-2">Strong Academy</h3>
              <p className="text-muted-foreground mb-4 font-[Montserrat]">
                Cursos para entrenadores personales.
              </p>
              <a
                href="https://www.instagram.com/strongacademy.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                @strongacademy.cl
              </a>
            </Card>
          </div>

          {/* CTA Final */}
          <div className="mt-20 max-w-3xl mx-auto">
            <Card className="p-8 bg-primary text-primary-foreground text-center">
              <h3 className="text-3xl font-[Quicksand] font-bold mb-4">
                ¿Quieres ser parte de esta comunidad?
              </h3>
              <p className="mb-6 font-[Montserrat]">
                Si tu marca comparte nuestra visión y valores, contáctanos para explorar
                una posible colaboración.
              </p>
              {/* 🔹 Aquí reemplazamos <a href> por navegación SPA */}
              <button
                onClick={() => navigate("/contact")}
                className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                CONTACTAR
              </button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsors;

