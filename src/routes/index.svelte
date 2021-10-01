<script>
	// import successkid from 'images/successkid.jpg';

	
</script>

<style>
	/* h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	} */
	
	.erm-part {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.erm-template {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border: 3px solid #96be06;
		border-radius: 5px;
		height: 70px;
		text-align: center;
		padding: 5px;
		box-shadow: 5px 5px 5px grey;
	}

	.erm-template a {
		width: 150px;
		height: 30px;
		border: 1px solid black;
		border-radius: 5px;
		background-color: #96be06;
		color: white;
		text-decoration: none;
	}

</style>

<svelte:head>
	<title>Svelte Project With Sapper</title>
</svelte:head>

<div class='erm-part'>

	<div class='erm-template'>
		<a href="template/new-template" class="btn-newTemplate">New Template</a>
		<a href="template/edit-template" class="btn-editTemplate">Edit Template</a>
		<!-- <button class="btn-newTemplate"></button> -->
		<!-- <button class="btn-editTemplate">Edit Template</button> -->
	</div>

	<div class='erm-template'>
		<a href="new-user" class="btn-newUser">New User</a>
		<a href="edit-user" class="btn-editUser">Edit User</a>
		<!-- <button class="btn-newTemplate">New User</button> -->
		<!-- <button class="btn-editTemplate">Edit User</button> -->
	</div>

	<div class='erm-template'>
		<a href="new-group" class="btn-newGroup">New Group</a>
		<a href="edit-group" class="btn-editGroup">Edit Group</a>
		<!-- <button class="btn-newTemplate">New Group</button> -->
		<!-- <button class="btn-editTemplate">Edit Group</button> -->
	</div>

</div>

<!-- <h1>Great success!</h1> -->

<!-- <figure>
	<img alt="Success Kid" src="{successkid}">
	<figcaption>Have fun with Sapper!</figcaption>
</figure> -->

<!-- <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p> -->

