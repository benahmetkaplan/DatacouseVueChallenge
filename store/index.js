import Vuex from 'vuex';
import Vue from 'vue';

import user from './user';
import post from './post';
import todo from './todo';

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    user,
    post,
    todo
  }
});