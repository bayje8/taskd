import { profiles } from  '$lib/data-source-freelancers.js';

export function load(){
    console.log(profiles);
    
    return { filteredProfiles: profiles.map((x) => ({
        title: x.title,
        name: x.name,
        rating: x.rating,
        image: x.image,
        skills: x.skills
    })) };
};