// Types pour les données mockées
export interface Cafe {
  id: string;
  nom: string;
  adresse: string;
  description: string;
  note: number;
  distance: string;
  imageUrl: string;
  horaires: string;
  specialites: string[];
}

export interface MenuItem {
  id: string;
  nom: string;
  description: string;
  prix: number;
  imageUrl: string;
  categorie: string;
  populaire: boolean;
}

export interface Promotion {
  id: string;
  titre: string;
  description: string;
  code: string;
  reduction: string;
  validite: string;
  imageUrl: string;
}

export interface Commande {
  id: string;
  date: string;
  cafe: string;
  statut: 'En cours' | 'Terminée' | 'Annulée';
  items: {
    nom: string;
    quantite: number;
    prix: number;
  }[];
  total: number;
}

export const cafesProches: Cafe[] = [
  {
    id: '1',
    nom: 'Café des Artistes',
    adresse: '12 rue des Lilas, 75001 Paris',
    description: 'Un lieu chaleureux où l\'art et le café se rencontrent pour une expérience unique.',
    note: 4.7,
    distance: '350m',
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    horaires: '8h-20h',
    specialites: ['Café de spécialité', 'Pâtisseries maison', 'Brunch']
  },
  {
    id: '2',
    nom: 'L\'Express Café',
    adresse: '45 boulevard Haussmann, 75008 Paris',
    description: 'Parfait pour une pause rapide ou pour travailler dans une ambiance dynamique.',
    note: 4.2,
    distance: '500m',
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    horaires: '7h-21h',
    specialites: ['Café à emporter', 'Sandwiches', 'Wi-Fi haut débit']
  },
  {
    id: '3',
    nom: 'Le Petit Moulin',
    adresse: '23 rue du Faubourg, 75010 Paris',
    description: 'Un café authentique avec des grains torréfiés sur place et une ambiance cosy.',
    note: 4.9,
    distance: '800m',
    imageUrl: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    horaires: '9h-19h',
    specialites: ['Café fraîchement torréfié', 'Petits déjeuners', 'Coin lecture']
  },
  {
    id: '4',
    nom: 'Café Bohème',
    adresse: '78 rue Saint-Louis, 75004 Paris',
    description: 'Ambiance bohème et décontractée, idéal pour les amateurs de culture et d\'art.',
    note: 4.5,
    distance: '1.2km',
    imageUrl: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=1389&q=80',
    horaires: '10h-22h',
    specialites: ['Café bio', 'Expositions', 'Concerts acoustiques']
  },
  {
    id: '5',
    nom: 'Le Café Parisien',
    adresse: '34 avenue des Champs-Élysées, 75008 Paris',
    description: 'L\'élégance parisienne dans votre tasse, avec vue sur les plus beaux monuments.',
    note: 4.6,
    distance: '1.5km',
    imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1367&q=80',
    horaires: '8h-23h',
    specialites: ['Café français', 'Pâtisseries fines', 'Terrasse panoramique']
  }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    nom: 'Espresso',
    description: 'Un café intense et corsé, servi en petite quantité.',
    prix: 2.5,
    imageUrl: 'https://images.unsplash.com/photo-1510707577719-ae7f89b98aab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    categorie: 'Café',
    populaire: true
  },
  {
    id: '2',
    nom: 'Cappuccino',
    description: 'Un tiers d\'espresso, un tiers de lait chauffé à la vapeur et un tiers de mousse de lait.',
    prix: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    categorie: 'Café',
    populaire: true
  },
  {
    id: '3',
    nom: 'Croissant Beurre',
    description: 'Croissant traditionnel français au beurre, croustillant à l\'extérieur et moelleux à l\'intérieur.',
    prix: 2.0,
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1326&q=80',
    categorie: 'Pâtisserie',
    populaire: false
  },
  {
    id: '4',
    nom: 'Latte Caramel',
    description: 'Un espresso adouci avec du lait à la vapeur et un sirop de caramel.',
    prix: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    categorie: 'Café',
    populaire: true
  },
  {
    id: '5',
    nom: 'Pain au Chocolat',
    description: 'Viennoiserie au beurre avec des barres de chocolat noir à l\'intérieur.',
    prix: 2.2,
    imageUrl: 'https://images.unsplash.com/photo-1585479242443-1e4926e2e271?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    categorie: 'Pâtisserie',
    populaire: false
  },
  {
    id: '6',
    nom: 'Thé Vert Jasmin',
    description: 'Thé vert parfumé avec des fleurs de jasmin, léger et parfumé.',
    prix: 3.5,
    imageUrl: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    categorie: 'Thé',
    populaire: false
  },
  {
    id: '7',
    nom: 'Salade César',
    description: 'Salade fraîche avec laitue romaine, croûtons, parmesan et sauce César.',
    prix: 8.5,
    imageUrl: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    categorie: 'Plat',
    populaire: true
  },
  {
    id: '8',
    nom: 'Smoothie Fruits Rouges',
    description: 'Mélange rafraîchissant de fraises, framboises et myrtilles avec du yaourt.',
    prix: 5.5,
    imageUrl: 'https://images.unsplash.com/photo-1553530666-ba11a2d539cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    categorie: 'Boisson',
    populaire: false
  }
];

export const promotions: Promotion[] = [
  {
    id: '1',
    titre: 'Happy Hour Café',
    description: 'Tous les cafés à -30% entre 15h et 17h du lundi au vendredi',
    code: 'HAPPY30',
    reduction: '30%',
    validite: 'Du 1er au 30 avril 2025',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aeeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '2',
    titre: 'Petit-déjeuner Complet',
    description: 'Un café + une viennoiserie + un jus d\'orange pour seulement 6,90€',
    code: 'BONJOUR',
    reduction: 'Offre spéciale',
    validite: 'Tous les jours avant 11h',
    imageUrl: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '3',
    titre: 'Première Commande',
    description: 'Bénéficiez de 5€ de réduction sur votre première commande en ligne',
    code: 'BIENVENUE',
    reduction: '5€',
    validite: 'Pour les nouveaux clients',
    imageUrl: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1337&q=80'
  }
];

export const historique: Commande[] = [
  {
    id: '1',
    date: '15 avril 2025, 10:30',
    cafe: 'Café des Artistes',
    statut: 'Terminée',
    items: [
      { nom: 'Cappuccino', quantite: 1, prix: 4.2 },
      { nom: 'Croissant Beurre', quantite: 2, prix: 4.0 }
    ],
    total: 8.2
  },
  {
    id: '2',
    date: '12 avril 2025, 15:45',
    cafe: 'L\'Express Café',
    statut: 'Terminée',
    items: [
      { nom: 'Latte Caramel', quantite: 1, prix: 4.8 },
      { nom: 'Pain au Chocolat', quantite: 1, prix: 2.2 }
    ],
    total: 7.0
  },
  {
    id: '3',
    date: '16 avril 2025, 09:15',
    cafe: 'Le Petit Moulin',
    statut: 'En cours',
    items: [
      { nom: 'Espresso', quantite: 2, prix: 5.0 },
      { nom: 'Salade César', quantite: 1, prix: 8.5 }
    ],
    total: 13.5
  }
];

export const pointsFidelite = 320; // Points de fidélité mockés pour l'utilisateur
