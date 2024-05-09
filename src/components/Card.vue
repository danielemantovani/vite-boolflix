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
        getImageUrl(name){
            return new URL ('./assets/img/${name}.png', import.meta.url).href;
    }
    }
};
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h3 class="text-center">{{ cardObj.title }}</h3>
            <h6 class="text-center">{{ cardObj.original_title }}</h6>
            <img :src="getImageUrl(cardObj.original_language)" alt="">
            <p class="text-center">{{ cardObj.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>