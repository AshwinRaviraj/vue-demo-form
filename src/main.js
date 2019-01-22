import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import translations from "./resources/translations";
import vueResource from 'vue-resource';
import GitHubAPI from 'vue-github-api'

Vue.use(GitHubAPI, { token: 'ud576546504c5be559f729c87679ec96820d366e7' });
Vue.use(VueI18n);
Vue.use(Vuelidate);
Vue.use(vueResource);

Vue.config.formApiUrl = process.env.FORM_API_URL;

const i18n = new VueI18n({
  locale: 'lexer',
  fallbackLocale: 'lexer',
  messages: translations
})

new Vue({
  el: '#app',
  i18n,
  render: h => h(App),
  data: {
    url: '',
  }
})


