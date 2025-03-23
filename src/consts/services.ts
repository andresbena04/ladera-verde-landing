import grill from '../../public/svg/grill.svg';
import sun from '../../public/svg/sun.svg';
import pool from '../../public/svg/pool.svg';
import party from '../../public/svg/party.svg';
import hotel from '../../public/svg/hotel.svg';
import mountain from '../../public/svg/mountain.svg';

export const services = [
    {
        titulo: "Hospedaje por noche",
        descripcion: "Equipada con todas las comodidades para una estadía placentera.",
        icono: hotel
    },
    {
        titulo: "Pasadías",
        descripcion: "Disfruta de nuestras instalaciones durante el día con piscina, zonas verdes y más.",
        icono: sun,
    },
    {
        titulo: "Eventos",
        descripcion: "Espacios ideales para celebraciones, reuniones y eventos corporativos.",
        icono: party,
    },
    {
        titulo: "Zona de Parrilla",
        descripcion: "Área de asados para compartir con familia y amigos.",
        icono: grill,
    },
    {
        titulo: "Piscina",
        descripcion: "Piscina disponible para huéspedes y visitantes.",
        icono: pool,
    },
    {
        titulo: "Senderismo",
        descripcion: "Rutas naturales para explorar y conectar con la naturaleza.",
        icono: mountain,
    }
]