const app = {
    state: {
        showNav: false,
        theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'theme-default'
    },
    getters: {
        checkTheme: state => {
            return state.theme === 'theme-default'
        }
    },
    mutations: {
        setShowNav (state) {
            state.showNav = !state.showNav
        },
        closeNav (state) {
            state.showNav = false
        },
        showNav (state) {
            state.showNav = true
        },
        setTheme (state, value) {
            localStorage.setItem('theme', value)
            state.theme = value
        }
    }
}
export default app
