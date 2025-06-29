Tapas: Sistema de Recolección de Tapitas de Plástico

Descripción

Proyecto Tapas ("Tapitas por una Causa") es una aplicación web que funciona como:

Foro informativo: Explica el propósito, participantes y proceso de reciclaje de tapitas de plástico.

Sistema de recolección: Permite a los usuarios registrar puntos de entrega con un formulario y geolocalización en un mapa.

La parte frontend está desarrollada con HTML, CSS y JavaScript; el backend corre en Node.js con Express y conecta a una base de datos gestionada en Supabase. Además, se integra la Google Maps JavaScript API con Autocomplete.

Características principales

Menú lateral y navegación entre secciones.

Página de información estática sobre la recolección de tapitas.

Mapa con geolocalización y buscador de direcciones (Places Autocomplete).

Formulario de registro de puntos de recolección (dirección, coordenadas, cantidad en kg, contacto).

Backend en Node.js que expone endpoints para insertar datos en Supabase.

Seguridad configurada en Supabase con Row Level Security (RLS) y política pública de inserción.

Estructura de archivos

Tapas/
├── index.html            # Página principal con menú informativo
├── mapa.html             # Vista de mapa y formulario de recolección
├── style.css             # Estilos globales
├── supabaseClient.js     # Cliente Supabase (configuración env)
├── server.js             # Servidor Express con endpoints API
├── .env                  # Variables de entorno (URL y KEY de Supabase)
└── README.md             # Este archivo

Requisitos previos

Node.js (v14+).

npm (v6+).

Cuenta y proyecto en Supabase.

Google Maps API Key con habilitación de Maps JavaScript API y Places API.

Configuración

Clona el repositorio:

git clone https://github.com/TU_USUARIO/Tapas.git
cd Tapas

Instala dependencias:

npm install express cors @supabase/supabase-js dotenv

Crea el archivo .env en la raíz con el siguiente contenido (sin espacios extra):

SUPABASE_URL=https://<TU_PROJECT_URL>.supabase.co
SUPABASE_KEY=<TU_ANON_PUBLIC_KEY>

Configura en Supabase:

Habilita Row Level Security en la tabla recoleccion_tapitas.

Añade policy de inserción pública:

create policy "Enable insert for all users"
  on public.recoleccion_tapitas
  as permissive
  for insert
  to public
  with check (true);

Ejecución

Inicia el servidor (forzando IPv4 si es necesario):

node --dns-result-order=ipv4first server.js

Abre en el navegador:

Información:  http://localhost:3000/index.html

Mapa y formulario:  http://localhost:3000/mapa.html

Registra un punto de recolección y verifica en el panel de Supabase que los datos se hayan insertado.
