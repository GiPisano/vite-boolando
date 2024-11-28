import { reactive } from "vue";

export const store = reactive({
  apiUri:
    window.location.hostname === "localhost"
      ? "http://localhost:3000/clothes"
      : "https://6748ecb45801f51535928e25.mockapi.io/clothes",

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
