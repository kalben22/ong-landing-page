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
    image: "/images/histoire/aujourdhui.jpg",
    title: "Ensemble, créons un impact durable",
    subtitle: "Nous sommes dédiés à faire une différence dans notre communauté.",
  },
  {
    id: 2,
    image: "/images/histoire/debut.jpg",
    title: "Soutenez nos actions",
    subtitle: "Chaque contribution compte pour construire un avenir meilleur.",
  },
  {
    id: 3,
    image: "/images/histoire/evolution.jpg",
    title: "Rejoignez notre communauté",
    subtitle: "Ensemble, nous pouvons accomplir de grandes choses.",
  },
  {
    id: 4,
    image: "/images/histoire/debut.jpg",
    title: "Soutenez nos actions",
    subtitle: "Chaque contribution compte pour construire un avenir meilleur.",
  },
  {
    id: 5,
    image: "/images/histoire/evolution.jpg",
    title: "Rejoignez notre communauté",
    subtitle: "Ensemble, nous pouvons accomplir de grandes choses.",
  },
]

// Données des bénéficiaires
export const BENEFICIAIRES: Beneficiaire[] = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Bénéficiaire du programme d'éducation",
    image: "/images/beneficiaires/Image1.jpg",
    testimonial:
      "Grâce à l'ONG, j'ai pu terminer mes études et trouver un emploi stable. Ici il s'agit d'un texte.",
  },
  {
    id: 2,
    name: "Jean Mbeki",
    role: "Agriculteur local",
    image: "/images/beneficiaires/Image2.jpg",
    testimonial:
      "Les formations agricoles m'ont permis de doubler ma production et de mieux nourrir ma famille. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Fatou Sow",
    role: "Mère de famille",
    image: "/images/beneficiaires/Image1.jpg",
    testimonial:
      "Le centre de santé dans notre village a sauvé la vie de mon enfant. Avant, nous devions marcher 15 km pour consulter un médecin.",
  },
  {
    id: 4,
    name: "Ibrahim Koné",
    role: "Entrepreneur local",
    image: "/images/beneficiaires/Image3.jpg",
    testimonial:
      "Le microcrédit m'a permis de lancer mon entreprise et d'employer cinq personnes de ma communauté. Nous fabriquons maintenant des produits vendus dans tout le pays.",
  },
  {
    id: 5,
    name: "Aïcha Diop",
    role: "Artisane",
    image: "/images/beneficiaires/Image2.jpg",
    testimonial:
      "La coopérative féminine a changé ma vie et celle de nombreuses femmes de mon village. Nous sommes maintenant indépendantes financièrement.",
  },
  {
    id: 6,
    name: "Thomas Ndiaye",
    role: "Étudiant boursier",
    image: "/images/beneficiaires/Image1.jpg",
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
      " Je vais commencer l'histoire par dire ceci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
      "Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
    ],
    image: "/images/histoire/debut.jpg",
    imageAlt: "Les débuts de notre ONG",
  },
  {
    id: 2,
    title: "Notre évolution",
    content: [
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
      "Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl.",
    ],
    image: "/images/histoire/evolution.jpg",
    imageAlt: "L'évolution de notre ONG",
  },
  {
    id: 3,
    title: "Aujourd'hui",
    content: [
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.",
    ],
    image: "/images/histoire/aujourdhui.jpg",
    imageAlt: "Notre ONG aujourd'hui",
  },
]

// Données des membres de l'équipe - Ajout de membres supplémentaires pour démontrer le carrousel
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Jean Marie",
    role: "CEO",
    image: "/images/team/member1.jpg",
    bio: "Tous ce que je veux. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 2,
    name: "Elisé MONVOY",
    role: "CTO",
    image: "/images/team/member3.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 3,
    name: "Charles Dupont",
    role: "Directeur des opérations",
    image: "/images/team/member2.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 4,
    name: "Marie Claire",
    role: "Responsable des partenariats",
    image: "/images/team/member2.jpg",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia.",
  },
  {
    id: 5,
    name: "Ibrahim Ndiaye",
    role: "Responsable de la communication",
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
    description: " Description de l'action et de son impact sur la communauté et les bénéficiaires.",
    icon: <Sparkles className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-1",
  },
  {
    id: 2,
    title: "Action 2",
    description: " Description de l'action et de son impact sur la communauté et les bénéficiaires.",
    icon: <BarChart className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-2",
  },
  {
    id: 3,
    title: "Action 3",
    description: " Description de l'action et de son impact sur la communauté et les bénéficiaires.",
    icon: <Globe className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-3",
  },
  {
    id: 4,
    title: "Action 4",
    description: " Description de l'action et de son impact sur la communauté et les bénéficiaires.",
    icon: <Sparkles className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-4",
  },
  {
    id: 5,
    title: "Action 5",
    description: " Description de l'action et de son impact sur la communauté et les bénéficiaires.",
    icon: <BarChart className="h-6 w-6 text-moonlight" />,
    link: "#en-savoir-plus-5",
  },
]

// Données détaillées des actions pour les modales
export const ACTIONS_DETAILS: ActionDetail[] = [
  {
    id: 1,
    title: "Action 1: Soutien aux communautés locales",
    description: [
      "Notre programme de soutien aux communautés locales vise à améliorer les conditions de vie des populations vulnérables dans les zones rurales. Nous travaillons en étroite collaboration avec les leaders locaux pour identifier les besoins les plus urgents et mettre en place des solutions durables.",
      "Depuis le lancement de ce programme en 2018, nous avons pu aider plus de 1500 familles à travers 12 villages. Nos interventions se concentrent sur l'accès à l'eau potable, l'éducation des enfants et le développement de projets générateurs de revenus.",
      "Grâce à la générosité de nos donateurs et à l'engagement de nos bénévoles, nous continuons d'étendre notre impact et d'améliorer la vie de nombreuses personnes chaque année.",
    ],
    icon: <Sparkles className="h-6 w-6 text-moonlight" />,
    coverImage: "/images/team/member1.jpg",
    gallery: [
      { url: "/images/team/member1.jpg", alt: "Distribution d'eau potable" },
      { url: "/images/team/member1.jpg", alt: "École rénovée" },
      { url: "/images/team/member1.jpg", alt: "Formation agricole" },
      { url: "/images/team/member1.jpg", alt: "Construction d'un puits" },
      { url: "/images/team/member1.jpg", alt: "Réunion communautaire" },
      { url: "/images/team/member1.jpg", alt: "Jardin communautaire" },
    ],
    stats: [
      { value: "1500+", label: "Familles aidées" },
      { value: "12", label: "Villages" },
      { value: "25", label: "Puits construits" },
      { value: "4", label: "Écoles rénovées" },
      { value: "85%", label: "Taux de satisfaction" },
      { value: "300+", label: "Bénévoles impliqués" },
    ],
    testimonials: [
      {
        quote:
          "Les méthodes pédagogiques que j'ai apprises lors des formations ont transformé ma façon d'enseigner. Mes élèves sont plus engagés et apprennent mieux.",
        name: "Sophie Kama",
        role: "Enseignante",
        avatar: "/images/team/member1.jpg",
      },
      {
        quote:
          "Grâce à la bourse d'études, j'ai pu poursuivre mes études secondaires et je rêve maintenant de devenir médecin pour aider ma communauté.",
        name: "Thomas Ndiaye",
        role: "Élève boursier",
        avatar: "/images/team/member1.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Action 2: Programme d'éducation",
    description: [
      "Notre programme d'éducation vise à garantir que tous les enfants, quelles que soient leurs origines socio-économiques, aient accès à une éducation de qualité. Nous croyons fermement que l'éducation est la clé pour briser le cycle de la pauvreté et permettre aux jeunes de construire un avenir meilleur.",
      "Ce programme comprend la rénovation d'écoles, la formation des enseignants, la distribution de fournitures scolaires et la mise en place de bourses d'études pour les élèves les plus méritants. Nous organisons également des activités parascolaires pour développer la créativité et les compétences sociales des enfants.",
      "En collaboration avec les ministères de l'éducation locaux et d'autres ONG, nous travaillons à améliorer les programmes scolaires et à promouvoir des méthodes d'enseignement innovantes adaptées aux besoins des communautés.",
    ],
    icon: <BarChart className="h-6 w-6 text-moonlight" />,
    coverImage: "/images/team/member1.jpg",
    gallery: [
      { url: "/placeholder.svg?height=200&width=200&text=Classe+rénovée", alt: "Classe rénovée" },
      {
        url: "/placeholder.svg?height=200&width=200&text=Distribution+de+fournitures",
        alt: "Distribution de fournitures scolaires",
      },
      { url: "/placeholder.svg?height=200&width=200&text=Formation+des+enseignants", alt: "Formation des enseignants" },
      { url: "/placeholder.svg?height=200&width=200&text=Activités+parascolaires", alt: "Activités parascolaires" },
      { url: "/placeholder.svg?height=200&width=200&text=Remise+de+diplômes", alt: "Remise de diplômes" },
      { url: "/placeholder.svg?height=200&width=200&text=Bibliothèque", alt: "Bibliothèque communautaire" },
    ],
    stats: [
      { value: "5000+", label: "Élèves soutenus" },
      { value: "15", label: "Écoles partenaires" },
      { value: "120", label: "Enseignants formés" },
      { value: "98%", label: "Taux de réussite" },
      { value: "250", label: "Bourses attribuées" },
      { value: "8", label: "Bibliothèques créées" },
    ],
  },
  {
    id: 3,
    title: "Action 3: Protection de l'environnement",
    description: [
      "Notre programme de protection de l'environnement vise à préserver les écosystèmes locaux tout en sensibilisant les communautés à l'importance de la durabilité environnementale. Face aux défis du changement climatique, nous croyons qu'il est essentiel d'agir localement pour avoir un impact global.",
      "Nos initiatives comprennent des campagnes de reboisement, la promotion de pratiques agricoles durables, la gestion des déchets et la protection des ressources en eau. Nous travaillons également à développer des sources d'énergie renouvelable adaptées aux besoins des communautés rurales.",
      "En impliquant activement les jeunes dans nos projets environnementaux, nous cherchons à créer une nouvelle génération de défenseurs de l'environnement qui pourront continuer ce travail essentiel dans le futur.",
    ],
    icon: <Globe className="h-6 w-6 text-moonlight" />,
    coverImage: "/placeholder.svg?height=400&width=800&text=Action+3:+Protection+de+l'environnement",
    gallery: [
      { url: "/placeholder.svg?height=200&width=200&text=Reboisement", alt: "Campagne de reboisement" },
      { url: "/placeholder.svg?height=200&width=200&text=Panneaux+solaires", alt: "Installation de panneaux solaires" },
      {
        url: "/placeholder.svg?height=200&width=200&text=Gestion+des+déchets",
        alt: "Programme de gestion des déchets",
      },
      {
        url: "/placeholder.svg?height=200&width=200&text=Agriculture+durable",
        alt: "Formation en agriculture durable",
      },
      { url: "/placeholder.svg?height=200&width=200&text=Protection+des+sources", alt: "Protection des sources d'eau" },
      { url: "/placeholder.svg?height=200&width=200&text=Sensibilisation", alt: "Atelier de sensibilisation" },
    ],
    stats: [
      { value: "50 000", label: "Arbres plantés" },
      { value: "20", label: "Sources d'eau protégées" },
      { value: "35", label: "Systèmes solaires installés" },
      { value: "3 000", label: "Agriculteurs formés" },
      { value: "12", label: "Centres de recyclage" },
      { value: "85%", label: "Réduction des déchets" },
    ],
  },
  {
    id: 4,
    title: "Action 4: Santé communautaire",
    description: [
      "Notre programme de santé communautaire vise à améliorer l'accès aux soins de santé de base pour les populations les plus vulnérables. Nous croyons que la santé est un droit fondamental et travaillons à éliminer les obstacles qui empêchent certaines communautés d'accéder à des services de santé de qualité.",
      "Nos initiatives comprennent la formation d'agents de santé communautaire, l'organisation de campagnes de vaccination, la distribution de moustiquaires imprégnées, la sensibilisation à l'hygiène et la construction ou rénovation de centres de santé dans les zones reculées.",
      "Nous accordons une attention particulière à la santé maternelle et infantile, ainsi qu'à la prévention des maladies transmissibles comme le paludisme, la tuberculose et le VIH/SIDA.",
    ],
    icon: <Sparkles className="h-6 w-6 text-moonlight" />,
    coverImage: "/placeholder.svg?height=400&width=800&text=Action+4:+Santé+communautaire",
    gallery: [
      { url: "/placeholder.svg?height=200&width=200&text=Centre+de+santé", alt: "Centre de santé rénové" },
      { url: "/placeholder.svg?height=200&width=200&text=Vaccination", alt: "Campagne de vaccination" },
      { url: "/placeholder.svg?height=200&width=200&text=Formation+sanitaire", alt: "Formation d'agents de santé" },
      {
        url: "/placeholder.svg?height=200&width=200&text=Distribution+moustiquaires",
        alt: "Distribution de moustiquaires",
      },
      { url: "/placeholder.svg?height=200&width=200&text=Sensibilisation+hygiène", alt: "Sensibilisation à l'hygiène" },
      { url: "/placeholder.svg?height=200&width=200&text=Soins+prénataux", alt: "Soins prénataux" },
    ],
    stats: [
      { value: "25 000", label: "Personnes soignées" },
      { value: "8", label: "Centres de santé" },
      { value: "150", label: "Agents de santé formés" },
      { value: "15 000", label: "Moustiquaires distribuées" },
      { value: "95%", label: "Taux de vaccination" },
      { value: "-60%", label: "Réduction du paludisme" },
    ],
  },
  {
    id: 5,
    title: "Action 5: Autonomisation des femmes",
    description: [
      "Notre programme d'autonomisation des femmes vise à promouvoir l'égalité des genres et à renforcer le pouvoir économique et social des femmes dans les communautés où nous intervenons. Nous croyons que lorsque les femmes sont autonomes, c'est toute la communauté qui en bénéficie.",
      "Nos initiatives comprennent la formation professionnelle, l'alphabétisation, le microcrédit, le soutien aux coopératives féminines et la sensibilisation aux droits des femmes. Nous travaillons également à promouvoir la participation des femmes dans les instances de décision locales.",
      "En collaboration avec des partenaires locaux et internationaux, nous luttons contre les pratiques discriminatoires et les violences basées sur le genre, tout en valorisant le rôle essentiel des femmes dans le développement communautaire.",
    ],
    icon: <BarChart className="h-6 w-6 text-moonlight" />,
    coverImage: "/placeholder.svg?height=400&width=800&text=Action+5:+Autonomisation+des+femmes",
    gallery: [
      { url: "/placeholder.svg?height=200&width=200&text=Formation+professionnelle", alt: "Formation professionnelle" },
      { url: "/placeholder.svg?height=200&width=200&text=Coopérative+féminine", alt: "Coopérative féminine" },
      { url: "/placeholder.svg?height=200&width=200&text=Cours+d'alphabétisation", alt: "Cours d'alphabétisation" },
      { url: "/placeholder.svg?height=200&width=200&text=Microcrédit", alt: "Programme de microcrédit" },
      { url: "/placeholder.svg?height=200&width=200&text=Sensibilisation", alt: "Sensibilisation aux droits" },
      { url: "/placeholder.svg?height=200&width=200&text=Leadership+féminin", alt: "Formation au leadership" },
    ],
    stats: [
      { value: "3 500", label: "Femmes formées" },
      { value: "45", label: "Coopératives soutenues" },
      { value: "1 200", label: "Microcrédits accordés" },
      { value: "85%", label: "Taux de remboursement" },
      { value: "30%", label: "Augmentation des revenus" },
      { value: "250", label: "Entreprises créées" },
    ],
  },
  {
    id: 6,
    title: "Action 6: Autonomisation des femmes",
    description: [
      "Notre programme d'autonomisation des femmes vise à promouvoir l'égalité des genres et à renforcer le pouvoir économique et social des femmes dans les communautés où nous intervenons. Nous croyons que lorsque les femmes sont autonomes, c'est toute la communauté qui en bénéficie.",
      "Nos initiatives comprennent la formation professionnelle, l'alphabétisation, le microcrédit, le soutien aux coopératives féminines et la sensibilisation aux droits des femmes. Nous travaillons également à promouvoir la participation des femmes dans les instances de décision locales.",
      "En collaboration avec des partenaires locaux et internationaux, nous luttons contre les pratiques discriminatoires et les violences basées sur le genre, tout en valorisant le rôle essentiel des femmes dans le développement communautaire.",
    ],
    icon: <BarChart className="h-6 w-6 text-moonlight" />,
    coverImage: "/placeholder.svg?height=400&width=800&text=Action+5:+Autonomisation+des+femmes",
    gallery: [
      { url: "/placeholder.svg?height=200&width=200&text=Formation+professionnelle", alt: "Formation professionnelle" },
      { url: "/placeholder.svg?height=200&width=200&text=Coopérative+féminine", alt: "Coopérative féminine" },
      { url: "/placeholder.svg?height=200&width=200&text=Cours+d'alphabétisation", alt: "Cours d'alphabétisation" },
      { url: "/placeholder.svg?height=200&width=200&text=Microcrédit", alt: "Programme de microcrédit" },
      { url: "/placeholder.svg?height=200&width=200&text=Sensibilisation", alt: "Sensibilisation aux droits" },
      { url: "/placeholder.svg?height=200&width=200&text=Leadership+féminin", alt: "Formation au leadership" },
    ],
    stats: [
      { value: "3 500", label: "Femmes formées" },
      { value: "45", label: "Coopératives soutenues" },
      { value: "1 200", label: "Microcrédits accordés" },
      { value: "85%", label: "Taux de remboursement" },
      { value: "30%", label: "Augmentation des revenus" },
      { value: "250", label: "Entreprises créées" },
    ],
  },
  {
    id: 7,
    title: "Action 7: Sécurité alimentaire",
    description: [
      "Notre programme de sécurité alimentaire vise à garantir que toutes les familles aient accès à une alimentation suffisante, nutritive et culturellement adaptée. Face aux défis du changement climatique et de la croissance démographique, nous travaillons à renforcer la résilience des systèmes alimentaires locaux.",
      "Nos initiatives comprennent la promotion de l'agriculture durable, la diversification des cultures, l'amélioration des techniques de stockage et de conservation des aliments, et le soutien aux petits producteurs. Nous accordons une attention particulière à l'agriculture familiale et aux pratiques agroécologiques.",
      "En collaboration avec les communautés locales et les autorités, nous développons également des systèmes d'alerte précoce pour anticiper les crises alimentaires et mettre en place des réponses adaptées.",
    ],
    icon: <Sparkles className="h-6 w-6 text-moonlight" />,
    coverImage: "/placeholder.svg?height=400&width=800&text=Action+7:+Sécurité+alimentaire",
    gallery: [
      { url: "/placeholder.svg?height=200&width=200&text=Jardins+communautaires", alt: "Jardins communautaires" },
      { url: "/placeholder.svg?height=200&width=200&text=Formation+agricole", alt: "Formation agricole" },
      { url: "/placeholder.svg?height=200&width=200&text=Banque+de+semences", alt: "Banque de semences" },
      { url: "/placeholder.svg?height=200&width=200&text=Stockage+céréales", alt: "Stockage de céréales" },
      { url: "/placeholder.svg?height=200&width=200&text=Marché+local", alt: "Marché local" },
      { url: "/placeholder.svg?height=200&width=200&text=Irrigation", alt: "Système d'irrigation" },
    ],
    stats: [
      { value: "5 000", label: "Agriculteurs formés" },
      { value: "120", label: "Jardins communautaires" },
      { value: "35", label: "Banques de semences" },
      { value: "40%", label: "Augmentation des rendements" },
      { value: "15", label: "Coopératives soutenues" },
      { value: "25 000", label: "Personnes nourries" },
    ],
    testimonials: [
      {
        quote:
          "Grâce aux nouvelles techniques agricoles, ma production a doublé. Je peux maintenant nourrir ma famille toute l'année et vendre le surplus au marché.",
        name: "Ousmane Diallo",
        role: "Agriculteur",
        avatar: "/placeholder.svg?height=40&width=40&text=OD",
      },
      {
        quote:
          "Le jardin communautaire a transformé notre village. Nous avons maintenant accès à des légumes frais et variés, ce qui a amélioré la santé de nos enfants.",
        name: "Fatoumata Bah",
        role: "Présidente du groupement féminin",
        avatar: "/placeholder.svg?height=40&width=40&text=FB",
      },
    ],
  },
  {
    id: 8,
    title: "Action 8: Développement économique local",
    description: [
      "Notre programme de développement économique local vise à stimuler les économies locales et à créer des opportunités d'emploi et de revenus durables. Nous croyons que le développement économique est un levier essentiel pour réduire la pauvreté et améliorer les conditions de vie des communautés.",
      "Nos initiatives comprennent le soutien aux petites entreprises, la formation professionnelle, l'accès au microcrédit, le développement de chaînes de valeur locales et la promotion de l'entrepreneuriat, en particulier chez les jeunes et les femmes.",
      "En favorisant l'économie locale et circulaire, nous contribuons à réduire l'exode rural et à créer des communautés plus résilientes et autonomes.",
    ],
    icon: <BarChart className="h-6 w-6 text-moonlight" />,
    coverImage: "/placeholder.svg?height=400&width=800&text=Action+8:+Développement+économique+local",
    gallery: [
      { url: "/placeholder.svg?height=200&width=200&text=Formation+professionnelle", alt: "Formation professionnelle" },
      { url: "/placeholder.svg?height=200&width=200&text=Petite+entreprise", alt: "Petite entreprise locale" },
      { url: "/placeholder.svg?height=200&width=200&text=Marché+artisanal", alt: "Marché artisanal" },
      { url: "/placeholder.svg?height=200&width=200&text=Atelier+couture", alt: "Atelier de couture" },
      { url: "/placeholder.svg?height=200&width=200&text=Microcrédit", alt: "Distribution de microcrédit" },
      { url: "/placeholder.svg?height=200&width=200&text=Jeunes+entrepreneurs", alt: "Jeunes entrepreneurs" },
    ],
    stats: [
      { value: "850", label: "Entreprises créées" },
      { value: "3 500", label: "Emplois générés" },
      { value: "2 000", label: "Microcrédits accordés" },
      { value: "75%", label: "Taux de remboursement" },
      { value: "60%", label: "Entreprises dirigées par des femmes" },
      { value: "45%", label: "Augmentation des revenus" },
    ],
    testimonials: [
      {
        quote:
          "Le microcrédit m'a permis de lancer mon atelier de menuiserie. Aujourd'hui, j'emploie trois jeunes du village et nous recevons des commandes de toute la région.",
        name: "Mamadou Camara",
        role: "Menuisier",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
      },
      {
        quote:
          "La formation en gestion d'entreprise a changé ma vision des affaires. J'ai pu développer mon commerce et diversifier mes activités. Mes revenus ont plus que doublé en deux ans.",
        name: "Kadiatou Bamba",
        role: "Commerçante",
        avatar: "/placeholder.svg?height=40&width=40&text=KB",
      },
    ],
  },
  {
    id: 9,
    title: "Action 9: Énergies renouvelables",
    description: [
      "Notre programme d'énergies renouvelables vise à promouvoir l'accès à une énergie propre, fiable et abordable pour tous. Dans un contexte de changement climatique et de raréfaction des ressources fossiles, nous croyons que les énergies renouvelables représentent une solution durable pour les communautés rurales et isolées.",
      "Nos initiatives comprennent l'installation de panneaux solaires, la construction de micro-barrages hydroélectriques, la promotion de foyers améliorés et la formation de techniciens locaux pour l'entretien et la maintenance des équipements.",
      "En plus de réduire l'empreinte carbone des communautés, ces projets permettent d'améliorer la qualité de vie, de faciliter l'accès à l'éducation et à la santé, et de stimuler le développement économique local.",
    ],
    icon: <Globe className="h-6 w-6 text-moonlight" />,
    coverImage: "/placeholder.svg?height=400&width=800&text=Action+9:+Énergies+renouvelables",
    gallery: [
      { url: "/placeholder.svg?height=200&width=200&text=Panneaux+solaires", alt: "Installation de panneaux solaires" },
      { url: "/placeholder.svg?height=200&width=200&text=Micro-barrage", alt: "Micro-barrage hydroélectrique" },
      { url: "/placeholder.svg?height=200&width=200&text=Foyers+améliorés", alt: "Foyers améliorés" },
      { url: "/placeholder.svg?height=200&width=200&text=Formation+techniciens", alt: "Formation de techniciens" },
      { url: "/placeholder.svg?height=200&width=200&text=Éclairage+école", alt: "Éclairage d'une école" },
      {
        url: "/placeholder.svg?height=200&width=200&text=Centre+santé+solaire",
        alt: "Centre de santé alimenté par énergie solaire",
      },
    ],
    stats: [
      { value: "120", label: "Villages électrifiés" },
      { value: "5 000", label: "Foyers équipés" },
      { value: "85", label: "Écoles et centres de santé" },
      { value: "150", label: "Techniciens formés" },
      { value: "70%", label: "Réduction de la déforestation" },
      { value: "40 000", label: "Tonnes de CO2 évitées" },
    ],
    testimonials: [
      {
        quote:
          "L'électricité solaire a transformé notre centre de santé. Nous pouvons maintenant conserver les vaccins, utiliser des équipements médicaux et accueillir les patients même la nuit.",
        name: "Dr. Salimata Koné",
        role: "Médecin chef",
        avatar: "/placeholder.svg?height=40&width=40&text=SK",
      },
      {
        quote:
          "Grâce aux panneaux solaires, mes enfants peuvent étudier le soir. Leurs résultats scolaires se sont nettement améliorés. De plus, je peux recharger mon téléphone et rester en contact avec ma famille.",
        name: "Bakary Sangaré",
        role: "Père de famille",
        avatar: "/placeholder.svg?height=40&width=40&text=BS",
      },
    ],
  },
]

// Données de contact
export const CONTACT_INFO: ContactInfo = {
  phone: "+229 01 xx xx xx xx",
  email: "contact@association.org",
  address: "123 Rue, 75000 Porto-Novo, Bénin",
  socialLinks: [
    { platform: "instagram", url: "https://instagram.com/ong" },
    { platform: "facebook", url: "https://facebook.com/ong" },
    { platform: "linkedin", url: "https://linkedin.com/company/ong" },
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
