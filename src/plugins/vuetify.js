import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        verde: '#2EC4B6',
        vermelho: '#FF5154',
        amarelo: '#FFC71F',
      }
    }
  }
});
