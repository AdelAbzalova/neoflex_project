import { createStore } from "vuex";

export default createStore({
  state: {
    page: 1,
    wiredHeadphones: [
      {
        img: require("../assets/earpods1.png"),
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
      },
      {
        img: require("../assets/earpods2.png"),
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
      },
      {
        img: require("../assets/earpods3.png"),
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
      },
    ],
    wirelessHeadphones: [
      {
        img: require("../assets/earpods4.png"),
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
      },
      {
        img: require("../assets/earpods5.png"),
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
      },
      {
        img: require("../assets/earpods6.png"),
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
      },
    ],
    buyProducts: [],
  },

  getters: {
    page(state) {
      return state.page;
    },
    wiredHeadphones(state) {
      return state.wiredHeadphones;
    },
    wirelessHeadphones(state) {
      return state.wirelessHeadphones;
    },
    buyProducts(state) {
      return state.buyProducts;
    },
    totalPrice(state) {
      let total = 0;
      for (let i = 0; i < state.buyProducts.length; i++) {
        total += state.buyProducts[i].cnt * state.buyProducts[i].price;
      }
      return total;
    },
    totalCount(state) {
      let totalCount = 0;
      for (let i = 0; i < state.buyProducts.length; i++) {
        totalCount += state.buyProducts[i].cnt;
      }
      return totalCount;
    },
  },
  mutations: {
    TO_BUY(state, buy_arr) {
      state.buyProducts.push(buy_arr);
    },
    CNANGE_PAGE(state, page) {
      state.page = page;
    },
    ADD_CNT(state, index) {
      state.buyProducts[index].cnt++;
    },
    DECR_CNT(state, index) {
      if (state.buyProducts[index].cnt !== 0) {
        state.buyProducts[index].cnt--;
      }
    },
    DELETE_PRODUCT(state, index) {
      state.buyProducts.splice(index, 1);
    },
  },
  actions: {
    toBuy(store, buy_arr) {
      store.commit("TO_BUY", buy_arr);
    },
    changePage(store, page) {
      store.commit("CNANGE_PAGE", page);
    },
    addCnt(store, index) {
      store.commit("ADD_CNT", index);
    },
    decrCnt(store, index) {
      store.commit("DECR_CNT", index);
    },
    deleteProduct(store, index) {
      store.commit("DELETE_PRODUCT", index);
    },
  },
});
