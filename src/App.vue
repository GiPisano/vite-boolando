<script>
import { store } from "./store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppModal from "./components/AppModal.vue";

import axios from "axios";

export default {
  data() {
    return {
      store,

      links: [
        {
          geneder: "Donna",
          active: false,
        },
        {
          geneder: "Uomo",
          active: false,
        },
        {
          geneder: "Bambini",
          active: false,
        },
      ],

      iconHeader: [
        {
          class: "fa-regular fa-user",
          active: false,
        },
        {
          class: "fa-regular fa-heart",
          active: false,
        },
        {
          class: "fa-solid fa-bag-shopping",
          active: false,
        },
      ],

      clothes: [],

      information: [
        "Informazioni legali",
        "Inormativa sulla privacy",
        "Diritto di recesso",
      ],
    };
  },

  methods: {
    openCard(index) {
      store.modal.show = true;
      console.log("hai cliccato la card" + index);
      const selectedProduct = this.clothes[index];
      store.modal.imageFront = selectedProduct.imageFront;
      store.modal.imageBack = selectedProduct.imageBack;
      store.modal.brand = selectedProduct.brand;
      store.modal.description = selectedProduct.description;
      store.modal.sale = selectedProduct.sale;
      store.modal.price = selectedProduct.price;
      store.modal.discountedPrice = selectedProduct.discountedPrice;
    },
  },

  components: { AppHeader, AppMain, AppFooter, AppModal },

  created() {
    axios.get(`${store.apiUri}`).then((res) => {
      this.clothes = res.data;
    });
  },
};
</script>

<template>
  <app-header :links="links" :iconHeader="iconHeader"></app-header>
  <app-modal v-if="store.modal.show"></app-modal>
  <app-main :clothes="clothes" @open-card="openCard"></app-main>
  <app-footer :information="information"></app-footer>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
