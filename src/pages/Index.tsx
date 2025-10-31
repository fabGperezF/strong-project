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
import flyer5 from "@/assets/flyer5.png";
import flyer6 from "@/assets/flyer6.png";

import terminos1 from "@/assets/terminos1.png";
import terminos2 from "@/assets/terminos2.png";
import terminos3 from "@/assets/terminos3.png";
import terminos4 from "@/assets/terminos4.png";

import antes1 from "@/assets/antes1.png";
import despues1 from "@/assets/despues1.png";
import antes2 from "@/assets/antes2.png";
import despues2 from "@/assets/despues2.png";

// 🔹 Agrega tus 5 imágenes de capacitaciones
import cap1 from "@/assets/cap1.png";
import cap2 from "@/assets/cap2.png";
import cap3 from "@/assets/cap3.png";
import cap4 from "@/assets/cap4.png";
import cap5 from "@/assets/cap5.png";

const Index = () => {
  const [showFlyers, setShowFlyers] = useState(false);
  const [currentFlyer, setCurrentFlyer] = useState(0);
  const [flyers, setFlyers] = useState([]);
  const navigate = useNavigate();

  // 🔹 Abrir visor según grupo
  const openFlyers = (group) => {
    if (group === "strong") setFlyers([flyer4, flyer5, flyer6]);
    else if (group === "team") setFlyers([flyer1, flyer2, flyer3]);
    else if (group === "terms") setFlyers([terminos1, terminos2, terminos3, terminos4]);
    else if (group === "caps") setFlyers([cap1, cap2, cap3, cap4, cap5]);

    setCurrentFlyer(0);
    setShowFlyers(true);
  };

  return (
    <div className="min-h-screen bg-background font-[Montserrat] relative flex flex-col">
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${fondo3})`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight font-helvetica">
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

      {/* FRASE */}
      <section className="py-16 bg-muted text-center">
        <blockquote className="text-2xl md:text-3xl font-quicksand text-foreground max-w-4xl mx-auto">
          “La motivación es efímera, pero la disciplina es eterna.”
        </blockquote>
      </section>

      {/* TRANSFORMACIONES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
            TRANSFORMACIONES REALES
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Resultados alcanzados con disciplina, constancia y un plan bien estructurado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
            <TransformationCard
              beforeImage={antes1}
              afterImage={despues1}
              name="Alfonso Rodríguez"
              duration="28 semanas"
              testimonial="Antes no tenía energía ni motivación. Con este plan entendí la importancia de la constancia..."
            />
            <div className="flex flex-col justify-center items-center text-center px-4">
              <p className="text-2xl font-semibold font-quicksand leading-relaxed">
                “Cada transformación cuenta una historia diferente, pero todas tienen algo en común:
                la disciplina y el esfuerzo.”
              </p>
            </div>
            <TransformationCard
              beforeImage={antes2}
              afterImage={despues2}
              name="María José Fernández"
              duration="1 año"
              testimonial="Aprendí a disfrutar el entrenamiento, a escuchar mi cuerpo y a sentirme orgullosa de cada pequeño logro."
            />
          </div>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section id="productos" className="py-20 bg-muted relative">
        <div className="container mx-auto px-4">
          {/* STRONG PROJECT */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
              STRONG PROJECT
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-monstserrat">
              Programa de entrenamiento online personalizado, diseñado para quienes buscan mejorar.
            </p>
          </div>

          {/* 3 productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
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

          {/* Botón STRONG */}
          <div className="text-center mb-20">
            <Button
              onClick={() => openFlyers("strong")}
              className="bg-primary text-white px-8 py-4 rounded-xl text-lg hover:scale-105 transition-transform"
            >
              VER DETALLES
            </Button>
          </div>

          {/* STRONG TEAM */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
              STRONG PROJECT TEAM
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-monstserrat">
              Entrenamiento + Nutrición online personalizado para maximizar resultados.
            </p>
          </div>

          {/* 3 productos */}
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

          {/* Botón TEAM */}
          <div className="text-center mb-10">
            <Button
              onClick={() => openFlyers("team")}
              className="bg-primary text-white px-8 py-4 rounded-xl text-lg hover:scale-105 transition-transform"
            >
              VER DETALLES
            </Button>
          </div>

          {/* Botón Términos */}
          <div className="flex justify-end mt-12">
            <Button
              onClick={() => openFlyers("terms")}
              className="bg-gray-800 text-white px-6 py-3 rounded-lg text-base hover:bg-gray-700 transition"
            >
              VER TÉRMINOS Y CONDICIONES
            </Button>
          </div>
        </div>
      </section>

      {/* 🔹 NUEVA SECCIÓN: CAPACITACIONES PROFESIONALES */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-quicksand">
            CAPACITACIONES PROFESIONALES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            "Llevo la ciencia del entrenamiento a la práctica real. Mis capacitaciones combinan
            evidencia, experiencia y aplicación, para formar profesionales capaces de pensar,
            razonar y ejecutar con excelencia dentro y fuera de la sala de musculación".
          </p>

          <div className="flex flex-col items-center space-y-8">
            <img
              src={cap1}
              alt="Capacitaciones profesionales"
              className="w-full max-w-3xl rounded-2xl shadow-xl object-cover"
            />

            <Button
              onClick={() => openFlyers("caps")}
              className="bg-primary text-white px-10 py-4 rounded-xl text-lg hover:scale-105 transition-transform"
            >
              VER DETALLES
            </Button>

            <Button
              onClick={() => navigate("/contact")}
              className="mt-6 bg-gray-900 text-white px-8 py-4 rounded-xl text-lg hover:bg-gray-800 transition"
            >
              COTIZA TU CAPACITACIÓN
            </Button>
          </div>
        </div>
      </section>

      {/* MODAL VISOR */}
      {showFlyers && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fade-in">
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              onClick={() => setShowFlyers(false)}
              className="absolute top-6 right-8 text-white hover:text-gray-300 transition"
            >
              <X size={36} />
            </button>

            <button
              onClick={() =>
                setCurrentFlyer((prev) => (prev === 0 ? flyers.length - 1 : prev - 1))
              }
              className="absolute left-6 text-white/80 hover:text-white transition text-5xl font-light"
            >
              ‹
            </button>

            <div className="flex justify-center items-center w-full h-full px-8">
              <img
                src={flyers[currentFlyer]}
                alt={`Flyer ${currentFlyer + 1}`}
                className="max-h-[90vh] w-auto rounded-2xl shadow-2xl object-contain transition-all duration-300"
              />
            </div>

            <button
              onClick={() =>
                setCurrentFlyer((prev) =>
                  prev === flyers.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-6 text-white/80 hover:text-white transition text-5xl font-light"
            >
              ›
            </button>

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

      {/* REDES */}
      <section className="py-24 bg-muted text-center">
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
      </section>

      <section className="py-24 bg-background text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
          TAMBIÉN EN TIKTOK
        </h2>
        <p className="text-xl text-muted-foreground mb-12">
          Tips rápidos, análisis técnicos y educación en entrenamiento.
        </p>
        <TikTokPreview username="srstrong" profileUrl="https://tiktok.com/@srstrong" />
      </section>

      <Footer />
    </div>
  );
};

export default Index;






