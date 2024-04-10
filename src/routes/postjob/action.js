import { postJobDataStore } from "./datastore";


export function formsubmission(title, description, rate) {
    console.log('title: ' + title + ' description: ' + description + ' rate: ' + rate);
    updateRate(title, description, rate);
};


function updateRate(title, description, rate) {
    postJobDataStore.set({
        title: title,
        desc: description,
        rate: rate,
        isSubmitted: true
    })
}