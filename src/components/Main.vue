<template>
  <div class="main-wrapper">
    <div class="main-text">Наушники</div>
    <div class="main-cards">
      <app-card
        v-for="(wired, index) in this.wired"
        :key="1 + String(index)"
        :img="wired.img"
        :title="wired.title"
        :price="wired.price"
        :rate="wired.rate"
      ></app-card>
    </div>

    <div class="main-text">Беспроводные наушники</div>
    <div class="main-cards">
      <app-card
        v-for="(wireless, index) in this.wireless"
        :key="2 + String(index)"
        :img="wireless.img"
        :title="wireless.title"
        :price="wireless.price"
        :rate="wireless.rate"
      ></app-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppCard from "./Card.vue";

export default {
  name: "AppMain",
  data() {
    return {
      imgProps: "../assets/earpods1.png",
    };
  },
  components: {
    AppCard,
  },
  props: {},
  computed: {
    ...mapGetters({
      wired: "wiredHeadphones",
      wireless: "wirelessHeadphones",
    }),
  },
};
</script>

<style scoped>
.main-wrapper {
  width: 1110px;
  margin: 0 auto;
}

.main-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1110px;
  margin: 0 auto;
}
.main-text {
  margin-top: 28px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  line-height: 25px;
  text-align: start;
}
</style>
