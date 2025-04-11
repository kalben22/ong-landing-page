import { Heart, Users, Target, Sparkles, BarChart, Globe } from "lucide-react"
import type { HistoireSection, TeamMember, Value, Action, ContactInfo } from "@/types"

// Données de l'histoire de l'association
export const HISTOIRE_SECTIONS: HistoireSection[] = [
  {
    id: 1,
    title: "Nos débuts",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
      "Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
    ],
    image: "/images/histoire/debut.jpg",
    imageAlt: "Les débuts de notre ONG",
  },
  {
    id: 2,
    title: "Notre évolution",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
      "Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
    ],
    image: "/images/histoire/evolution.jpg",
    imageAlt: "L'évolution de notre ONG",
  },
  {
    id: 3,
    title: "Aujourd'hui",
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    ],
    image: "/images/histoire/aujourdhui.jpg",
    imageAlt: "Notre ONG aujourd'hui",
  },
]

// Données des membres de l'équipe - Ajout de membres supplémentaires pour démontrer le carrousel
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Nom Prénom",
    role: "Fonction",
    image: "/images/team/member1.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 2,
    name: "Nom Prénom",
    role: "Fonction",
    image: "/images/team/member2.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 3,
    name: "Nom Prénom",
    role: "Fonction",
    image: "/images/team/member3.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 4,
    name: "Nom Prénom",
    role: "Fonction",
    image: "/images/team/member1.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 5,
    name: "Nom Prénom",
    role: "Fonction",
    image: "/images/team/member2.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
]

// Données des valeurs de l'association
export const VALUES: Value[] = [
  {
    id: 1,
    title: "Compassion",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Heart className="h-6 w-6 text-moonlight" />,
  },
  {
    id: 2,
    title: "Communauté",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Users className="h-6 w-6 text-moonlight" />,
  },
  {
    id: 3,
    title: "Impact",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: <Target className="h-6 w-6 text-moonlight" />,
  },
]

// Données des actions de l'association - Ajout d'actions supplémentaires pour démontrer la pagination
export const ACTIONS: Action[] = [
  {
    id: 1,
    title: "Action 1",
    description: "Description de l'action et de son impact sur la communauté et les bénéficiaires.",
    icon: <Sparkles className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-1",
  },
  {
    id: 2,
    title: "Action 2",
    description: "Description de l'action et de son impact sur la communauté et les bénéficiaires.",
    icon: <BarChart className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-2",
  },
  {
    id: 3,
    title: "Action 3",
    description: "Description de l'action et de son impact sur la communauté et les bénéficiaires.",
    icon: <Globe className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-3",
  },
  {
    id: 4,
    title: "Action 4",
    description: "Description de l'action et de son impact sur la communauté et les bénéficiaires.",
    icon: <Sparkles className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-4",
  },
  {
    id: 5,
    title: "Action 5",
    description: "Description de l'action et de son impact sur la communauté et les bénéficiaires.",
    icon: <BarChart className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-5",
  },
]

// Données de contact
export const CONTACT_INFO: ContactInfo = {
  phone: "+33 1 23 45 67 89",
  email: "contact@association.org",
  address: "123 Rue de l'ONG, 75000 Paris",
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/ong" },
    { platform: "facebook", url: "https://facebook.com/ong" },
    { platform: "linkedin", url: "https://linkedin.com/company/ong" },
  ],
}

// Navigation
export const NAV_ITEMS = [
  { id: "histoire", label: "Notre Histoire" },
  { id: "equipe", label: "Notre Équipe" },
  { id: "mission", label: "Notre Mission" },
  { id: "actions", label: "Nos Actions" },
  { id: "contact", label: "Nous Rejoindre" },
]
