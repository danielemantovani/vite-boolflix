<script>
export default {
    props: {
        cardObj: Object,
    },
    data (){
        return{
            
        }
    }
};
</script>

<template>
    <div class="card">
        <div>
            <h4>{{ cardObj.title }}</h4>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>