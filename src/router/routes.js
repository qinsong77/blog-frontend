import layout from '_c/layout'

const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'main',
        component: layout,
        redirect: '/blog',
        children: [
            {
                path: '/blog',
                name: 'blog',
                component: () => import('_v/blog'),
                redirect: '/blog/recent',
                children: [
                    {
                        path: 'recent',
                        name: 'recent',
                        // alias: '/blog',
                        component: () => import('_v/blog/recent')
                    },
                    {
                        path: 'frontend',
                        name: 'frontend',
                        component: () => import('_v/blog/Articles')
                    }
                ]
            }
        ]
    }
]
export default routes
