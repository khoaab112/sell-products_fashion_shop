import cookie from "./cookie";
import localStorage from "./localStorage";
import sessionStorage from "./sessionStorage";

import api from "../api/server/auth";
export default {
    methods: {
        loginSuccess(accessToken, refreshToken) {
            cookie.setCookie(refreshToken);
            localStorage.setAccessToken(accessToken);
            return this.$router.push({ name: 'Home' });
        },
        async logout() {
            var result
            try {
                result = await api.logout();
            } catch (error) {
                sessionStorage.clearSession();
                cookie.deleteCookie();
                localStorage.removeAccessToken();
                return this.$router.push({ name: 'Home' });
            }
            if (result.data.result_code === 200) {
                cookie.deleteCookie();
                sessionStorage.clearSession();
                localStorage.removeAccessToken();
                return this.$router.push({ name: 'Home' });
            } else {
                sessionStorage.clearSession();
                cookie.deleteCookie();
                localStorage.removeAccessToken();
                return this.$router.push({ name: 'Home' });
            }

        },
    },
};