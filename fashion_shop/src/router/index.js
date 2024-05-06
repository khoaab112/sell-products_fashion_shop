import { createRouter, createWebHistory } from 'vue-router';
import auth from '../router/auth';
import page from '../router/page';
import error from '../router/error';
import jwt from '../helpers/jwt';
import main from '../main'
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
    if (to.path.startsWith('/api'))
        return next('/error404');
    const isLogin = to.path === "/auth/login";
    const existRefreshToken = jwt.decodePayloadRefreshToken();
    const isRememberMe = (jwt.decodePayloadRefreshToken().remember) === 'true';
    const expiryDate = jwt.checkExpiryDateRefreshToken();
    const expiryDateAccessToken = jwt.checkExpiryDateAccessToken();
    // const reservation = jwt.decodePayloadAccessToken().reservation;
    if (existRefreshToken && expiryDate) {
        let userData = {
            "user_name": existRefreshToken.user_name,
            "id": existRefreshToken.id
        };
        main.store.commit('setLoginStatus', true);
        main.store.commit('setUserData', userData);
    }
    console.log(1);
    if (isLogin) {
        if (existRefreshToken && isRememberMe && expiryDate) {
            return next({ name: 'Home' });
        } else if (existRefreshToken && expiryDate && expiryDateAccessToken) {
            return next({ name: 'Home' });
        } else {
            return next();
        }
    }
    return next();
});
export default router