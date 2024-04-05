import { jobs } from '$lib/data-source-jobs.js';


export function load() {
    console.log(jobs);
    return { jobs };
}

