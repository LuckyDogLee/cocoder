import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchActiveItem } from './api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    hasLogin: false,
    lists: {
      doc: [],
      blog: [],
      book: [],
      video: [],
      project: []
    },
    add: {
      doc: [],
      blog: [],
      book: [],
      video: [],
      project: []
    },
    activeNews: {
      title: '',
      date: '',
      content: ''
    },
    pageNo: 1,
    pageSize: 3,
    totalPage: 1
  },

  actions: {
    fetchListData: ({ commit, state }, { type }) => {
      const response = fetchNewsList({
        type: type,
        pageSize: state.pageSize,
        pageNo: state.pageNo
      });

      if (response.status === 'success') {
        const totalPage = parseInt(response.result.totalPage);
        const news = response.result.data

        commit('setTotalPage', totalPage);
        commit('setList', { type, news });
      } else {
        console.log(response.result);
      }
    },
    fetchActiveNews: ({ commit, state }, { type, id }) => {
      const response = fetchActiveItem({
        type: type,
        id: id
      });

      if (response.status === 'success') {
        let news = response.result;
        if (news === []) {
          for (var i = state.add[type].length - 1; i >= 0; i--) {
            if (state.add[type][i].id === id) {
              news = state.add[type][i];
              break;
            }
          }
        }
        commit('setActiveNews', news);
      } else {
        console.log(response.result);
      }
    }
  },

  mutations: {
    login(state) {
      state.hasLogin = true;
    },
    logout(state) {
      state.hasLogin = false;
    },
    increment(state) {
      if (state.pageNo + 1 > state.totalPage) {
        state.pageNo = state.totalPage;
      } else {
        state.pageNo++;
      }
    },
    decrement(state) {
      if (state.pageNo - 1 < 1) {
        state.pageNo = 1;
      } else {
        state.pageNo--;
      }
    },
    setTotalPage(state, totalPage) {
      state.totalPage = totalPage;
    },
    setList(state, { type, news }) {
      state.lists[type] = news;
      if (state.pageNo === 1) {
        state.lists[type] = state.add[type].concat(news);
      }
    },
    setActiveNews(state, news) {
      state.activeNews = news;
    },
    add(state, { title, type, content }) {
      const id = Math.random();
      const date = new Date();
      state.add[type].push({
        id: id,
        title: title,
        date: date,
        content: content
      });
    },
  }
});

export default store;