import layout from '_c/layout'

const routes = [
    {
        path: "*",
        redirect: "/"
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
                redirect: '/',
                children: [
                    {
                        path: '/',
                        name: 'Recent',
                        component: () => import('_v/blog/recent')
                    },
                    {
                        path: '/articles',
                        name: 'articles',
                        component: () => import('_v/blog/Articles')
                    }
                ]
            }
        ]
    }
]
export default routes
