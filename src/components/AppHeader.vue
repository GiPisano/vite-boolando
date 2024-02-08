<script>
export default {
    data(){
        return{
            links: ['Donna', 'Uomo', 'Bambini'],
        }
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

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 17%;
    background-color: rgb(255, 104, 1);
    color: white;
}
.logo{
    max-width: 100px;
};

ul{
    display: flex;
    gap: 20px;

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

</style>
