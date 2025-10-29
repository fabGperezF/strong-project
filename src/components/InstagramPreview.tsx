import { Instagram } from "lucide-react";

interface InstagramPreviewProps {
  username: string;
  profileUrl: string;
  profileImage: string;
}

const InstagramPreview = ({ username, profileUrl, profileImage }: InstagramPreviewProps) => {
  const instagramPosts = [
    { 
      id: 1,
      image: "https://imgur.com/oox7v8P.png",
      description: "📱💪 Todos tenemos ese alumno que dice que descansa 2 minutos… pero lleva 10 en el celular 😅",
      link: "https://www.instagram.com/p/DP2OFX2jW36/?hl=es-la"
    },
    { 
      id: 2,
      image: "https://imgur.com/LC04nzh.png",
      description: "💬 SABÍAS QUÉ...",
      link: "https://www.instagram.com/p/DM6cY7_R4hI/?hl=es-la"
    },
    { 
      id: 3,
      image: "https://imgur.com/cIk9DXd.png",
      description: "📢 Otra vez el entrenador hablando en otro idioma… 😅",
      link: "https://www.instagram.com/p/DPwOKiIEa-4/?hl=es-la"
    },
    { 
      id: 4,
      image: "https://imgur.com/eEUKp6C.png",
      description: "Pocas veces hago esto de mostrar los progresos de mis alumnos",
      link: "https://www.instagram.com/p/CCwVDmFjVYZ/?hl=es-la"
    },
    { 
      id: 5,
      image: "https://imgur.com/NijlhTn.png",
      description: "Durante más de 5 años he tenido el privilegio de formar a estudiantes y profesionales del entrenamiento 🧠💪.",
      link: "https://www.instagram.com/p/DPMIvI3kfF7/?hl=es-la&img_index=1"
    },
    { 
      id: 6,
      image: "https://imgur.com/mgxoKQG.png",
      description: "Me acuerdo de mis primeras semanas en el gimnasio…hace casi 14 años.",
      link: "https://www.instagram.com/p/DH4T1NlyWMa/?hl=es-la&img_index=1"
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header del perfil */}
      <div className="flex items-center gap-3 mb-8 p-6 bg-card rounded-lg border border-border">
        {/* Imagen de perfil */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-0.5">
          <div className="w-full h-full rounded-full bg-background overflow-hidden">
            <img
              src={profileImage}
              alt={`${username} profile`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Información */}
        <div className="flex-1 text-left">
          <h3 className="text-2xl font-bold text-foreground mb-1">@{username}</h3>
          <p className="text-muted-foreground">Entrenador Fuerza & Fitness</p>
        </div>

        {/* Botón seguir */}
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
        >
          Seguir
        </a>
      </div>

      {/* Grid de publicaciones */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={post.image}
              alt={`Instagram post ${post.id}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            {/* Overlay en hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
              <div className="flex items-center justify-center mb-2">
                <Instagram className="w-6 h-6 text-white opacity-80" />
              </div>
              <p className="text-xs text-gray-200 text-center truncate">
                {post.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-6">
        Haz clic en cualquier publicación para verla directamente en Instagram 📸
      </p>
    </div>
  );
};

export default InstagramPreview;
