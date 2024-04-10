<!-- FormComponent.svelte -->
<script>
	import { postJobDataStore } from './datastore.js';
	import { formsubmission } from './action.js';
	import { onDestroy } from 'svelte';

    let sRate = -1;
    let sTitle = '';
    let sDesc = '';
    let showSbtdFrm = false;

    const unsubscribe = postJobDataStore.subscribe(value => {
        console.log(value)
        sRate = value.rate;
        sTitle = value.title;
        sDesc = value.desc;
        showSbtdFrm = value.isSubmitted;

    });

    onDestroy(()=>{
        unsubscribe();
    });

	let title = '';
	let description = '';
	let rate = '';

	// Function to handle form submission
	function handleSubmit(event) {
		event.preventDefault(); // Prevent the default form submission behavior

		formsubmission(title, description, rate);
		//console.log('Form submitted:', { title, description, rate });

		// Optionally, you can clear the form fields after submission
		title = '';
		description = '';
		rate = '';
	}


    let isLoading = true; // Set this variable based on your loading status

// Simulating a loading process (remove this in your actual implementation)
setTimeout(() => {
    isLoading = false; // Set isLoading to false after a delay to simulate loading completion
}, 3000); // Simulating a 3-second loading process
</script>

{#if !showSbtdFrm}
<form on:submit={handleSubmit}>
	<label for="title">Title:</label>
	<input type="text" id="title" bind:value={title} required />
	<br />
	<br />
	<label for="description">Description:</label>
	<textarea id="description" bind:value={description} required></textarea>
	<br />
	<br />
	<label for="rate">Rate:</label>
	<input type="number" id="rate" bind:value={rate} required />

	<button type="submit">Submit</button>
</form>
{/if}

{#if showSbtdFrm}
    
<div>
<h2>Title: {sTitle}</h2>
<h3>Rate: {sRate}</h3>
<h3>Description: {sDesc}</h3>
</div>

{/if}



{#if isLoading}
    <div class="spinner">
        
    </div>
    <h4>Loading...</h4>
{:else}
    <div>
        <!-- Your content goes here -->
        Content loaded successfully!
    </div>
{/if}

<style>
       .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left-color: #7983ff; /* Change the color as needed */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 20px auto;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
