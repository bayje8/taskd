<script>
    export let data;
</script>

<style>
    /* styles.css */
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.card-header {
  font-weight: bold;
  margin-bottom: 10px;
}

.card-body {
  color: #555;
}

</style>

<p>This is place holder page for browse freelancers</p>

<div class="jobs">
{#each data.filteredProfiles as {title, name, rating, image, skills}}
	<div class="card">		
		<div class="card-header">{title}</div>
		<div class="card-body">
			<h3>{name}</h3>
            <h3>{rating}</h3>
			<p>{skills}</p>
		</div>
	</div>
{/each}
</div>
