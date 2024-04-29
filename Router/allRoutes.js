import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/Pages/home.html", []),
    new Route("/Services", "Services", "/Pages/Services.html", []),
    new Route("/Habitats", "Habitats", "/Pages/Habitats.html", []),
    new Route("/Contacts", "Contacts", "/Pages/Contacts.html", []),
    new Route("/Connexion", "Connexion", "/Pages/Connexion.html", ["disconnected"],"/js/auth/signin.js"),
    new Route("/Page_admin", "Page administration", "/Pages/Page_admin.html", ["admin"]),
    new Route("/Page_vétérinaire", "Page vétérinaire", "/Pages/Page_vétérinaire.html", ["vétérinaire"]),
    new Route("/Page_employé", "Page employé", "/Pages/Page_employé.html", ["employé"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";