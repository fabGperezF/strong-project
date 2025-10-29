import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import perfil from "@/assets/perfil.jpg";
import fondo from "@/assets/fondo.png";
import Carousel from "@/components/Carousel";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
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
            JONATHAN STRONG
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-monserrat leading-relaxed text-gray-100 drop-shadow">
            "Las pesas se convirtieron en mi escape, en mi obsesión, en mi todo".
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Carrusel de imágenes reemplazando la foto */}
            <div className="space-y-6">
              <Carousel />

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center">
                  <div className="text-3xl font-quicksand font-bold text-primary mb-2">1000+</div>
                  <p className="text-sm font-monserrat text-muted-foreground">Clientes Transformados</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="text-3xl font-quicksand font-bold text-primary mb-2">10</div>
                  <p className="text-sm font-monserrat text-muted-foreground">Años de Experiencia</p>
                </Card>
              </div>
            </div>

            {/* Texto principal */}
            <div className="space-y-10">
              {/* Historia */}
              <div>
                <h2 className="text-3xl font-quicksand mb-4">Mi Historia</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-monserrat">
                  <p>
                    Desde siempre me ha fascinado la ciencia y tengo una enorme pasión por la docencia, pero la vida me llevó por otros caminos. Aunque estudié periodismo en la UNIACC gracias a una beca y luego un diplomado en Marketing, mi verdadero refugio y motivación apareció tras una ruptura amorosa: el gimnasio y las pesas se convirtieron en mi escape y en mi obsesión. Allí descubrí que entrenar no era solo un hobby, sino una pasión que quería convertir en mi vida.
                  </p>
                  <p>
                    Para seguir mi pasión, trabajé en una tienda de suplementos mientras estudiaba Preparación Física en el CFT Santo Tomás, donde rápidamente me destaqué gracias a mis años de autoestudio. Posteriormente hice mi práctica en Motion Center, ascendí a Jefe de Área Técnica y luego obtuve la licenciatura en Ciencias del Deporte en la Universidad Santo Tomás. Más tarde, completé un Magíster en Neurociencias en la Universidad Autónoma, defendiendo mi tesis en 2023.
                  </p>
                  <p>
                    Mi enfoque se basa en la formación rigurosa, el conocimiento científico y la pasión por educar. Combino la evidencia con la práctica, enseñando a mis clientes y alumnos a entrenar con propósito, evitando la charlatanería y enfocándome en resultados reales, sostenibles y saludables.
                  </p>
                </div>
              </div>

              {/* Misión */}
              <div>
                <h2 className="text-3xl font-quicksand mb-4">Mi Misión</h2>
                <p className="text-muted-foreground leading-relaxed font-monserrat">
                  Mi misión es guiar a cada persona que confía en mí hacia una transformación integral. Más allá del cambio físico, busco que mis clientes desarrollen disciplina, confianza y fuerza mental. Quiero que cada entrenamiento tenga un propósito, que cada logro genere orgullo y que cada proceso de aprendizaje los haga más fuertes, física y mentalmente.
                </p>
              </div>

              {/* Certificaciones */}
              <div>
                <h2 className="text-3xl font-quicksand mb-4">Títulos</h2>
                <ul className="space-y-2 text-muted-foreground font-monserrat">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Preparador Físico - Centro de formación técnica Santo Tomás.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Lic. Ciencias del Deporte - Universidad Santo Tomás.
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Msc en Neurociencia - U. Autónoma y U. Oviedo (España).
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    Entrenador de Fuerza & Fitness, Docente, Emprendedor.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-quicksand text-center mb-12">Mis Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-quicksand mb-4">Propósito</h3>
              <p className="text-muted-foreground font-monserrat">
                Entrenar con un propósito es el punto de partida de todo progreso. Sin una meta clara, el entrenamiento se vuelve caótico y frustrante. El propósito da dirección, sentido y coherencia a cada acción, evitando el “entrenar por entrenar”.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-quicksand mb-4">Progresión</h3>
              <p className="text-muted-foreground font-monserrat">
                El cuerpo humano está diseñado para adaptarse. La mejora continua —aunque sea mínima— es lo que transforma al practicante. La progresión representa disciplina, paciencia y el entendimiento de que los resultados se construyen paso a paso, no de golpe.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-quicksand mb-4">Consistencia</h3>
              <p className="text-muted-foreground font-monserrat">
                La motivación es pasajera, pero la consistencia es lo que realmente genera cambios duraderos. La constancia convierte el entrenamiento en un hábito automático, permitiendo mantener resultados en el tiempo sin depender del estado de ánimo.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

