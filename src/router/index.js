import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home.vue";
import RecipeByName from "../views/RecipeByName.vue";
import RecipeByLetter from "../views/RecipeByLetter.vue";
import RecipeByIngredient from "../views/RecipeByIngredient.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: RecipeByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: RecipeByLetter,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: RecipeByIngredient,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
