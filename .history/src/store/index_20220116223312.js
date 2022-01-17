import { t2s_HTMLConvertHandler } from "@/helpers/i18n";
import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state: {
    lang: "zh-HK",
  },
  getters: {
    getLang: (state) => {
      return state.lang;
    },
  },
  mutations: {
    SET_LANG: (state, lang) => {
      state.lang = lang;
    },
  },
  actions: {
    setLang: ({ commit, state }, lang) => {
      commit("SET_LANG", lang);
      return state.lang;
    },
    localizePage: ({ state }) => {
      // console.log(lang);
      if (state.lang == "zh-CN") {
        t2s_HTMLConvertHandler.restore();
        t2s_HTMLConvertHandler.convert();
      } else {
        t2s_HTMLConvertHandler.restore();
      }
      console.log("converted");
    },
  },
});