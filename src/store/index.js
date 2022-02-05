import Vue from 'vue';
import Vuex from 'vuex';

import animateDeer from './module/animateDeer';
import windowSize from './module/windowSize';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {},
    actions: {},
    modules: {
        animateDeer,
        windowSize,
    },
});
