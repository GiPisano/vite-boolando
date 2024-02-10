<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default{
  data(){
    return{
      links: ['Donna', 'Uomo', 'Bambini'],
      clothes:[
                {
                imageFront: '1.webp',
                imageBack: '1b.webp',
                sale: '50%',
                brand: 'Levi\'s',
                description: 'RELAXED FIT TEE UNISEX',
                discountedPrice: '14,99 €',
                price: '29,99 €',
                isInFavorites: false,
                },

                {
                imageFront: '2.webp',
                imageBack: '2b.webp',
                sale: '30%',
                brand: 'Guess',
                description: 'ROSES TEE',
                discountedPrice: '20,99 €',
                price: '29,99 €', 
                isInFavorites: false,
                },

                {
                imageFront: '3.webp',
                imageBack: '3b.webp',
                sale: '30%',
                brand: 'Come Zucchero Filato',
                description: 'VOGLIA DI COLORI PASTELLO',
                discountedPrice: '129,99 €',
                price: '184,99€', 
                isInFavorites: false,
                },

                {
                imageFront: '4.webp',
                imageBack: '4b.webp',
                sale: '50%',
                brand: 'Levi\'s',
                description: 'TEE UNISEX',
                discountedPrice: '14,99 €',
                price: '29,99 €', 
                isInFavorites: false,
                },

                {
                imageFront: '5.webp',
                imageBack: '5b.webp',
                brand: 'Maya Deluxe',
                description: 'STRIPE BODICE',
                price: '99.99 €', 
                isInFavorites: false,
                },

                {
                imageFront: '6.webp',
                imageBack: '6b.webp',
                brand: 'Esprit',
                description: 'MAGLIONE - BLACK',
                price: '29,99 €', 
                isInFavorites: false,
                },

      ],
      information:['Informazioni legali', 'Inormativa sulla privacy', 'Diritto di recesso'],
    }
  },

  components:{
    AppHeader, AppMain, AppFooter
  }
}
</script>

<template>

  <app-header :links="links"></app-header>
  <app-main :clothes="clothes"></app-main>
  <app-footer :information="information"></app-footer>

</template>

<style lang="scss">
  @use './styles/general.scss';
</style>
