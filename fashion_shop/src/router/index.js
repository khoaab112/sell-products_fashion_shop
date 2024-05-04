import { createRouter, createWebHistory } from 'vue-router';
import auth from '../router/auth';
import page from '../router/page';
import error from '../router/error';
import jwt from '../helpers/jwt';
// // import cookie from '@/helpers/cookie';
// import localStorage from '@/helpers/localStorage';

const routes = [
    ...auth.auth,
    ...page.directional,
    ...page.home,
    ...page.test,
    ...error.errorDefault,
    ...error.error,
];

const router = createRouter({
        history: createWebHistory(),
        routes
    })
    //check login
router.beforeEach((to, from, next) => {
    console.log(jwt.decodePayloadRefreshToken());
    if (to.path.startsWith('/api'))
        return next('/error404');
    const isLogin = to.path === "/auth/login";
    const existRefreshToken = jwt.decodePayloadRefreshToken();
    const isRememberMe = (jwt.decodePayloadRefreshToken().remember) === 'true';
    const expiryDate = jwt.checkExpiryDateRefreshToken();
    const expiryDateAccessToken = jwt.checkExpiryDateAccessToken();
    const reservation = jwt.decodePayloadAccessToken().reservation;
    console.log(1);

    if (isLogin) {
        if (existRefreshToken && isRememberMe && expiryDate) {
            return next({ name: 'Home' });
        } else if (existRefreshToken && reservation && expiryDate && expiryDateAccessToken) {
            return next({ name: 'Home' });
        } else {
            return next();
        }
    }
    return next();
});
export default router