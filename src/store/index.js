import { reactive } from "vue";

export const store = reactive({
    apiUri:'http://localhost:3000/clothes',

    modal: {
        show: true,
    }
});

