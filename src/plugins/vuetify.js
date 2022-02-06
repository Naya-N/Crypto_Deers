import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ru from 'vuetify/lib/locale/ru';
import '@mdi/font/css/materialdesignicons.css';
import { CUSTOM_ICONS } from './icons.js';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { ru },
        current: 'ru',
    },
    icons: {
        iconfont: 'mdi',
        values: CUSTOM_ICONS,
    },
    theme: {
        dark: true,

        options: {
            customProperties: true,
        },
        themes: {

            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',

            },
            dark: {

            },
        },
    },
});
