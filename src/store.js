import {reactive} from "vue";

export const store = reactive ({
    apiKey: "dd456b01aad9820e69508176c79e4956", //chiave personale 
    searchQuery: "", //stringa vuota da collegare nell'imput con v-model per filtrare i titoli in base a cioò che digitiamo
    moviesArray: [], 
    TvArray: [],
})