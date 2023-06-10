<template>
  <div class="wrapper">
    <div class="card-img">
      <img :src="img" alt="card_img" />
    </div>
    <div class="card-elems">
      <div class="card-title">
        {{ title }}
      </div>
      <div class="card-price">{{ price }} ₽</div>
      <div class="card-rate">
        <img src="../assets/VectorStar.png" alt="star" />
        <span> {{ rate }} </span>
      </div>
      <div class="card-buy">
        <span @click="buyProd">Купить</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import store from "@/store";

export default {
  name: "AppCard",

  data() {
    return {
      buy_array: [],
    };
  },
  props: {
    img: String,
    title: String,
    price: Number,
    rate: Number,
    id: String,
  },
  methods: {
    ...mapMutations["toBuy"],
    buyProd() {
      let item_pres = true;
      for (let i = 0; i < this.buyProducts.length; i++) {
        if (this.img === this.buyProducts[i].img) {
          item_pres = false;
          this.buyProducts[i].cnt++;
        }
      }
      if (item_pres) {
        store.dispatch("toBuy", {
          img: this.img,
          title: this.title,
          price: this.price,
          cnt: 1,
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      buyProducts: "buyProducts",
    }),
  },
};
</script>

<style scoped>
.wrapper {
  width: 350px;
  height: 407px;
  border-radius: 30px;
  font-family: "Montserrat";
  font-weight: 900;
  font-size: 17px;
  background-color: white;
}
.card-img {
  height: 252px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-elems {
  display: grid;
  width: 310px;
  height: 74px;
  margin-top: 54px;
  margin-left: 22px;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.card-title,
.card-rate {
  text-align: start;
}

.card-price,
.card-buy {
  text-align: end;
}
.card-price {
  color: #ffce7f;
}
.card-rate {
  margin-top: 25px;
  height: 22px;
  color: #838383;
}
.card-buy {
  margin-top: 25px;
}
.card-rate img {
  margin-right: 10px;
}
.card-rate span {
  vertical-align: top;
  line-height: 22px;
}
</style>
