<script>
export default {
    data(){
        return{
            title: 'footer',
        }
    }
}
</script>

<template>
   <div class="container-footer">
            <div>
                <h4>Boolando s.r.l</h4>
                <nav>
                    <ul>
                        <li><a href="#">Informazioni legali</a></li>
                        <li><a href="#">Inormativa sulla privacy</a></li>
                        <li><a href="#">Diritto di recesso</a></li>
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
.container-footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
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
