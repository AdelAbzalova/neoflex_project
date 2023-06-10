<template>
  <div class="app-container">
    <app-header class="header"></app-header>
    <app-main class="content" v-if="page == 1"></app-main>
    <app-cart v-if="page == 2" class="content"></app-cart>
    <app-footer class="footer"></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppMain from "./components/Main.vue";
import AppFooter from "./components/Footer.vue";
import AppCart from "./components/Cart.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppCart,
  },
  computed: {
    ...mapGetters({
      page: "page",
    }),
  },
};
</script>

<style>
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eaeaea;
}
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex-grow: 1;
}
.footer {
  flex-shrink: 0;
}
</style>
