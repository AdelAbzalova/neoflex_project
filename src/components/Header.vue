<template>
  <div class="head-line">
    <div><img src="../assets/QPICK.png" alt="qpick_logo" /></div>
    <div class="head-icons">
      <div class="head-icon"><img src="../assets/Vector1.svg" alt="heart_icon" /></div>
      <div class="head-icon head-cart" @click="toCart">
        <img src="../assets/Vector2.svg" alt="cart_icon" />
        <div class="head-count">{{ totalCount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  props: {},
  methods: {
    ...mapActions({
      changePage: "changePage",
    }),
    toCart() {
      store.dispatch("changePage", 2);
    },
  },
  computed: {
    ...mapGetters({
      totalCount: "totalCount",
    }),
  },
};
</script>

<style scoped>
.head-line {
  display: flex;
  justify-content: space-between;
  width: 1110px;
  margin: 0 auto;
  align-items: center;
  height: 60px;
}
.head-icon {
  width: 62px;
}
.head-icons {
  display: flex;
  width: 124px;
}
.head-cart {
  position: relative;
}
.head-count {
  position: absolute;
  z-index: 1;
  left: 35px;
  top: -10px;
  height: 18px;
  width: 17.4px;
  border-radius: 50%;
  background-color: #ffa542;
  color: white;
  font-weight: 600;
}
</style>
