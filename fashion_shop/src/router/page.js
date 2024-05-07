const directional = [{
    path: '/:pathMatch(.*)*',
    name: 'PageHome',
    component: () =>
        import ('../views/page/home/PageHome.vue'),
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
                import ('../views/page/home/PageHome.vue'),

        },
        {
            path: 'branch',
            name: 'Branch',
            meta: { breadcrumb: 'Chi nhánh' },
            component: () =>
                import ('../views/page/branch/Branch.vue'),
        },
        {
            path: 'list',
            name: 'ListProduct',
            meta: { breadcrumb: 'Danh sách sản phẩm' },
            component: () =>
                import ('../views/page/ListProduct.vue'),
        },
        {
            path: 'detail-product',
            name: 'DetailProduct',
            meta: { breadcrumb: 'Chi tiết sản phẩm' },
            component: () =>
                import ('../views/page/DetailProduct.vue'),
        },
        {
            path: 'support',
            name: 'SupportVue',
            meta: { breadcrumb: 'Hỗ trợ' },
            component: () =>
                import ('../views/page/Support/Main.vue'),
        },
        {
            path: 'profile',
            name: 'ProfileVue',
            meta: { breadcrumb: 'Hồ sơ' },
            component: () =>
                import ('../views/page/profile/Main.vue'),
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