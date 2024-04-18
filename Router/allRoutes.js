import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes =
    [new Route("/", "Accueil", "/pages/home.html"),];
    [new Route("/", "Services", "/pages/home.html"),];
    [new Route("/", "Habitats", "/pages/home.html"),];
    [new Route("/", "Contacts", "/pages/home.html"),];
    [new Route("/", "Connexion", "/pages/home.html"),];
    [new Route("/", "Page administration", "/pages/home.html"),];
    [new Route("/", "Page vétérinaire", "/pages/home.html"),];
    [new Route("/", "Page employé", "/pages/home.html"),];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";