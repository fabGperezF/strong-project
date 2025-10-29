import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import TransformationCard from "@/components/TransformationCard";
import InstagramPreview from "@/components/InstagramPreview";
import TikTokPreview from "@/components/TikTokPreview";
import { Button } from "@/components/ui/button";
import fondo3 from "@/assets/fondo3.png";
import producto1 from "@/assets/producto1.png";
import producto2 from "@/assets/producto2.png";
import producto3 from "@/assets/producto3.png";
import producto4 from "@/assets/producto4.png";
import producto5 from "@/assets/producto5.png";
import producto6 from "@/assets/producto6.png";
import flyer1 from "@/assets/flyer1.png";
import flyer2 from "@/assets/flyer2.png";
import flyer3 from "@/assets/flyer3.png";
import flyer4 from "@/assets/flyer4.png";
import antes1 from "@/assets/antes1.png";
import despues1 from "@/assets/despues1.png";
import antes2 from "@/assets/antes2.png";
import despues2 from "@/assets/despues2.png";

const Index = () => {
  const [showFlyers, setShowFlyers] = useState(false);
  const [currentFlyer, setCurrentFlyer] = useState(0);
  const flyers = [flyer1, flyer2, flyer3, flyer4];
  const navigate = useNavigate(); // Hook para navegación interna

  return (
    <div className="min-h-screen bg-background font-[Montserrat] relative flex flex-col">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${fondo3})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light mb-4 tracking-tight font-quicksand">
            &nbsp;SR. STRONG
          </h1>
          <p className="text-2xl md:text-4xl mb-12 tracking-wide font-monstserrat">
            Docente y entrenador con más de 10 años de experiencia
          </p>
          <Button
            size="lg"
            variant="hero"
            className="text-lg px-8 py-6 font-quicksand"
            onClick={() => navigate("/about")}
          >
            QUIÉN SOY
          </Button>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-quicksand text-foreground max-w-4xl mx-auto">
            “La motivación es efímera, pero la disciplina es eterna.”
          </blockquote>
        </div>
      </section>

      {/* Transformaciones */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
            TRANSFORMACIONES REALES
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Resultados alcanzados con disciplina, constancia y un plan bien estructurado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
            {/* Card 1 */}
            <TransformationCard
              beforeImage={antes1}
              afterImage={despues1}
              name="Alfonso Rodríguez"
              duration="28 semanas"
              testimonial="Antes no tenía energía ni motivación. Con este plan entendí la importancia de la constancia y hoy me siento en mi mejor versión, física y mentalmente."
            />

            {/* Texto al centro */}
            <div className="flex flex-col justify-center items-center text-center px-4">
              <p className="text-2xl font-semibold font-quicksand leading-relaxed">
                “Cada transformación cuenta una historia diferente, pero todas tienen algo en común: la disciplina y el esfuerzo.”
              </p>
            </div>

            {/* Card 2 */}
            <TransformationCard
              beforeImage={antes2}
              afterImage={despues2}
              name="María José Fernández"
              duration="1 año"
              testimonial={`Cuando empecé este proceso pesaba 90 kilos. Me costaba mucho mirarme al espejo sin sentirme frustrada, y aunque tenía ganas de cambiar, no sabía por dónde empezar ni si realmente sería capaz de lograrlo. Me daba miedo fallar otra vez.

Ahí fue cuando apareció mi coach, y sinceramente, fue el mejor impulso que pude haber tenido. Desde el primer día estuvo conmigo al 100%, no solo como entrenador, sino como un verdadero apoyo en cada etapa. Me enseñó muchísimo: cómo entrenar correctamente, pero sobre todo, cómo creer en mí y en mi proceso.

Al principio me costó, tuve días de cansancio, dudas y momentos en que sentía que no avanzaba. Pero él siempre estuvo ahí, guiándome, explicándome, motivándome y recordándome que los resultados llegan cuando se hace el trabajo con constancia y paciencia.

Hoy, mirando hacia atrás, me doy cuenta de todo lo que he avanzado. No solo bajé de peso, también gané confianza, fuerza, energía y una mentalidad completamente distinta. Aprendí a disfrutar el entrenamiento, a escuchar mi cuerpo y a sentirme orgullosa de cada pequeño logro.

Este año juntos fue mucho más que un cambio físico. Fue un proceso de transformación personal en todos los sentidos. Aprendí a quererme, a confiar en mí y a entender que sí se puede, siempre que haya compromiso, guía y acompañamiento real.

Gracias a mi coach por estar en cada paso, por enseñarme tanto y por creer en mí incluso cuando yo dudaba. Hoy puedo decir que soy una versión más fuerte, segura y feliz de mí misma. 💪❤️`}
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-muted">
        <div className="container mx-auto px-4">

          {/* STRONG PROJECT */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
              STRONG PROJECT
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-monstserrat">
              Strong Project es un programa de entrenamiento online personalizado, diseñado para quienes buscan mejorar.
            </p>
          </div>

          {/* Primer grupo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <ProductCard
              title="Plan Mensual"
              description="*PLAN MENSUAL NO INCLUYE ACCESO A CONTENIDO GRATUITO"
              image={producto1}
            />
            <ProductCard
              title="Plan Trimestral"
              description="15% DE DESCUENTO AL CONTRATAR PLAN TRIMESTRAL"
              image={producto2}
            />
            <ProductCard
              title="Plan Semestral"
              description="20% DE DESCUENTO AL CONTRATAR PLAN SEMESTRAL"
              image={producto3}
            />
          </div>

          {/* STRONG PROJECT TEAM */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
              STRONG PROJECT TEAM
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-monstserrat">
              Strong Project Team es un programa de Entrenamiento + Nutrición online personalizado, diseñado para quienes buscan maximizar sus resultados.
            </p>
          </div>

          {/* Segundo grupo */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <ProductCard
              title="Plan Mensual"
              description="*PLAN MENSUAL NO INCLUYE ACCESO A CONTENIDO GRATUITO"
              image={producto4}
            />
            <ProductCard
              title="Plan Trimestral"
              description="15% DE DESCUENTO AL CONTRATAR PLAN TRIMESTRAL"
              image={producto5}
            />
            <ProductCard
              title="Plan Semestral"
              description="20% DE DESCUENTO AL CONTRATAR PLAN SEMESTRAL"
              image={producto6}
            />
          </div>

          {/* Texto pequeño */}
          <div className="text-center mt-6">
            <p className="text-sm md:text-base text-muted-foreground tracking-wide font-monstserrat italic">
              MAXIMIZA TUS RESULTADOS INCORPORANDO ASESORÍA NUTRICIONAL.
            </p>
          </div>

          {/* Botón Ver Detalles */}
          <div className="text-center mt-10">
            <Button
              onClick={() => setShowFlyers(true)}
              className="bg-primary text-white px-8 py-4 rounded-xl text-lg hover:scale-105 transition-transform"
            >
              VER DETALLES
            </Button>
          </div>
        </div>
      </section>

      {/* Modal tipo visor PDF */}
      {showFlyers && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Botón Cerrar */}
            <button
              onClick={() => setShowFlyers(false)}
              className="absolute top-6 right-8 text-white hover:text-gray-300 transition"
            >
              <X size={36} />
            </button>

            {/* Botón Anterior */}
            <button
              onClick={() =>
                setCurrentFlyer((prev) => (prev === 0 ? flyers.length - 1 : prev - 1))
              }
              className="absolute left-6 text-white/80 hover:text-white transition text-5xl font-light"
            >
              ‹
            </button>

            {/* Imagen Flyer */}
            <div className="flex justify-center items-center w-full h-full px-8">
              <img
                src={flyers[currentFlyer]}
                alt={`Flyer ${currentFlyer + 1}`}
                className="max-h-[90vh] w-auto rounded-2xl shadow-2xl object-contain transition-all duration-300"
              />
            </div>

            {/* Botón Siguiente */}
            <button
              onClick={() =>
                setCurrentFlyer((prev) => (prev === flyers.length - 1 ? 0 : prev + 1))
              }
              className="absolute right-6 text-white/80 hover:text-white transition text-5xl font-light"
            >
              ›
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
              {flyers.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentFlyer ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Redes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
            SÍGUEME EN INSTAGRAM
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            📚 Docente y entrenador | Entrena con propósito 🧠
          </p>
          <InstagramPreview
            username="srstrong_"
            profileUrl="https://www.instagram.com/srstrong_/?hl=es-la"
            profileImage="https://imgur.com/haNzrmY.png"
          />
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
            TAMBIÉN EN TIKTOK
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Tips rápidos, análisis técnicos y educación en entrenamiento.
          </p>
          <TikTokPreview username="srstrong" profileUrl="https://tiktok.com/@srstrong" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;




