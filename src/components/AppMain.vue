<script>

export default {
    props:{
        clothes: Array,
    },

    methods:{
        buildImgPath(imageName){
            return new URL('../assets/img/' + imageName , import.meta.url).href;
        },

        favoriteClothe(index){
            this.clothes[index].isInFavorites = !this.clothes[index].isInFavorites;
        },

    },

}
</script>

<template>
    <main class="container">
        <div class="card" v-for="(clothe, index) in clothes">
            <div class="container-img">
                <img :src="buildImgPath(clothe.imageFront)" alt="">
                <img class="img-hover" :src="buildImgPath(clothe.imageBack)" alt="">
                <p v-if="clothe.sale">{{ clothe.sale }}</p>
                <i class="fa-solid fa-heart" :class="clothe.isInFavorites ? 'like' : ''" @click="favoriteClothe(index)"></i>
            </div>
            <div class="descripption">
                <h6>{{ clothe.brand }}</h6>
                <h4>{{ clothe.description }}</h4>
                <h6 class="price">
                    <span class="red" v-if="clothe.discountedPrice" >{{ clothe.discountedPrice }}</span> 
                    <span class="line" v-if="clothe.discountedPrice">{{ clothe.price }}</span>
                    <span v-else>{{ clothe.price }}</span>
                </h6>
            </div>
        </div>
    </main> 
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
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 20px;
        padding: 0 17%;
        margin-top: 50px;
        .card{
            width: calc(100% / 3 - 20px);
            display: flex;
            flex-direction: column;
            margin: 10px 0;
            .container-img{
            
                position: relative;
            }
            
                i{
                    position: absolute;
                    top: 5px;
                    right: 0;
                    background-color: white;        
                    padding: 10px;
                }
                .like{
                    color: red;
                }
                
                p{
                    font-size: 12px;
                    position: absolute;
                    bottom: 10px;
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

        @media screen and (max-width: 800px){
            .card{
                width: calc(50% - 20px);
            }
        };

        @media screen and (max-width: 550px){
        .card{
            width: calc(100% - 20px);
        }
    };
    };

    

    @media screen and (max-width: 550px){
        .container{
            margin-top: 115px;
        }
        
    };
</style>
