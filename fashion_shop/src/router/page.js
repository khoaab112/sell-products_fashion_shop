const directional = [{
    path: '/:pathMatch(.*)*',
    name: 'PageHome',
    component: () =>
        import ('../views/home/PageHome.vue'),

}];

const home = [{
        path: '/',
        name: 'PageHome',
        component: () =>
            import ('../views/home/PageHome.vue'),

    },

]

export default {
    home,
    directional
};