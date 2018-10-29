const app = {
    state: {
        showNav: true,
        theme: 'theme-default'
    },
    mutations: {
        setShowNav (state) {
            state.showNav = !state.showNav
        },
        setTheme (state, value) {
            state.theme = value
        }
    }
}
export default app
