<script>
import { store } from '../store';


export default {
    methods: {
        closeModal(){
            store.modal.show = false;
        }
    }
}

</script>

<template>
<div class="layover">
    <div class="modal">
        <i class="fa-solid fa-xmark fa-lg icon-exit" @click="closeModal()"></i>
    </div>
    
</div>

</template>

<style lang="scss" scoped>
.layover{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.8);
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    z-index: 10;
}

.modal{
    width: 80%;
    max-width: 940px;
    padding: 1rem;
    background-color: white;
    position: relative;
}

.icon-exit{
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: black;
}
</style>