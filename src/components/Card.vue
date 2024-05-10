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
    computed: {
        // se c'è title facciamo cardObj.title altrimenti facciamo cardObj.name
        cardTitle() {
            return this.cardObj.title ? this.cardObj.title : this.cardObj.name
        },
        cardOriginalTitle() {
            return this.cardObj.original_title ? this.cardObj.original_title : this.cardObj.original_name
        }
    },
    methods: {
        //funzione di default per gestire le immagini con path dinamico dove con name indichiamo il nome del file della bandiera presente nella cartella assets, img
        getImageUrl(name) {
            return new URL('../assets/img/' + name + '.png', import.meta.url).href; //concatenazione
            // return new URL (`../assets/img/${name}.png`, import.meta.url).href; template literals
        },
        getflags() {
            if (this.flagArray.includes(this.cardObj.original_language)) {
                return true
            } else {
                return false
            }
        }
    }
};
</script>

<template>
    <div class="card">
        <div class="card-body text-center">
            <img :src="`https://image.tmdb.org/t/p/w342/${cardObj.poster_path}`" :alt=(cardObj.title)>
            <!-- <h3>{{ cardObj.title ? cardObj.title : cardObj.name }}</h3> -->
            <h3>{{ cardTitle }}</h3>
            <h6>{{ cardOriginalTitle }}</h6>
            <!-- mostra l'icona della bandiera in base alla lingua se la bandiera è presente nell'array e quindi c'è l'immagine corrispondente -->
            <img class="flag" v-if="getflags()" :src="getImageUrl(cardObj.original_language)"
                :alt="(cardObj.original_language)">
            <!-- altrimenti stampa la lingua in lettere -->
            <p v-else>{{ cardObj.original_language }}</p>
            <p>{{ cardObj.vote_average }}</p>
            <!-- stelle -->
            <i class="fa-star" v-for="star in 5" :class="{
                fas: star <= Math.ceil(cardObj.vote_average / 2),
                far: star > Math.ceil(cardObj.vote_average / 2),
            }"></i>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    .flag {
        width: 30px;
        height: 20px;
    }
}
</style>