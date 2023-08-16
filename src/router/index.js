// eslint-disable
import { createRouter, createWebHistory } from "vue-router";
import todosView from "@/views/todosView.vue";
import aboutPage from "@/views/aboutPage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: todosView,
    },
    {
        path: "/about",
        name: "about",
        component: aboutPage,
    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
