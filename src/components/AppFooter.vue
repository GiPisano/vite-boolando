<script>
export default {

    props:{
        information: Array,
    }
}
</script>

<template>
   <div class="container-footer">
            <div>
                <h4>Boolando s.r.l</h4>
                <nav>
                    <ul>
                        <li v-for="info in information"><a href="#">{{ info }}</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <h5>trovaci anche su</h5>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-square-pinterest"></i>
                <i class="fa-brands fa-square-youtube"></i>
            </div>
        </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;
.container-footer{
    @include flex();
    padding: 5px 17%;
    background-color: rgb(26, 26, 26);
    color: white;
}

li{
    list-style-type: none;
    display: inline-block;
    padding: 5px 10px 10px 0;

    a{
        text-decoration: none;
        color: white;
        font-size: 10px;
    }
}

i{
    padding: 5px 10px 10px 0;
}
</style>
