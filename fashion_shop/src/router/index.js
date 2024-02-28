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
    console.log(main.store.state.STATUS_LOGIN)
        // const KEY_LOGIN = 'isLogin' + process.env.VUE_APP_NAME;
    if (to.path.startsWith('/api'))
        return next('/error404');
    const isLogin = to.path === "/auth/login";
    const existRefreshToken = jwt.decodePayloadRefreshToken();
    const isRememberMe = (jwt.decodePayloadRefreshToken().remember) === 'true';
    const expiryDate = jwt.checkExpiryDateRefreshToken();
    const expiryDateAccessToken = jwt.checkExpiryDateAccessToken();
    const reservation = jwt.decodePayloadAccessToken().reservation;
    if (existRefreshToken && isRememberMe && expiryDate) {
        main.store.commit('setLoginStatus', true);
    } else if (existRefreshToken && reservation && expiryDate && expiryDateAccessToken) {
        main.store.commit('setLoginStatus', true);
    } else {
        main.store.commit('setLoginStatus', false);
    }
    if (isLogin) {
        if (existRefreshToken && isRememberMe && expiryDate) {
            main.store.commit('setLoginStatus', true);
            return next({ name: 'PageHome' });
        } else if (existRefreshToken && reservation && expiryDate && expiryDateAccessToken) {
            main.store.commit('setLoginStatus', true);
            return next({ name: 'PageHome' });
        } else {
            main.store.commit('setLoginStatus', false);
            return next();
        }
    }
    return next();
});
export default router