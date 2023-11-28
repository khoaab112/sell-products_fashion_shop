const directional = [{
    path: '/:pathMatch(.*)*',
    name: 'PageHome',
    component: () =>
        import ('../views/home/PageHome.vue'),
}];
const test = [{
    path: '/testa',
    name: 'TestView',
    component: () =>
        import ('../views/test/testView.vue'),
}];
const home = [{
    path: '/',
    name: 'PageHome',
    components: {
        header: () =>
            import ('../layout/HeaderLayout.vue'),
        footer: () =>
            import ('../layout/FooterLayout.vue'),
    },
    children: [{
            path: '',
            name: 'Home',
            meta: { breadcrumb: 'Home' },
            component: () =>
                import ('../views/home/PageHome.vue'),

        },
        {
            path: 'test',
            name: 'Test',
            meta: { breadcrumb: 'Test' },
            component: () =>
                import ('../views/branch/Branch.vue'),
        },
    ],
}, ];


export default {
    home,
    directional,
    test
};