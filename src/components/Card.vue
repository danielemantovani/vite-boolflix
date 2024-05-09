<script>
export default {
    props: {
        cardObj: Object,
    },
    data() {
        return {

        }
    },
    methods:{
        //funzione di default per gestire le immagini con path dinamico dove con name indichiamo il nome del file della bandiera presente nella cartella assets, img
        getImageUrl(name){
            return new URL ('../assets/img/' + name + '.png', import.meta.url).href; //concatenazione
            // return new URL (`../assets/img/${name}.png`, import.meta.url).href; template literals
        }   
    }
};
</script>

<template>
    <div class="card">
        <div class="card-body text-center">
            <h3>{{ cardObj.title }}</h3>
            <h6>{{ cardObj.original_title }}</h6>
            <img 
            :src="getImageUrl(cardObj.original_language)" 
            :alt= "(cardObj.original_language)"
            >
            <p>{{ cardObj.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card{
        img{
            width: 30px;
            height: 20px;
        }
    }
</style>