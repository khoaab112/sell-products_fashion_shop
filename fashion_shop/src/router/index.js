import { createRouter, createWebHistory } from 'vue-router';
import auth from '../router/auth';
import page from '../router/page';

const routes = [
    ...auth.auth,
    ...page.directional,
    ...page.home,
    ...page.test,
];

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes
// })
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router