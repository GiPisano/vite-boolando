<script>
import { store } from '../store';


export default {
    data(){
        return{
            store,
        }
    },

    methods: {

        closeModal(){
            store.modal.show = false;
        },

        buildImgPath(imageName){
            return new URL('../assets/img/' + imageName , import.meta.url).href;
        },
    }
}

</script>

<template>
<div class="layover">
    <div class="modal">
        <i class="fa-solid fa-xmark fa-lg icon-exit" @click="closeModal()"></i>
        <div class="container">
            <div class="container-img">
                <img :src="buildImgPath(store.modal.imageFront)" alt="">
                <img :src="buildImgPath(store.modal.imageBack)" class="img-hover" alt="">
            </div>

            <div class="description">
                <h4><span>marca :</span> {{ store.modal.brand }}</h4>
                <h4><span>Descrizione :</span> {{ store.modal.description }}</h4>
                <h4 v-if="store.modal.discountedPrice"><span>Prezzo :</span> {{ store.modal.price }}</h4>
                <h4 v-if="store.modal.sale"><span>Sconto :</span> {{ store.modal.sale }}</h4>
                <h4 v-if="store.modal.discountedPrice" ><span>Prezzo scontato :</span> {{ store.modal.discountedPrice }}</h4> 
                <h4 v-else><span>Prezzo :</span> {{ store.modal.price }}</h4>
            </div>
        </div>
    
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
    max-width: 940px;
    padding: 1rem;
    background-color: white;
    position: relative;
}

.container{
    display: flex;
    color: black;
    gap: 20px;
}

span{
    font-size: 30px;
}

.icon-exit{
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: black;
}

.container-img{
    max-width: 50%;
    height: auto;
    position: relative;
}

.img-hover{
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    display: none;
}

.container-img:hover .img-hover{
    display: block;
}

</style>