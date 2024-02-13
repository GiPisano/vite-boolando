<script>
export default {
    props:{
        links: Array, 
        iconHeader: Array,
    },

    methods:{
        activeGenders(index) {
            this.links.forEach((link, i) => {
                if (i == index) {
                    link.active = true;
                } else {
                    link.active = false;
                }
            });
        },
        
        activeIconLink(index) {
            this.links.forEach((iconHeader, i) => {
                if (i == index) {
                    iconHeader.active = true;
                } else {
                    iconHeader.active = false;
                }
            });
        },
    }
}
</script>

<template>
    <header>

        <div>
            <ul>
                <li v-for="(link, index) in links" :class="link.active ? 'active' : ''" @click="activeGenders(index)">
                    <a href="#">{{ link.geneder }}</a>
                </li>
            </ul>
        </div>
        <div class="logo">
            <img src='../assets/img/boolean-logo.png' alt="">
        </div>
        
        <div class="icon" >
            <i v-for="(icon, index) in iconHeader"
            @click="activeIconLink(index)" 
            :class="icon.class, icon.active ? 'active' : ''"></i>
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
    // position: fixed;
    // top: 0;
    // right: 0;
    // left: 0;
    // z-index: 1;
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
        padding: 5px;
        a{
            text-decoration: none;
            color: inherit;
        }
    }
}

.active{
    color: black;
}

.icon{
    i{
        padding: 5px;
        cursor: pointer;

        &.activeIcon{
            color: black;
        }
    }

}

@media screen and (max-width: 550px){
        header{
           flex-direction: column;
           gap: 10px;
        }
    }

</style>
