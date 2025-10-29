import { Music2, Play } from "lucide-react";

interface TikTokPreviewProps {
  username: string;
  profileUrl: string;
}

const TikTokPreview = ({ username, profileUrl }: TikTokPreviewProps) => {
  const tiktokVideos = [
    { 
      id: 1,
      thumbnail: "https://imgur.com/FPqOxhg.png",
      views: "4014",
      description: "¿A alguien más le ha pasado?",
      link: "https://www.tiktok.com/@sr_strong/video/7561407812375547148?is_from_webapp=1&sender_device=pc&web_id=7558654108484437560"
    },
    { 
      id: 2,
      thumbnail: "https://imgur.com/azWN3La.png",
      views: "1238",
      description: "Ya estoy bien cansado de influencers del fitness y divulgadores loros 🦜 que repiten cosas sin entender realmente lo que hacen y el por qué.",
      link: "https://www.tiktok.com/@sr_strong/video/7385141864330038533?lang=es-419"
    },
    { 
      id: 3,
      thumbnail: "https://imgur.com/h9TVwKq.png",
      views: "985",
      description: "¿También caíste en este mito alguna vez? 👀",
      link: "https://www.tiktok.com/@sr_strong/video/7558456066334280972?is_from_webapp=1&sender_device=pc&web_id=7558654108484437560"
    },
    { 
      id: 4,
      thumbnail: "https://imgur.com/vpMHL8N.png",
      views: "1306",
      description: "Mucho se habla de entrenamiento “funcional” y se suele relacionar directamente con trabajos en circuito y entrenamientos que “asemejan” movimientos de nuestro diario vivir.",
      link: "https://www.tiktok.com/@sr_strong/video/7547736169065319736?is_from_webapp=1&sender_device=pc&web_id=7558654108484437560"
    },
    { 
      id: 5,
      thumbnail: "https://imgur.com/nE8HDeY.png",
      views: "1279",
      description: "👉 ¿Subir el peso o aumentar las repeticiones?",
      link: "https://www.tiktok.com/@sr_strong/video/7546407104807013637?is_from_webapp=1&sender_device=pc&web_id=7558654108484437560"
    },
    { 
      id: 6,
      thumbnail: "https://imgur.com/hwma2vG.png",
      views: "1163",
      description: "La cafeína es un estimulante natural que se encuentra en el café, el té y otras bebidas y alimentos, y pertenece a una clase de compuestos conocidos como xantinas.",
      link: "https://www.tiktok.com/@sr_strong/video/7227132435228527877?is_from_webapp=1&sender_device=pc&web_id=7558654108484437560"
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header del perfil */}
      <div className="flex items-center gap-3 mb-8 p-6 bg-card rounded-lg border border-border">
        {/* Imagen de perfil */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-black via-gray-900 to-gray-800 p-0.5">
          <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
            <img
              src="https://imgur.com/haNzrmY.png"
              alt={`${username} profile`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Información */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold text-foreground mb-1">@sr_strong</h3>
          <p className="text-muted-foreground">
            MSc Neuroscience - Sport Science - Physical Trainer - Evidence-Based
          </p>
        </div>

        {/* Botón seguir */}
        <a
          href={"https://www.tiktok.com/@sr_strong?is_from_webapp=1&sender_device=pc"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gradient-to-r from-black to-gray-900 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Seguir
        </a>
      </div>

      {/* Grid de videos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {tiktokVideos.map((video) => (
          <a
            key={video.id}
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-[9/16] relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Imagen */}
            <img
              src={video.thumbnail}
              alt={`TikTok video ${video.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay al pasar el mouse */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <div className="flex items-center gap-1 text-white text-sm font-medium mb-1">
                <Play className="w-4 h-4" fill="white" />
                <span>{video.views}</span>
              </div>
              <p className="text-xs text-gray-200 truncate">{video.description}</p>
            </div>
          </a>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Haz clic en cualquier video para verlo directamente en TikTok 🎥
      </p>
    </div>
  );
};

export default TikTokPreview;


