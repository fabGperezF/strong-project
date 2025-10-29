import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importa las imágenes desde src/assets
import img1 from "@/assets/perfil.jpg";
import img2 from "@/assets/perfil1.jpg";
import img3 from "@/assets/perfil2.jpg";
import img4 from "@/assets/perfil3.jpg";

const images = [img1, img2, img3, img4];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-2xl shadow-lg">
      <img
        src={images[current]}
        alt={`Foto ${current + 1}`}
        className="object-cover w-full h-full transition-opacity duration-700"
      />

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        aria-label="Anterior"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
        aria-label="Siguiente"
      >
        <ChevronRight />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full focus:outline-none ${i === current ? "bg-white" : "bg-white/40"}`}
            aria-label={`Ir a la imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

