import { reactive } from "vue";

export const store = reactive({
  apiUri:
    window.location.hostname === "localhost"
      ? "http://localhost:3000/clothes"
      : "https://vite-boolando.glitch.me/clothes",

  modal: {
    show: false,
    imageFront: "",
    imageBack: "",
    brand: "",
    description: "",
    sale: "",
    price: "",
    discountedPrice: "",
  },
});
