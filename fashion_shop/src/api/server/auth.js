import axios from '../index.js';

export default {
    login(user) {
        return axios.post(`/login`, (user));
    },
    logout() {
        return axios.delete(`/logout`);
    },
    resetPassword(data) {
        return axios.put(`/reissue-password`, (data));
    },
    register(data) {
        return axios.post(`/register`, (data));
    }
}