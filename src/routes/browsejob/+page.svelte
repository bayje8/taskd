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

<p>This is place holder page for browse jobs</p>

<div class="jobs">
{#each data.jobs as {title, company, location, salary, createdOn, description}}
	<div class="card">		
		<div class="card-header">{title}</div>
		<div class="card-body">
			<h3>{company}</h3>
			<p>{description}</p>
		</div>
	</div>
{/each}
</div>
