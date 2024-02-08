<script>
export default {
    data(){
        return{
            clothes:[
                {
                imageFront: '1.webp',
                imageBack: '1b.webp',
                sale: '50%',
                brand: 'Levi\'s',
                description: 'RELAXED FIT TEE UNISEX',
                discountedPrice: '14,99 €',
                price: '29,99 €',
                },

                {
                imageFront: '2.webp',
                imageBack: '2b.webp',
                sale: '30%',
                brand: 'Guess',
                description: 'ROSES TEE',
                discountedPrice: '20,99 €',
                price: '29,99 €', 
                },

                {
                imageFront: '3.webp',
                imageBack: '3b.webp',
                sale: '30%',
                brand: 'Come Zucchero Filato',
                description: 'VOGLIA DI COLORI PASTELLO',
                discountedPrice: '129,99 €',
                price: '184,99€', 
                },

                {
                imageFront: '4.webp',
                imageBack: '4b.webp',
                sale: '50%',
                brand: 'Levi\'s',
                description: 'TEE UNISEX',
                discountedPrice: '14,99 €',
                price: '29,99 €', 
                },

                {
                imageFront: '5.webp',
                imageBack: '5b.webp',
                sale: '',
                brand: 'Maya Deluxe',
                description: 'STRIPE BODICE',
                discountedPrice: '',
                price: '99.99 €', 
                },

                {
                imageFront: '6.webp',
                imageBack: '6b.webp',
                sale: '',
                brand: 'Esprit',
                description: 'MAGLIONE - BLACK',
                discountedPrice: '',
                price: '29,99 €', 
                },

            ]
        }

    },

    methods:{
        buildImgPath(imageName){
            return new URL('../assets/img/' + imageName , import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="card" v-for="(clothe, index) in clothes">
            <img :src="buildImgPath(clothes[index].imageFront)" alt="">
            <img class="img-hover" :src="buildImgPath(clothes[index].imageBack)" alt="">
            <p>{{ clothe.sale }}</p>
            <i class="fa-solid fa-heart like"></i>
            <div class="descripption">
                <h6>{{ clothe.brand }}</h6>
                <h4>{{ clothe.description }}</h4>
                <h6 class="price">
                    <span class="red">{{ clothe.discountedPrice }}</span> 
                    <span class="line">{{ clothe.price}}</span>
                </h6>
            </div>
        </div>
    </div> 
</template>


<style lang="scss" scoped>
.red{
    color: red;
}

.line{
    text-decoration-line: line-through;
}

span{
    padding-right: 10px;
}

.container{
    padding: 0 17%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    .card{
        width: calc(100% / 3 - 20px);
        margin: 10px 0;
        position: relative;
        i{
            position: absolute;
            top: 5px;
            right: 0;
            background-color: white;        
            padding: 10px;
        }
        .like:hover{
            color: red;
        }
        p{
            font-size: 12px;
            position: absolute;
            bottom: 70px;
            left: 0;
            background-color: red;
            padding: 5px 10px;
            color: white;       
        }
    }
    .img-hover{
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    display: none;
    }

    .card:hover .img-hover{
    display: block;
    }
}   
</style>
