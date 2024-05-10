<script>
export default {
    props: {
        cardObj: Object,
    },
    data() {
        return {
            flagArray: ["en", "es", "fr", "it", "ja", "pt"],
        }
    },
    methods:{
        //funzione di default per gestire le immagini con path dinamico dove con name indichiamo il nome del file della bandiera presente nella cartella assets, img
        getImageUrl(name){
            return new URL ('../assets/img/' + name + '.png', import.meta.url).href; //concatenazione
            // return new URL (`../assets/img/${name}.png`, import.meta.url).href; template literals
        },
        getflags (){
            if (this.flagArray.includes (this.cardObj.original_language)){
                return true
            } else{
                return false
            }
        }
    }
};
</script>

<template>
    <div class="card">
        <div class="card-body text-center">
            <img  :src="`https://image.tmdb.org/t/p/w342/${cardObj.poster_path}`" :alt=(cardObj.title)>
            <!-- titolo film -->
            <h3 v-if="cardObj.title">{{ cardObj.title }}</h3>
            <!-- titolo serie tv -->
            <h3 v-else="cardObj.name">{{ cardObj.name }}</h3>
            <!-- titolo originale film -->
            <h6 v-if="cardObj.original_title">{{ cardObj.original_title }}</h6>
            <!-- titolo originale serie tv -->
            <h6 v-else="cardObj.original_name">{{ cardObj.original_name }}</h6>
            <!-- mostra l'icona della bandiera in base alla lingua se la bandiera è presente nell'array e quindi c'è l'immagine corrispondente -->
            <img class="flag" v-if="getflags()"
            :src="getImageUrl(cardObj.original_language)" 
            :alt= "(cardObj.original_language)"
            >
            <!-- altrimenti stampa la lingua in lettere -->
            <p v-else>{{ cardObj.original_language }}</p>
            <p>{{ cardObj.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card{
        .flag{
            width: 30px;
            height: 20px;
        }
    }
</style>