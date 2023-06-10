<template>
  <div class="cart-wrapper">
    <div class="cart-title">Корзина</div>
    <div class="cart-elems">
      <div class="cart-cards">
        <div class="cart-card" v-for="(obj, index) in buyProducts" :key="index">
          <div class="cart-img">
            <img :src="obj.img" alt="item_logo" />
          </div>
          <div class="cart-elems">
            <div class="obj-title">
              {{ obj.title }}
            </div>
            <div class="cart-price">{{ obj.price }} ₽</div>
            <div class="cart-delete">
              <img
                src="../assets/Vector_delete.png"
                alt="delete_icon"
                @click="deleteItem(index)"
              />
            </div>

            <div class="cart-cnt">
              <div class="cart-cntChange" @click="minus(index)">-</div>
              <div>{{ obj.cnt }}</div>
              <div class="cart-cntChange" @click="plus(index)">+</div>
            </div>
            <div class="cart-priceTotal">{{ obj.price * obj.cnt }} ₽</div>
          </div>
        </div>
      </div>

      <div class="cart-total">
        <div class="cart-totalTitle">
          <span>Итого</span>
          <span>{{ totalPrice }}</span>
        </div>
        <div class="cart-checkout">Перейти к оформлению</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppCart",
  methods: {
    ...mapActions({
      plus: "addCnt",
      minus: "decrCnt",
      deleteProduct: "deleteProduct",
    }),
    deleteItem(index) {
      if (confirm("Вы уверены, что хотите удалить этот товар?")) {
        this.deleteProduct(index);
      }
    },
  },
  computed: {
    ...mapGetters({
      buyProducts: "buyProducts",
      totalPrice: "totalPrice",
    }),
  },
};
</script>

<style scoped>
.cart-wrapper {
  width: 1110px;
  margin: 0 auto;
}

.cart-title {
  font-weight: 600;
  font-size: 20px;
  text-align: start;
  margin-top: 28px;
  margin-bottom: 20px;
}
.cart-cards {
  display: flex;
  flex-direction: column;
}
.cart-card {
  width: 633px;
  height: 218px;
  border-radius: 30px;
  margin-bottom: 10px;
  background-color: white;
  position: relative;
}
.cart-img {
  position: absolute;
  width: 146.53px;
  height: 136px;
  left: 18.76px;
  top: 18px;
}
.cart-img img {
  width: 146.53px;
  height: 136px;
}
.cart-cnt {
  position: absolute;
  top: 171px;
  left: 16.41px;
  height: 30px;
  width: 125.43px;
  display: grid;
  grid-template-columns: 35.17px 1fr 35.17px;
  text-align: center;
  vertical-align: middle;
  line-height: 30px;
  font-weight: 600;
}
.cart-cntChange {
  border-radius: 50%;
  height: 30px;
  background: #ffce7f;
  color: white;
  font-size: 30px;
}

.obj-title {
  position: absolute;
  top: 76px;
  left: 188.73px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20.72px;
}
.cart-price {
  position: absolute;
  top: 109px;
  left: 188.73px;
  color: #aaaaaa;
  font-size: 15px;
  line-height: 18px;
}

.cart-delete {
  position: absolute;
  top: 18px;
  right: 28.13px;
}
.cart-priceTotal {
  position: absolute;
  height: 18px;
  width: 100.81px;
  bottom: 21px;
  right: 28.13px;
  text-align: end;
  color: #1c1c27;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
}

.cart-elems {
  display: grid;
  grid-template-columns: 633px 349px;
  grid-column-gap: 127px;
}

.cart-total {
  height: 114px;
  border-radius: 30px;
  background-color: white;
  position: relative;
}
.cart-totalTitle {
  display: flex;
  justify-content: space-between;
  width: 311.22px;
  height: 19px;
  margin-top: 21px;
  margin-left: 21.43px;
  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
}

.cart-checkout {
  height: 65px;
  width: 349px;
  border-radius: 30px;
  color: white;
  background-color: black;
  position: absolute;
  bottom: 0;
  text-align: center;
  line-height: 65px;
  font-size: 17px;
  font-weight: 600;
}
</style>
