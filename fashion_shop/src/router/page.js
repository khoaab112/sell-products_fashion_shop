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
            path: 'branch',
            name: 'Branch',
            meta: { breadcrumb: 'Chi nhánh' },
            component: () =>
                import ('../views/branch/Branch.vue'),
        },
        {
            path: 'detail-product',
            name: 'DetailProduct',
            meta: { breadcrumb: 'Chi tiết sản phẩm' },
            component: () =>
                import ('../views/page/DetailProduct.vue'),
        },
        {
            path: 'test',
            name: 'Test',
            meta: { breadcrumb: 'Test' },
            component: () =>
                import ('../views/test/testView.vue'),
        },
    ],
}, ];


export default {
    home,
    directional,
    test
};