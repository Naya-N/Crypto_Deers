import Vue from 'vue';
import Vuex from 'vuex';

import windowSize from './module/windowSize';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {},
    actions: {},
    modules: {
        windowSize,
    },
});
