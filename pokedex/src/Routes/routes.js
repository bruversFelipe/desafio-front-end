import Home from "../Pages/Home";
import BuscarPokemons from "../Pages/BuscarPokemons";
import MeusPokemons from "../Pages/MeusPokemons";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    title: "Home"
  },
  {
    path: "/buscar",
    component: BuscarPokemons,
    title: "Buscar Pokemons"
  },
  {
    path: "/meus-pokemons",
    component: MeusPokemons,
    title: "Meus Pokemons"
  }
];

export default routes;
