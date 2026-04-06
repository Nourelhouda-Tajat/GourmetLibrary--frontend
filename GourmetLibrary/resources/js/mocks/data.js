export const mockCategories = [
    { id: 1, name: "Pâtisserie Française" },
    { id: 2, name: "Cuisine Italienne" },
    { id: 3, name: "Plats Végétariens" }
];

export const mockBooks = [
    {
        id: 1,
        title: "Le Grand Manuel du Pâtissier",
        author: "Mélanie Dussert",
        category_id: 1,
        total_copies: 5,
        description:
            "Un ouvrage de référence pour maîtriser toutes les techniques de la pâtisserie française, des bases aux entremets complexes.",
        copies: [
            { id: 101, status: "neuf" },
            { id: 102, status: "usagé" },
            { id: 103, status: "neuf" },
        ],
    },
    {
        id: 2,
        title: "Pasta Basta",
        author: "Luigi Riva",
        category_id: 2,
        total_copies: 3,
        description:
            "Découvrez l'art des pâtes fraîches maison avec des recettes authentiques transmises de génération en génération.",
        copies: [
            { id: 201, status: "usagé" },
            { id: 202, status: "dégradé" },
        ],
    },
];