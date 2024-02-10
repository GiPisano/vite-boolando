<script>
export default {
    props:{
        links: Array, 
    }
}
</script>

<template>
    <header>

        <div>
            <ul>
                <li v-for="link in links">
                    <a href="#">{{ link }}</a>
                </li>
            </ul>
        </div>
        <div class="logo">
            <img src='../assets/img/boolean-logo.png' alt="">
        </div>
        
        <div class="icon">
            <i class="fa-regular fa-user"></i>
            <i class="fa-regular fa-heart"></i>
            <i class="fa-solid fa-bag-shopping"></i>
        </div>
    
    </header>
    </template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;

header{
    @include flex();
    padding: 10px 17%;
    background-color: rgb(255, 104, 1);
    color: white;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
}

.logo{
    min-width: 100px;
    max-width: 100px
};

ul{
    display: flex;
    gap: 10px;

    li{
        list-style-type: none;
        a{
            text-decoration: none;
            color: white;
        }
    }
}

.icon{
    i{
        padding: 0 3px;
        cursor: pointer;
    }
}

@media screen and (max-width: 550px){
        header{
           flex-direction: column;
           gap: 10px;
        }
    }

</style>
