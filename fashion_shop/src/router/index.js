import { createRouter, createWebHistory } from 'vue-router';
import auth from '../router/auth';
import page from '../router/page';
import error from '../router/error';
import jwt from '../helpers/jwt';
import cookie from '@/helpers/cookie';
import localStorage from '@/helpers/localStorage';

const routes = [
    ...auth.auth,
    ...page.directional,
    ...page.home,
    ...page.test,
    ...error.errorDefault,
    ...error.error,
];

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes
// })
const router = createRouter({
        history: createWebHistory(),
        routes
    })
    //check login
router.beforeEach((to, from, next) => {
    const KEY_LOGIN = 'isLogin' + process.env.VUE_APP_NAME;
    if (to.path.startsWith('/api'))
        return next('/error404');
    const isLogin = to.path === "/auth/login" || to.path == "/";
    if (isLogin) {
        const existRefreshToken = jwt.decodePayloadRefreshToken();
        const isRememberMe = (jwt.decodePayloadRefreshToken().remember) === 'true';
        const expiryDate = jwt.checkExpiryDateRefreshToken();
        const expiryDateAccessToken = jwt.checkExpiryDateAccessToken();
        const reservation = jwt.decodePayloadAccessToken().reservation;
        if (existRefreshToken && isRememberMe && expiryDate) {
            localStorage.setLocalStorage(KEY_LOGIN, true);
            return next({ name: 'PageHome' });
        } else if (existRefreshToken && reservation && expiryDate && expiryDateAccessToken) {
            localStorage.setLocalStorage(KEY_LOGIN, true);
            return next({ name: 'PageHome' });
        } else {
            localStorage.setLocalStorage(KEY_LOGIN, false);
            return next({ name: 'login' });
        }
    } else {
        let loginSuccessful = localStorage.getLocalStorage(KEY_LOGIN);
    }
    return next();
});
export default router