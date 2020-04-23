// ref: https://umijs.org/config/
export default {
    treeShaking: true,
    routes: [
        {
            path: '/',
            component: '../layouts/index',
            routes: [
                { path: '/', component: '../pages/enter' },
                {
                    path: '/home',
                    component: '../pages/home',
                    routes: [
                        {
                            path: '/home/project/application/list',
                            component: '../pages/project/application',
                        },
                        {
                            path: '/home/project/appliction/api/list',
                            component: '../pages/project/application/api',
                        },
                    ],
                },
            ],
        },
    ],
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: true,
                dynamicImport: { webpackChunkName: true },
                title: 'bamboo-api-document',
                dll: false,
                locale: {
                    enable: true,
                    default: 'en-US',
                },
                routes: {
                    exclude: [
                        /models\//,
                        /services\//,
                        /model\.(t|j)sx?$/,
                        /service\.(t|j)sx?$/,
                        /components\//,
                    ],
                },
            },
        ],
    ],
};
