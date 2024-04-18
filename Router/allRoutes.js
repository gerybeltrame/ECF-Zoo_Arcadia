import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes =
    [new Route("/", "Accueil", "/pages/Accueil.html"),];
    [new Route("/Services", "Services", "/pages/Services.html"),];
    [new Route("/Services", "Habitats", "/pages/Habitats.html"),];
    [new Route("/Contacts", "Contacts", "/pages/Contacts.html"),];
    [new Route("/Connexion", "Connexion", "/pages/Connexion.html"),];
    [new Route("/Page_admin", "Page administration", "/pages/Page_admin.html"),];
    [new Route("/Page_vétérinaire", "Page vétérinaire", "/pages/Page_vétérinaire.html"),];
    [new Route("/Page_employé", "Page employé", "/pages/Page_employé.html"),];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";