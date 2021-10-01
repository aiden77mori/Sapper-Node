<script>

    let newTemplateName = '';

    function saveTemplateName() {
        alert("Template Name: " + newTemplateName);
        newTemplateName = '';
    }

</script>

<style>
	
    .new-tempate-part h2 {
        font-weight: 700;
    }

    .template-box {
        border: 1px solid grey;
        border-radius: 5px;
        box-shadow: 3px 3px 3px grey;
        height: 300px;
        background-color: #f7f6f6;
    }

    .template-box .template-content {
        text-align: center;
        margin-top: 50px;
    }
    .template-box .template-content .input-template {
        width: 300px;
        height: 30px;
        padding-left: 10px;
        border-radius: 5px;
        font-size: 16px;
        border: 1px solid grey;
    }
    .template-box .template-content .input-template:focus {
        outline: none;
        border: 1px solid #db7b29;
    }
    .template-box .template-content span {
        font-weight: 600;
        font-size: 16px;
    }

    .template-box .template-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 100px;
        text-align: center;
    }
    .template-box .template-footer button {
        width: 100px;
        height: 35px;
        background-color: #96be06;
        color: white;
        border-radius: 5px;
    }
    .template-box .template-footer a {
        width: 100px;
        /* height: 33px; */
        background-color: #96be06;
        color: white;
        border-radius: 5px;
		border: 1.5px solid black;
		text-decoration: none;
    }
    .template-box .template-footer a > label {
        margin-top: 15px;

    }

</style>

<svelte:head>
	<title>New Template</title>
</svelte:head>

<div class='new-tempate-part'>
    <h2>New Template</h2>
    <div class="template-box">      
        <!-- <div class="template-header"></div> -->
        <div class="template-content">
            <span>Template Name: </span>
            <input type="text" bind:value={newTemplateName} class="input-template" placeholder="please input template name..." />
        </div>
        <div class="template-footer">
            <button on:click={saveTemplateName}>Submit</button>
            <!-- <button>Cancel</button> -->
            <a href="." class="btn-newTemplate"><label>Cancel</label></a>
        </div>    
    </div>

</div>