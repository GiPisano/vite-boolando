<script>
import { store } from './store';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


import axios from 'axios';

export default{
  data(){
    return{
      store,

      links: [
        {
          geneder: 'Donna',
          active: false
        },
        {
          geneder: 'Uomo',
          active: false
        },
        {
          geneder: 'Bambini',
          active: false
        },
      ],

      iconHeader: [
        {
          class: 'fa-regular fa-user',
          active: false
        },
        {
          class: 'fa-regular fa-heart',
          active: false
        },
        {
          class: 'fa-solid fa-bag-shopping',
          active: false
        }
      ],

      clothes: [],

      information:['Informazioni legali', 'Inormativa sulla privacy', 'Diritto di recesso'],
    }
  },

  components:{
    AppHeader, AppMain, AppFooter
  },

  created(){
        axios.get(`${store.apiUri}`).then((res) => {
            this.clothes = res.data;
        })
    }
}
</script>

<template>

  <app-header :links="links" :iconHeader="iconHeader"></app-header>
  <app-main :clothes="clothes"></app-main>
  <app-footer :information="information"></app-footer>

</template>

<style lang="scss">
  @use './styles/general.scss';
</style>
