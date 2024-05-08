<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div>
        <input type="text">
        <button @click = "$emit ('filter')">Cerca</button>
    </div>
</template>

<style scoped lang="scss"></style>