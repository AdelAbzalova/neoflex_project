<template>
  <div class="footer-line">
    <div class="footer-logo">
      <img src="../assets/QPICK.png" alt="QPICK_LOGO" />
    </div>
    <div class="footer-text">
      <div class="footer-text-col_1">
        <div>Избранное</div>
        <div @click="toCart">Корзина</div>
        <div>Контакты</div>
      </div>
      <div class="footer-text-col_2">
        <div>Условия сервиса</div>
        <div><img src="../assets/Lang.png" alt="Lang_logo" /> Рус Eng</div>
      </div>
    </div>
    <div class="footer-icons">
      <div class="footer-iconsBox">
        <div><img src="../assets/VK.png" alt="VK_logo" /></div>
        <div><img src="../assets/Telegram.png" alt="Telegram_logo" /></div>
        <div><img src="../assets/Whatsapp.png" alt="Whatsapp_logo" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { mapActions } from "vuex";

export default {
  name: "AppFooter",
  methods: {
    ...mapActions({
      changePage: "changePage",
    }),
    toCart() {
      store.dispatch("changePage", 2);
    },
  },
};
</script>

<style scoped>
.footer-line {
  width: 1110px;
  display: grid;
  grid-template-columns: 347px 427px 336px;
  margin: 0 auto;
  margin-top: 20px;
  max-height: 149px;
  background-color: white;
  border-radius: 10px 10px 0 0;
}

.footer-logo {
  width: 85px;
  height: 30px;
  padding: 29px 0 0 29px;
  font-size: 17px;
}
.footer-text {
  margin-top: 34px;
  width: 427px;
  max-height: 82px;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: left;
}
.footer-text-col_1 {
  text-align: start;
  line-height: 20.72px;
}
.footer-text-col_2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: end;
}
.footer-icons {
  position: relative;
}
.footer-iconsBox {
  position: absolute;
  width: 126.1px;
  height: 30.1px;
  left: 183px;
  top: 29px;
  align-items: center;
  display: flex;
  justify-content: space-around;
}
</style>
