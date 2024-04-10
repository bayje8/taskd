import { writable } from "svelte/store";

export const postJobDataStore = writable({
    rate: -1,
    tilte: '',
    desc: '',
    isSubmitted: false
});


