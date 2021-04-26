import Vue from "vue";
import Vuex from "vuex";
import data from "./modeles/data"

Vue.use(Vuex);


export default new Vuex.Store({
 modules:{
   data
 }
});


// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });
