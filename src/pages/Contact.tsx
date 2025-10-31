import { useState } from "react";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import fondo from "@/assets/fondo.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_eigq5qs",   // 🔹 Reemplaza con tu Service ID
        "template_tu0tsso",  // 🔹 Reemplaza con tu Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "2TPc4KspWnkYLnHSF"    // 🔹 Reemplaza con tu Public Key
      );

      toast({
        title: "Mensaje enviado ✅",
        description: "Gracias por contactarte, te responderemos lo antes posible.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      toast({
        title: "Error ❌",
        description: "Hubo un problema al enviar el mensaje. Inténtalo nuevamente.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-quicksand mb-6 animate-fade-in tracking-wide text-white drop-shadow-lg">
            CONTACTO
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-monserrat leading-relaxed text-gray-100 drop-shadow">
            ¿Listo para transformar tu vida? Hablemos
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl fond-quicksand">Envíame un mensaje</CardTitle>
                <CardDescription className="fond-monserrat">
                  Completa el formulario y te responderé a la brevedad
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6 fond-monserrat">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="fond-monserrat">Nombre Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="fond-monserrat">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="fond-monserrat">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+56 9 1234 5678"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="fond-monserrat">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Cuéntame qué necesitas..."
                      rows={6}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full fond-quicksand">
                    ENVIAR MENSAJE
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 fond-quicksand">Información de Contacto</h2>
                <p className="text-muted-foreground mb-8 fond-monserrat">
                  Puedes contactarme directamente a través de cualquiera de estos medios:
                </p>

                <div className="space-y-6 fond-monserrat">
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 fond-quicksand">Email</h3>
                        <p className="text-muted-foreground">jonathanstrong.str@gmail.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 fond-quicksand">Teléfono / WhatsApp</h3>
                        <p className="text-muted-foreground">+56 9 6836 5231</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-full">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 fond-quicksand">Ubicación</h3>
                        <p className="text-muted-foreground">Santiago, Chile</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 fond-quicksand">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-6 fond-monserrat">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 fond-quicksand">
                  1. ¿Qué incluye el servicio de STRONG PROJECT?
                </h3>
                <p className="text-muted-foreground">
                  El servicio incluye una evaluación inicial personalizada y el diseño de un plan de entrenamiento y/o nutrición según tus objetivos y nivel. Además, se ofrece seguimiento periódico por WhatsApp o aplicación, ajustes del plan cada 4 a 8 semanas y comunicación directa con el profesional responsable. Todo el servicio se entrega 100% online.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 fond-quicksand">
                  2. ¿Cómo se realiza el pago y qué pasa si no quiero continuar?
                </h3>
                <p className="text-muted-foreground">
                  El pago debe hacerse por adelantado mediante Mercado Pago u otro medio habilitado. El compromiso mínimo es de 1 mes. No se realizan reembolsos por decisión personal de no continuar una vez iniciado el plan, ya que el servicio comienza a ejecutarse desde el momento del pago.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-bold text-lg mb-2 fond-quicksand">
                  3. ¿Puedo pausar o reprogramar mi plan?
                </h3>
                <p className="text-muted-foreground">
                  Sí, puedes solicitar una pausa temporal del servicio solo en casos justificados, como enfermedad, lesión o viaje prolongado. Debes avisar con anticipación y la pausa debe ser autorizada por el profesional, con una duración máxima de 30 días.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

