<script>
	
</script>

<style>
	
	.erm-part {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.erm-template {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border: 3px solid #3264d1;
		border-radius: 5px;
		height: 80px;
		/* text-align: center; */
		padding: 5px;
		box-shadow: 5px 5px 5px grey;
	}

	.erm-template a {
		width: 150px;
		height: 30px;
		background-color: #3264d1;
		border: 1px solid #3264d1;
		border-radius: 5px;
		color: white;
		text-decoration: none;
		padding-left: 60px;
		padding-top: 5px;

		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}
	.erm-template a:after {
		content: '»';
		font-size: 20px;
		position: absolute;
		opacity: 0;  
		top: 1px;
		right: -10px;
		transition: 0.5s;
	}
	.erm-template a:hover{
		padding-right: 20px;
		padding-left: 40px;
	}
	.erm-template a:hover:after {
		opacity: 1;
		right: 10px;
	}

	.my-emr-template {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		border: 3px solid #3264d1;
		border-radius: 5px;
		height: 38px;
		/* text-align: center; */
		padding: 5px;
		box-shadow: 5px 5px 5px grey;
	}

	.my-emr-template a {
		width: 150px;
		height: 30px;
		background-color: #3264d1;
		border: 1px solid #3264d1;
		border-radius: 5px;
		color: white;
		text-decoration: none;
		padding-left: 60px;
		padding-top: 5px;

		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
	}
	.my-emr-template a:after {
		content: '»';
		font-size: 20px;
		position: absolute;
		opacity: 0;  
		top: 1px;
		right: -10px;
		transition: 0.5s;
	}
	.my-emr-template a:hover{
		padding-right: 20px;
		padding-left: 40px;
	}
	.my-emr-template a:hover:after {
		opacity: 1;
		right: 10px;
	}

	

</style>

<svelte:head>
	<title>ERM Part</title>
</svelte:head>

<div class='erm-part'>

	<div class='erm-template'>
		<a rel="prefetch" href="template/new-template" class="btn-newTemplate"><span>Use Template</span></a>
		<a rel="prefetch" href="template/edit-template" class="btn-editTemplate"><span>Edit Template</span></a>
	</div>
	<div class='my-emr-template'>
		<a rel="prefetch" href="template/my-emr" class="btn-newTemplate"><span>My EMR</span></a>
	</div>

</div>
