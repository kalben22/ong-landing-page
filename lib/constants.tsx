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
    name: "Marie Dupont",
    role: "Bénéficiaire du programme d'éducation",
    image: "/images/beneficiaires/Image1.png",
    testimonial:
      "Grâce à l'ONG, j'ai pu terminer mes études et trouver un emploi stable. Ici il s'agit d'un texte.",
  },
  {
    id: 2,
    name: "Jean Mbeki",
    role: "Agriculteur local",
    image: "/images/beneficiaires/Image2.png",
    testimonial:
      "Les formations agricoles m'ont permis de doubler ma production et de mieux nourrir ma famille. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Fatou Sow",
    role: "Mère de famille",
    image: "/images/beneficiaires/Image3.png",
    testimonial:
      "Le centre de santé dans notre village a sauvé la vie de mon enfant. Avant, nous devions marcher 15 km pour consulter un médecin.",
  },
  {
    id: 4,
    name: "Ibrahim Koné",
    role: "Entrepreneur local",
    image: "/images/beneficiaires/Image4.png",
    testimonial:
      "Le microcrédit m'a permis de lancer mon entreprise et d'employer cinq personnes de ma communauté. Nous fabriquons maintenant des produits vendus dans tout le pays.",
  },
  {
    id: 5,
    name: "Aïcha Diop",
    role: "Artisane",
    image: "/images/beneficiaires/Image6.jpg",
    testimonial:
      "La coopérative féminine a changé ma vie et celle de nombreuses femmes de mon village. Nous sommes maintenant indépendantes financièrement.",
  },
  {
    id: 6,
    name: "Thomas Ndiaye",
    role: "Étudiant boursier",
    image: "/images/beneficiaires/Image1.png",
    testimonial:
      "La bourse d'études m'a permis de poursuivre mon rêve de devenir médecin. Je reviendrai exercer dans ma communauté pour aider ceux qui en ont besoin.",
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
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",},
  {
    id: 2,
    name: "Leatitia OWENDET",
    role: "Fondateur & SG",
    image: "/images/team/member3.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 3,
    name: "Ismene CLEDJO",
    role: "Fondateur & Treso",
    image: "/images/team/users.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 4,
    name: "Gloria KADJA",
    role: "SGA",
    image: "/images/team/member2.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 5,
    name: "Bricette",
    role: "Responsable RS",
    image: "/images/team/member1.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 6,
    name: "Akito Sato",
    role: "Financial Officer",
    image: "/images/team/member3.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
    {
    id: 7,
    name: "Serges Kofi",
    role: "Responsable des projets",
    image: "/images/team/member3.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
    {
    id: 8,
    name: "Koffi Kouadio",
    role: "Responsable des ressources humaines",
    image: "/images/team/member3.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
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
    coverImage: "/images/Actions/alphabetisation/Image18.png",
    gallery: [
      { url: "/images/Actions/alphabetisation/Image16.png", alt: "Etude des écritures" },
      { url: "/images/Actions/alphabetisation/Image17.png", alt: "Etude des écritures" },
      { url: "/images/Actions/alphabetisation/Image18.png", alt: "Etude des écritures" },
      { url: "/images/Actions/alphabetisation/Image18.png", alt: "Etude des écritures" },
      { url: "/images/Actions/alphabetisation/Image16.png", alt: "Formation" },
      { url: "/images/Actions/alphabetisation/Image17.png", alt: "Etude des écritures" },

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
    coverImage: "/images/Actions/informatique/Image19.png",
    gallery: [
      { url: "/images/Actions/informatique/Image19.png", alt: "Classe" },
      { url: "/images/Actions/informatique/Image20.png", alt: "Cours d'informatique" },
      { url: "/images/Actions/informatique/Image21.png", alt: "Utilisation de l'ordinateur" },
      { url: "/images/Actions/informatique/Image21.png", alt: "Apprentissage" },
      { url: "/images/Actions/informatique/Image19.png", alt: "Classe" },
      { url: "/images/Actions/informatique/Image20.png", alt: "Cours d'informatique" },
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
      { url: "/images/Actions/soutien_scolaire/Image22.png", alt: "Atelier de sensibilisation"},
      { url: "/images/Actions/soutien_scolaire/Image23.png", alt: "Atelier de sensibilisation"},
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
