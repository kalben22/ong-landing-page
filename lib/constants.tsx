import { Heart, Users, Target, Sparkles, BarChart, Globe } from "lucide-react"
import type {
  HistoireSection,
  TeamMember,
  Value,
  Action,
  ActionDetail,
  ContactInfo,
  HeroSlide,
  Beneficiaire,
} from "@/types"

// Données des slides du hero
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: "/images/Fonds/logo2.jpg",
    title: "Ensemble, créons un impact durable",
    subtitle: "Nous sommes dédiés à faire une différence dans notre communauté.",
  },
  {
    id: 2,
    image: "/images/Fonds/logo2.jpg",
    title: "Soutenez nos actions",
    subtitle: "Chaque contribution compte pour construire un avenir meilleur.",
  },
]

// Données des bénéficiaires
export const BENEFICIAIRES: Beneficiaire[] = [
  {
    id: 1,
    name: "FATCHEHOUN Alice",
    role: "Commerçante",
    image: "/images/beneficiaires/Image1.png",
    testimonial:
      "Avant c’était difficile de lire et d’écrire même mon prénom maintenant, j’arrive à écrire tout mon nom/prénom et je les lis ensuite. J’écris aussi moi même les numéros de téléphone mais j’ai encore des difficultés à bien parler le français.",
  },
  {
    id: 2,
    name: "ZANTCHIO Beatrice",
    role: "Commerçante",
    image: "/images/beneficiaires/Image2.png",
    testimonial:
      "Depuis que j’ai commencé, je parle mieux français maintenant. J’écris et je lis et je comprends mieux..",
  },
  {
    id: 3,
    name: "HOSSOU Colette",
    role: "Couturière",
    image: "/images/beneficiaires/Image3.png",
    testimonial:
      "Depuis que j’ai commencé, je parle et comprend mieux le français maintenant. J’écris et je lis, ce qui a changé ma vie de famille et mon travail.",
  },
  {
    id: 4,
    name: "Prielle, 15 ans en  5ème ",
    role: "Elève",
    image: "/images/beneficiaires/Image4.png",
    testimonial:
      "“Ces cours m'ont beaucoup apporté. J'ai  appris comment utiliser l'ordinateur, différencier le clavier anglais du français, les differentes parties de l'ordinateur. J'ai appris Excel et word.",
  },
  {
    id: 5,
    name: " Haniel, 14ans en 4ème",
    role: "Elève",
    image: "/images/beneficiaires/Image5.png",
    testimonial:
      "Je remercie le groupe floka pour cette formation qui pourra m'aider dans le cadre de la comptabilité ou en entreprise.",
  },
]

// Données de l'histoire de l'association
export const HISTOIRE_SECTIONS: HistoireSection[] = [
  {
    id: 1,
    title: "Nos débuts",
    content: [
      "L’aventure de l’association Floka trouve ses racines dans l’engagement d’un grand-père visionnaire, fondateur de la première école primaire et du premier collège privés au Bénin : Le cours Floka. ",
      "Ce lieu d’apprentissage, porteur d’espoir et de savoir, a profondément marqué les esprits et a naturellement inspiré le nom de notre association. Animés par ce même désir de transmission et de partage, nous, les membres fondateurs, avons souhaité prolonger cet héritage.",
      "Face aux inégalités d’accès à l’éducation et à l’arrivée des nouvelles technologies, nous avons décidé de structurer notre engagement en créant l’association Floka, dédiée à la lutte contre l’illettrisme, l’illectronisme et l’absence d’espace de partage entre générations. ",
    ],
    image: "/images/histoire/debut.jpg",
    imageAlt: "Nos débuts",
    images: [ 
      "/images/histoire/debuts/Image3.png",
      "/images/histoire/debuts/Image4.png",
      "/images/histoire/debuts/Image5.png",
      "/images/histoire/debuts/Image6.png",
      "/images/histoire/debuts/Image7.png",
    ],
  },
  {
    id: 2,
    title: "Notre évolution",
    content: [
      "Depuis sa création en 2022, l'association Floka a progressivement élargi son champ d'action. Elle a d'abord mis en place des cours d'alphabétisation destinés aux personnes en difficulté avec la lecture et l'écriture.",
      "En 2023, un programme de soutien scolaire pendant les vacances a été intégré afin d'accompagner les enfants dans leur parcours éducatif.",
    ],
    image: "/images/histoire/evolution/Image2.png",
    imageAlt: "L'évolution de notre ONG",
  },
  {
    id: 3,
    title: "Aujourd'hui",
    content: [
      "Et plus récemment, en 2024, des cours d'initiation à l'informatique ont été lancés, amorçant ainsi notre engagement contre l'illectronisme.",
      "Ces actions concrètes témoignent de notre volonté constante d'être utiles, accessibles et à l'écoute des besoins de notre communauté.",
    ],
    image: "/images/histoire/aujourdhui/Image1.png",
    imageAlt: "Notre ONG aujourd'hui",
  },
]

// Données des membres de l'équipe - Ajout de membres supplémentaires pour démontrer le carrousel
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Elvire WADOTCHEDOHOUN",
    role: "Fondatrice & Présidente",
    image: "/images/team/users1.jpg",
  },
  {
    id: 2,
    name: "Laetitia OWENDET",
    role: "Co-Fondatrice & SG",
    image: "/images/team/Leatitia.jpg",
  },
  {
    id: 3,
    name: "Ismene CLEDJO",
    role: "Co-Fondatrice & Treso",
    image: "/images/team/users.jpg",
  },
  {
    id: 4,
    name: "Gloria KADJA",
    role: "SGA",
    image: "/images/team/avatar_femme.png",
  },
  {
    id: 5,
    name: "Bricette LIEVIN",
    role: "Chargée des réseaux sociaux",
    image: "/images/team/avatar_femme.png",
  },
  {
    id: 6,
    name: "Sabin KADJA",
    role: "Coordinateur local",
    image: "/images/team/avatar_homme.png",
  },
]

// Données des missions de l'association
export const VALUES: Value[] = [
  {
    id: 1,
    title: "Transmission",
    description: "Transmettre savoirs et compétences pour un avenir meilleur.",
    icon: <Heart className="h-6 w-6 text-moonlight" />,
  },
  {
    id: 2,
    title: "Solidarité",
    description: "Agir ensemble pour un avenir meilleur.",
    icon: <Users className="h-6 w-6 text-moonlight" />,
  },
  {
    id: 3,
    title: "Connaissance",
    description: "Partager le savoir pour grandir ensemble.",
    icon: <Target className="h-6 w-6 text-moonlight" />,
  },
]

// Données des actions de l'association - Ajout d'actions supplémentaires pour démontrer la pagination
export const ACTIONS: Action[] = [
  {
    id: 1,
    title: "Cours d'alphabétisation",
    description: "Notre programme de cours d’alphabétisation s’adresse aux communautés locales de Ouidah, au Bénin. Il vise à améliorer les conditions de vie des populations vulnérables. À ce jour, il s’adresse principalement aux femmes, renforçant ainsi leur pouvoir économique et social. Nous bénéficions du soutien de la mairie de Ouidah, qui nous a permis d’obtenir une salle appartenant à la ville, moyennant une petite participation. Cet appui facilite la mise en œuvre de nos activités dans de bonnes conditions. Depuis le lancement de ce programme non lucratif en 2022, nous avons pu accompagner une vingtaine de femmes venant principalement de la ville de Ouidah. Nos interventions se concentrent sur des cours de français et de mathématiques de base. Grâce à la générosité de nos donateurs et à l’engagement de nos bénévoles, nous comptons étendre notre impact à d’autres villes si possible, afin d’améliorer la vie d’un plus grand nombre de femmes chaque année.",
    icon: <Sparkles className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-1",
  },
  {
    id: 2,
    title: "Cours d'informatique",
    description: "Programme d’initiation à l’informatique pour les jeunes au Bénin, visant à réduire la fracture numérique et renforcer l’autonomie, avec une vision à long terme d’inclusion des femmes.",
    icon: <BarChart className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-2",
  },
  {
    id: 3,
    title: "Soutien scolaire enfants",
    description: "Programme de soutien scolaire lancé en 2023 à Ouidah pour aider les enfants à renforcer leurs compétences pendant les vacances, quel que soit leur milieu social.",
    icon: <Globe className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-3",
  },
]

// Données détaillées des actions pour les modales
export const ACTIONS_DETAILS: ActionDetail[] = [
  {
    id: 1,
    title: "Cours d'alphabétisation",
    description: [
      "Notre programme de cours d’alphabétisation s’adresse aux communautés locales de Ouidah, au Bénin. Il vise à améliorer les conditions de vie des populations vulnérables.",
      "À ce jour, il s’adresse principalement aux femmes, renforçant ainsi leur pouvoir économique et social.",
      "Nous bénéficions du soutien de la mairie de Ouidah, qui nous a permis d’obtenir une salle appartenant à la ville, moyennant une petite participation. Cet appui facilite la mise en œuvre de nos activités dans de bonnes conditions.",
      "Depuis le lancement de ce programme non lucratif en 2022, nous avons pu accompagner une vingtaine de femmes venant principalement de la ville de Ouidah.",
      "Nos interventions se concentrent sur des cours de français et de mathématiques de base.",
      "Grâce à la générosité de nos donateurs et à l’engagement de nos bénévoles, nous comptons étendre notre impact à d’autres villes si possible, afin d’améliorer la vie d’un plus grand nombre de femmes chaque année.",
    ],
    icon: <Sparkles className="h-6 w-6 text-moonlight" />,
    coverImage: "/images/Actions/alphabetisation/Image18.jpeg",
    gallery: [
      { url: "/images/Actions/alphabetisation/Image16.jpeg", alt: "Etude des écritures" },
      { url: "/images/Actions/alphabetisation/image17.jpeg", alt: "Etude des écritures" },
      { url: "/images/Actions/alphabetisation/Image17.png", alt: "Etude des écritures" },
      { url: "/images/Actions/alphabetisation/Image18.jpeg", alt: "Etude des écritures" },
      { url: "/images/Actions/alphabetisation/Image19.jpeg", alt: "Etude des écritures" },
      { url: "/images/Actions/alphabetisation/Image20.jpeg", alt: "Formation" },
    ],
  },
  {
    id: 2,
    title: "Cours d'informatique",
    description: [
     "Notre programme de cours d’informatique vise à réduire la fracture numérique, à renforcer l’autonomie, renforcer le lien social et favoriser la formation au numérique du jeune public béninois.",
     "Les cours comprennent la prise en main de l’outil informatique, l’initiation aux logiciels de bureautique et à la gestion des réseaux sociaux.",
    "Nous souhaitons également à long terme, promouvoir la formation au numérique auprès des femmes afin d'accroître leur autonomie dans un monde en mutation.",
    ],
    icon: <BarChart className="h-6 w-6 text-moonlight" />,
    coverImage: "/images/Actions/informatique/image0.jpeg",
    gallery: [
      { url: "/images/Actions/informatique/image1.jpeg", alt: "Cours d'informatique" },
      { url: "/images/Actions/informatique/image4.png", alt: "Classe" },
      { url: "/images/Actions/informatique/image2.jpeg", alt: "Utilisation ordinateur" },  
      { url: "/images/Actions/informatique/image5.png", alt: "Apprentissage" },
      ],
  },
  {
    id: 3,
    title: "Soutien scolaire enfants",
    description: [
      "Notre programme de cours de soutien vise à garantir que tous les enfants, quelles que soient leurs origines socio-économiques, puisse renforcer pendant les vacances leur niveau scolaire.",
      "Nous croyons fermement que l'éducation est la clé pour construire un avenir meilleur.",
      "Depuis le lancement en 2023, nous avons pu soutenir une soixantaine d’enfants venant de plusieurs écoles primaires dans la commune de Ouidah, pendant les vacances scolaires.",
      "Nos actions se concentrent sur le renforcement des compétences.",
      "Grâce à la générosité de nos donateurs, à l'engagement de nos bénévoles, et la confiance des parents, nous continuons d’élargir notre impact.",
    ],
    icon: <Globe className="h-6 w-6 text-moonlight" />,
    coverImage: "/images/Actions/soutien_scolaire/Image23.png",
    gallery: [
      { url: "/images/Actions/soutien_scolaire/Image22.png", alt: "Campagne de reboisement"},
      {url: "/images/Actions/soutien_scolaire/Image23.png", alt: "Nettoyage de plage"},
    ],
  },
]

// Données de contact
export const CONTACT_INFO: ContactInfo = {
  phone: "+33 6 72 36 38 59 & +229 01 58 39 92 28 ",
  email: "bureau@fondationfloka.org",
  address: "Maison Copao, ancienne route inter-Etats, Zomai-Kpota, Ouidah, Bénin",
  socialLinks: [
    { platform: "instagram", url: "https://www.instagram.com/fondationfloka?igsh=NDNmbXg0Z25qcG52"},
    { platform: "facebook", url: "https://www.facebook.com/profile.php?id=100091882151621" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/fondation-floka-4178b9357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
  ],
}

// Navigation
export const NAV_ITEMS = [
  { id: "mission", label: "Notre Mission" },
  { id: "actions", label: "Nos Actions" },
  { id: "beneficiaires", label: "Nos Bénéficiaires" },
  { id: "histoire", label: "Notre Histoire" },
  { id: "equipe", label: "Notre Équipe" },
  { id: "contact", label: "Nous Rejoindre" },
]

//Sponsors and Partners
export const SPONSORS = [
  { id: "s1", name: "AFRIKEDUTECH", logo: "/images/sponsors/afrikedutech.png", url: "https://www.cquoi7boite.com/afrikedutech/" },
  { id: "s2", name: "AFRIKEDUTECH", logo: "/images/sponsors/afrikedutech.png", url: "https://www.cquoi7boite.com/afrikedutech/" },
  { id: "s3", name: "AFRIKEDUTECH", logo: "/images/sponsors/afrikedutech.png", url: "https://www.cquoi7boite.com/afrikedutech/" },
]

