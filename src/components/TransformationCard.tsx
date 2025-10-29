import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const TransformationCard = ({ beforeImage, afterImage, name, duration, testimonial }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-card rounded-2xl shadow-lg overflow-hidden max-w-sm mx-auto transition-transform hover:scale-105">
      <div className="grid grid-cols-2 relative">
        {/* Imagen ANTES */}
        <div className="relative">
          <img
            src={beforeImage}
            alt={`${name} antes`}
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-2 left-2 bg-black/60 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Antes
          </span>
        </div>

        {/* Imagen DESPUÉS */}
        <div className="relative">
          <img
            src={afterImage}
            alt={`${name} después`}
            className="w-full h-64 object-cover"
          />
          <span className="absolute top-2 right-2 bg-green-600/70 text-white text-sm font-semibold px-3 py-1 rounded-full">
            Después
          </span>
        </div>
      </div>

      {/* Contenido debajo de las imágenes */}
      <div className="p-4">
        <h3 className="text-xl font-bold font-quicksand">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">Duración: {duration}</p>

        <Button onClick={() => setOpen(true)} variant="secondary">
          Ver testimonio
        </Button>
      </div>

      {/* Modal con testimonio */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="font-quicksand text-2xl">{name}</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              Transformación en {duration}
            </DialogDescription>
          </DialogHeader>

          {/* Contenedor con scroll interno */}
          <div className="overflow-y-auto pr-2 mt-4 text-lg leading-relaxed whitespace-pre-line text-justify flex-1">
            {testimonial}
          </div>

          <DialogFooter className="pt-4 border-t border-gray-200">
            <Button onClick={() => setOpen(false)}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TransformationCard;

