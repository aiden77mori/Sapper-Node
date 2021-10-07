<script context='module'>

    export async function preload(page, session) {
        try {
            const res = await this.fetch('./template/newtemplate.json');
            if(res.ok) {
                const templates = await res.json();
                return {templates};
            }

        } catch (e) {
            console.error(e.message);
        }
    }

</script>

<script>

    import { goto } from '@sapper/app';
    
    export let templates;

    let i = '#';
    let value = {};
    let name = '', last_name = '', gender = '1', option = '';

    $: selected = templates[i];
	$: reset_inputs(selected);

    function clearState() {
        i = '#';
    }

    function reset_inputs(template) {
        value = template ? template : '';
        name = value.name;
        last_name = value.last_name;
        gender = value.gender;
        option = value.option;
    }

    async function saveTemplateName() {
        if (i === '#') {
            alert("Please select template name");
            return ;
        }
        let useTemplateInfo = {template_id: value.template_id, patient_id: value.patient_id, doctor_id: value.doctor_id, patient_name: name, patient_last_name: last_name, patient_gender: gender, patient_option: option};
        const functionName = 'useTemplate';
        const tmpName = { functionName, useTemplateInfo };
        try {
                const options = {
                    method: 'POST',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify(tmpName)
                }
                const path = './template/newtemplate.json';
                const res = await fetch(path, options)
                if(res.ok) {
                    alert('successfully saved');
                    clearState();
                    goto('/template/edit-template');
                }
                
            } 
            catch (e) {
                const error = e.message;
        }
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
        background-color: #f7f6f6;
    }

    .template-box .template-content {
        text-align: center;
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .template-box .template-content .template-first .input-template {
        width: 250px;
        height: 30px;
        padding-left: 10px;
        border-radius: 5px;
        font-size: 16px;
        border: 1px solid grey;
    }
    .template-box .template-content .template-first .input-template:focus {
        outline: none;
        border: 1px solid #db7b29;
    }
    .template-box .template-content .template-first span {
        font-weight: 600;
        font-size: 16px;
    }
    .template-box .template-content .template-second select:not(#gender) {
        width: 250px;
        height: 30px;
        padding-left: 10px;
        font-size: 16px;
        border-radius: 5px;
    }
    .template-box .template-content .template-second span {
        font-weight: 600;
        font-size: 16px;
    }
    .template-box .template-content .template-second .patient-info {
        margin-top: 20px;
    }
    .template-box .template-content .template-second .patient-info div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
    }
    .template-box .template-content .template-second .patient-info div input {
        width: 230px;
        height: 20px;
        padding-left: 10px;
        font-size: 16px;
        border: 1px solid grey;
    }
    .template-box .template-content .template-second .patient-info div input:focus {
        outline: none;
        border: 1px solid #db7b29;
    }
    .template-box .template-content .template-second .patient-info div #gender {
        width: 244px;
        height: 25px;
        padding-left: 8px;
        font-size: 16px;
    }

    .template-box .template-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 50px;
        margin-bottom: 30px;
    }
    .template-box .template-footer button {
        width: 100px;
        height: 35px;
        background-color: #3264d1;
        border: 1px solid #3264d1;
        color: white;
        border-radius: 5px;

		cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
    }
    .template-box .template-footer button:after {
		content: "☑";
        font-size: 16px;
		position: absolute;
		opacity: 0;  
		top: 5px;
		left: -10px;
		transition: 0.5s;
	}
	.template-box .template-footer button:hover{
		padding-right: 10px;
		padding-left: 20px;
	}
	.template-box .template-footer button:hover:after {
		opacity: 1;
		left: 10px;
	}
    .template-box .template-footer a {
        width: 75px;
        background-color: #3264d1;
        color: white;
        border-radius: 5px;
		border: 1px solid #3264d1;
		text-decoration: none;

        text-align: right;
        padding-right: 30px;
		padding-top: 3px;
        cursor: pointer;
		display: inline-block;
		position: relative;
		transition: 0.5s;
    }
    .template-box .template-footer a:after {
		content: '☒';
        font-size: 16px;
		position: absolute;
		opacity: 0;  
		top: 3px;
		left: -10px;
		transition: 0.5s;
	}
	.template-box .template-footer a:hover{
		padding-right: 25px;
		padding-left: 5px;
	}
	.template-box .template-footer a:hover:after {
		opacity: 1;
		left: 10px;
	}

    @media screen and (max-width: 600px) {
        .template-box .template-content {
            /* text-align: center; */
            /* margin-top: 50px; */
            display: flex;
            flex-direction: column;
            /* justify-content: space-around; */
        }
        .template-box .template-content .template-second {
            margin-top: 20px;
        }
        .template-box .template-content .template-second .patient-info div {
            display: flex;
            flex-direction: column;
            margin-top: 5px;
        }
    }

</style>

<svelte:head>
	<title>Use Template</title>
</svelte:head>

<div class='new-tempate-part'>
    <h2>Use Template</h2>
    <div class="template-box">      
        <div class="template-content">
            <div class='template-first'>
                <span>Select Template: </span>
                <select name="templateName" id="templateName" class="input-template" bind:value={i}>
                    <option value="#">--- select template ---</option>
                    {#each templates as tn, i}
                        <option value={i}>{tn.template_name}</option>
                    {/each}
                </select>
            </div>
            <div class='template-second'>
                <div class="patient-info">
                    <div>
                        <span>Name: </span><input type="text" bind:value={name} />
                    </div>
                    <div>
                        <span>Last Name: </span><input type="text" bind:value={last_name} />
                    </div>
                    <div>
                        <span>Gender: </span>
                        <select name="gender" id="gender" bind:value={gender}>
                            <option value="1">M</option>
                            <option value="0">F</option>
                        </select>
                    </div>
                    <div>
                        <span>Option: </span><input type="text" bind:value={option} />
                    </div>
                </div>
            </div>
        </div>
        <div class="template-footer">
            <button on:click={saveTemplateName}>Save</button>
            <a href="." class="btn-newTemplate">Cancel</a>
        </div>    
    </div>

</div>