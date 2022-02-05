export default {
    state: () => ({
        active: false,
    }),
    mutations: {
        TOGGLE_ACTIVE_ANIMATE(state, val) {
            state.active = val;
        },
    },
    getters: {
        GET_ACTIVE_ANIMATE: (state) => {
            return state.active;
        },
    },
};
