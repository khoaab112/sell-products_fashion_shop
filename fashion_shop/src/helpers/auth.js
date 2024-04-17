import cookie from "./cookie";
import localStorage from "./localStorage";
export default {
    methods: {
        loginSuccess(accessToken, refreshToken) {
            cookie.setCookie(refreshToken);
            localStorage.setAccessToken(accessToken);
            return this.$router.push({ name: 'Home' });
        },
    },
};