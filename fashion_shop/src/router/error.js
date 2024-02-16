const errorDefault = [{
    path: '/:pathMatch(.*)*',
    name: 'page404-default',
    components: {
        error: () =>
            import ('../views/error/Error404.vue'),
    },
}];

const error = [{
        path: '/error403',
        name: 'Error403',
        components: {
            error: () =>
                import ('../views/error/Error403.vue'),
        },
    },
    {
        path: '/error404',
        name: 'Error404',
        components: {
            error: () =>
                import ('../views/error/Error404.vue'),
        },
    },
    {
        path: '/error500',
        name: 'Error500',
        components: {
            error: () =>
                import ('../views/error/Error500.vue'),
        },
    },

]
export default {
    error,
    errorDefault,
};