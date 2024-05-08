<script>

import {store} from "../store.js";

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div>
        <input type="text" v-model="store.searchQuery">
        <button @click = "$emit ('filter')">Cerca</button>
    </div>
</template>

<style scoped lang="scss"></style>