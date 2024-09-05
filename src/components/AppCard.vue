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
        },
    }
};
</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="front">
                <img :src="`https://image.tmdb.org/t/p/w342/${cardObj.poster_path}`" :alt="cardObj.title" />
            </div>
            <div class="back">
                <h3 class="mb-3">{{ cardTitle }}</h3>
                <h6 class="mb-3">{{ cardOriginalTitle }}</h6>
                <img class="flag mb-3" v-if="getflags()" :src="getImageUrl(cardObj.original_language)" :alt="(cardObj.original_language)" />
                <p class="mb-3" v-else>{{ cardObj.original_language }}</p>
                <div>
                    <p>Voto: {{ cardObj.vote_average }}</p>
                </div>
                
                <div>
                    <i class="fa-star text-danger" v-for="star in 5" :class="{
                    fas: star <= Math.ceil(cardObj.vote_average / 2),
                    far: star > Math.ceil(cardObj.vote_average / 2),
                    }"></i>
                </div>
                
            </div>
        </div>
    </div>
</template>



<style scoped lang="scss">

.flip-card {
    background-color: transparent;
    width: 18rem;
    height: 450px;
    cursor: pointer;
    perspective: 1000px;

    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d; 
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

        &:hover {
            transform: rotateY(180deg);
        }
    }

    .front, .back {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 20px;
        backface-visibility: hidden; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        box-sizing: border-box;
    }

    .front {
        background-color: white;
        z-index: 2;
    }

    .back {
        background-color: black;
        color: white;
        transform: rotateY(180deg); 
    }
}

.flag {
    width: 30px;
    height: 20px;
}
</style>