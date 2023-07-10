import { BsFillGiftFill } from 'react-icons/bs';
import { RiPlantFill } from 'react-icons/ri';
import { IoWaterSharp } from 'react-icons/io5';
import { AiFillHeart } from 'react-icons/ai';

export const exploreWorlds = [
  {
    id: 'item-1',
    imgUrl: '/arbol-boj.webp',
    title: 'Arbol Boj',
    watering: '1',
  },
  {
    id: 'item-2',
    imgUrl: '/bonsai-ligustro.webp',
    title: 'Bonsai Ligustro',
    watering: '5',
  },

  {
    id: 'item-3',
    imgUrl: '/avatar.webp',
    title: 'Avatar',
    watering: '3',
  },
  {
    id: 'item-4',
    imgUrl: '/copa.webp',
    title: 'Monuento',
    watering: '3',
  },
];

export const startingFeatures = [
  'Esgoge un ecosistema con el que tengas conexión',
  'Al cambio de estación, revisa la humedad del ambiente',
  'En caso de estar seco, humedecer las raices',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
      'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
      'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/colgante-takecare.webp',
    title: 'Colgantes',
    subtitle:
      'Se riegan por inmersión (como el modelo Avatar). Se destapa y se sumerge en una taza de agua (preferiblemente agua mineral o de lluvia), durante 30 segundos y volver a cerrar. No se debe colocar a la luz del sol directa, pero sí debe recibir luz indirecta para realizar la fotosíntesis. Dejar en un punto fijo y no cambiar ',
    link: 'https://www.vidarios.com/product-page/avatar',
  },
  {
    imgUrl: '/copa-takecare.webp',
    title: 'Copas',
    subtitle:
      'Estos modelos se riegan únicamente cuando las plantas están decaídas y se le coloca 1 cucharada de agua en la base de cada planta.Dejarlo en un punto fijo y no moverlo constantemente es clave.',
    link: 'https://www.vidarios.com/product-page/copa',
  },
  {
    imgUrl: '/petaca-takecare.webp',
    title: 'Petacas',
    subtitle:
      'Se riegan con 10 gotitas. No se mueven de lugar. No deben recibir luz del sol directa.',
    link: 'https://www.vidarios.com/product-page/petacas',
  },
];

export const socials = [
  {
    name: 'linkedin',
    url: '/linkedin.svg',
    link: 'https://www.linkedin.com/company/vidarios/',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
    link: ' https://www.instagram.com/vidarios/?hl=es',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
    link: 'https://www.facebook.com/vidariosUY',
  },
];

export const iconsList = [
  <IoWaterSharp size={70} className="text-[#40aa55]" />,
  <RiPlantFill size={70} className="text-[#40aa55]" />,
  <AiFillHeart size={70} className="text-[#40aa55]" />,
  <BsFillGiftFill size={70} className="text-[#40aa55]" />,
];

export const burgerItems = [
  { id: 1, name: 'Acerca de Vidarios', link: '#about' },
  { id: 2, name: 'Más Vendidos', link: '#bestSeller' },
  { id: 3, name: 'Como funciona', link: '#howItWorks' },
  { id: 4, name: 'Tips para cuidado', link: '#tips' },
  { id: 5, name: 'Novedades', link: '#whatIsNew' },
  { id: 6, name: 'Conoce a los creadores', link: '#meetVidariosOwners' },
];

export const vidariosDataList = [
  {
    id: 1,
    name: 'petaca',
    Description: 'este vidario',
    img: '/petaca-removebg.png',
  },
  {
    id: 2,
    name: 'Letras',
    Description: 'este vidario',
    img: '/letras-removebg.png',
  },
  {
    id: 3,
    name: 'Bonsai Ligustro',
    Description: 'este vidario',
    img: 'bonsai.png',
  },
  {
    id: 4,
    name: 'Árbol Boj',
    Description: 'este vidario',
    img: '/arbol-boj-no-background.png',
  },
  // {
  //   id: 5,
  //   name: 'Cilindros',
  //   Description: 'este vidario',
  //   img: 'cilindros.jpeg',
  // },
  {
    id: 6,
    name: 'Petacas',
    Description: 'este vidario',
    img: '/petaca-removebg.png',
  },

  {
    id: 8,
    name: 'Salto Ángel',
    Description: 'este vidario',
    img: '/salto-angel-removebg.png',
  },
  {
    id: 9,
    name: 'Avatar',
    Description: 'este vidario',
    img: '/avatar-removebg.png',
  },

  {
    id: 11,
    name: 'Copa',
    Description: 'este vidario',
    img: '/copa-removebg.png',
  },
  {
    id: 12,
    name: 'Canaima',
    Description: 'este vidario',
    img: '/canaima-removebg.png',
  },
  {
    id: 13,
    name: 'mini',
    Description: 'este vidario',
    img: '/copa-removebg.png',
  },
  {
    id: 14,
    name: 'Volcano',
    Description: 'Medidas: ',
    img: '/volcano-removebg.png',
  },
];
