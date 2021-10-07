<script context='module'>

    export async function preload(page, session) {
        try {
            const res = await this.fetch('./template/edittemplate.json');
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

    export let templates;

    let i = "#";
    let value = '';
    let activeClass = 'Chief Complaint';

    $: selected = templates[i];
	$: reset_inputs(selected);

    function reset_inputs(template) {
		value = template ? template : '';
        if (activeClass !== 'Chief Complaint') {
            activeClass = 'Chief Complaint';
        }
	}

    async function saveTemplateInfo() {
        if(!value) {
            alert("please select template");
            return;
        }
        let functionName = '';
        
        

        try {
            if(value.tmc_id) {
                functionName = 'saveTemplateInfoput';
            } else {
                functionName = 'saveTemplateInfopost';
            }
            const tmpContent = { value, functionName };
            const options = {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(tmpContent)
            }
            const path = './template/edittemplate.json';
            const res = await fetch(path, options);
            if(res.ok) {
                if(value.tmc_id) {
                    alert('successfully updated');
                } else {
                    alert('successfully saved');   
                }
                try {
                    const res = await fetch('./template/edittemplate.json');
                    if(res.ok) {
                        templates = await res.json();
                        return {templates};
                    }

                } catch (e) {
                    console.error(e.message);
                }
            }

        } catch (e) {
            console.error(e.message);
        }
    }

    function makeActive(e) {
        activeClass = e.target.innerText;
    }

</script>

<style>

    .edit-template-part h2 {
        font-weight: 700;
    }

    .edit-template-box {
        border: 1px solid grey;
        border-radius: 5px;
        box-shadow: 3px 3px 3px grey;
        padding: 10px;   
    }
	
    .edit-template-box .edit-template-header span {
        font-weight: 600;
        font-size: 16px;
    }
    .edit-template-box .edit-template-header > #templateName {
        width: 300px;
        height: 30px;
        border-radius: 5px;
        margin-left: 23px;
        padding-left: 5px;
        font-size: 16px;
    }

    .edit-template-box .edit-template-content {
        height: 350px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }
    .edit-template-box .edit-template-content .patient-value {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 800px;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 10px;
        box-shadow: 3px 3px 3px grey;
    }
    .edit-template-box .edit-template-content .patient-value div {
        display: flex;
        flex-direction: column;
    }
    .edit-template-box .edit-template-content .patient-value div span {
        font-weight: 600;
        font-size: 14px;
    }
    .edit-template-box .edit-template-content .patient-value div input {
        width: 100px;
        height: 30px;
        border: 1px solid grey;
        padding-left: 5px;
        background-color: #f7f6f6;
    }
    .edit-template-box .edit-template-content .patient-value div input:focus {
        outline: none;
        border: 1px solid #db7b29;
    }

    .edit-template-box .edit-template-content .patient-info {
        margin-top: 20px;
    }
    .edit-template-box .edit-template-content .patient-info .info-tabs {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 1100px;
    }
    .edit-template-box .edit-template-content .patient-info .info-tabs > button {
        width: 90px;
        height: 35px;        
        font-size: 12px;
    }
    .edit-template-box .edit-template-content .patient-info .info-tabs > button.active {
        background-color: white;        
    }
    .edit-template-box .edit-template-content .patient-info .info-text {
        border: 1px solid grey;
        height: 180px;
        padding: 5px;
        margin-top: 10px;
    }
    .edit-template-box .edit-template-content .patient-info .info-text > .info-textarea {
        width: 99.5%;
        height: 97%;
        background-color: #f7f6f6;
    }
    .edit-template-box .edit-template-content .patient-info .info-text > .info-textarea:focus {
        border: 1px solid #db7b29;
        outline: none;
    }
    .edit-template-box .edit-template-content .patient-info .info-text .textShow {
        display: block;
    }
    .edit-template-box .edit-template-content .patient-info .info-text .textHide {
        display: none;
    }

    .edit-template-box .edit-template-footer {
        text-align: center;
    }
    .edit-template-box .edit-template-footer button {
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
    .edit-template-box .edit-template-footer button:after {
		content: "☑";
        font-size: 16px;
		position: absolute;
		opacity: 0;  
		top: 5px;
		left: -10px;
		transition: 0.5s;
	}
	.edit-template-box .edit-template-footer button:hover{
		padding-right: 10px;
		padding-left: 20px;
	}
	.edit-template-box .edit-template-footer button:hover:after {
		opacity: 1;
		left: 10px;
	}

    @media screen and (max-width: 1024px) {
        .edit-template-box .edit-template-content .patient-info .info-tabs {
            width: 900px;
        }
    }

    @media screen and (max-width: 768px) {
        .edit-template-box .edit-template-content .patient-info .info-tabs {
            width: 680px;
        }
        .edit-template-box .edit-template-content .patient-value {
            width: 600px;
        }
        .edit-template-box .edit-template-content .patient-value div input {
            width: 70px;
            height: 20px;
        }
    }

    @media screen and (max-width: 550px) {
        .edit-template-box .edit-template-content .patient-value {
            width: 300px;
            flex-wrap: wrap;
        }
        .edit-template-box .edit-template-content .patient-info .info-tabs {
            width: 400px;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        .edit-template-box .edit-template-footer {    
            margin-top: 180px;
            margin-bottom: 20px;
        }
    }

    @media screen and (max-width: 400px) {
        .edit-template-box .edit-template-header > #templateName {
            width: 300px;
            margin-left: 0px;
        }
        .edit-template-box .edit-template-content .patient-value {
            width: 250px;
            flex-wrap: wrap;
        }
        .edit-template-box .edit-template-content .patient-info .info-tabs {
            width: 300px;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

</style>

<svelte:head>
	<title>Edit Template</title>
</svelte:head>

<div class='edit-template-part'>

    <h2>Edit Template</h2>
    <div class="edit-template-box">      
        <div class="edit-template-header">
            <span>Select Template: </span>
            <select name="templateName" id="templateName" bind:value={i}>
                <option value="#">--- select template ---</option>
                {#each templates as tn, i}
                    <option value={i}>{tn.name}</option>
                {/each}
            </select>
        </div>
        <div class="edit-template-content">
            <div class="patient-value">
                <div class="bp">
                    <span>BP</span>
                    <input type="text" bind:value={value.bp} />
                </div>
                <div class="puls">
                    <span>Puls</span>
                    <input type="text"  bind:value={value.puls} />
                </div>
                <div class="resprate">
                    <span>Resp, Rate</span>
                    <input type="text" bind:value={value.resprate} />
                </div>
                <div class="temp">
                    <span>Temp</span>
                    <input type="text" bind:value={value.temp} />
                </div>
                <div class="height">
                    <span>Height</span>
                    <input type="text" bind:value={value.height} />
                </div>
                <div class="weight">
                    <span>Weight</span>
                    <input type="text" bind:value={value.weight} />
                </div>
                <div class="bmi">
                    <span>BMI</span>
                    <input type="text" bind:value={value.bmi} />
                </div>
            </div>
            <div class="patient-info">
                <div class="info-tabs">
                    <button class="{activeClass=='Chief Complaint'?'active':''}" on:click={makeActive}>Chief Complaint</button>
                    <button class="{activeClass=='HPI'?'active':''}" on:click={makeActive}>HPI</button>
                    <button class="{activeClass=='Subject'?'active':''}" on:click={makeActive}>Subject</button>
                    <button class="{activeClass=='Allergies'?'active':''}" on:click={makeActive}>Allergies</button>
                    <button class="{activeClass=='Current Meds'?'active':''}" on:click={makeActive}>Current Meds</button>
                    <button class="{activeClass=='Medical History'?'active':''}" on:click={makeActive}>Medical History</button>
                    <button class="{activeClass=='Social History'?'active':''}" on:click={makeActive}>Social History</button>
                    <button class="{activeClass=='Family History'?'active':''}" on:click={makeActive}>Family History</button>
                    <button class="{activeClass=='Object'?'active':''}" on:click={makeActive}>Object</button>
                    <button class="{activeClass=='Assessment'?'active':''}" on:click={makeActive}>Assessment</button>
                    <button class="{activeClass=='Plan'?'active':''}" on:click={makeActive}>Plan</button>
                </div>
                <div class="info-text">
                    <textarea class="info-textarea {activeClass=='Chief Complaint'?'textShow':'textHide'}"  id="chiefcomplaint" bind:value={value.chiefcomplaint} />
                    <textarea class="info-textarea {activeClass=='HPI'?'textShow':'textHide'}" id="hpi" bind:value={value.hpi} />
                    <textarea class="info-textarea {activeClass=='Subject'?'textShow':'textHide'}" id="subject" bind:value={value.subject} />
                    <textarea class="info-textarea {activeClass=='Allergies'?'textShow':'textHide'}" id="allergies" bind:value={value.allergies} />
                    <textarea class="info-textarea {activeClass=='Current Meds'?'textShow':'textHide'}" id="currentmeds" bind:value={value.currentmeds} />
                    <textarea class="info-textarea {activeClass=='Medical History'?'textShow':'textHide'}" id="medicalhistory" bind:value={value.medicalhistory} />
                    <textarea class="info-textarea {activeClass=='Social History'?'textShow':'textHide'}" id="socialhistory" bind:value={value.socialhistory} />
                    <textarea class="info-textarea {activeClass=='Family History'?'textShow':'textHide'}" id="familyhistory" bind:value={value.familyhistory} />
                    <textarea class="info-textarea {activeClass=='Object'?'textShow':'textHide'}" id="object" bind:value={value.object} />
                    <textarea class="info-textarea {activeClass=='Assessment'?'textShow':'textHide'}" id="assessment" bind:value={value.assessment} />
                    <textarea class="info-textarea {activeClass=='Plan'?'textShow':'textHide'}" id="plan" bind:value={value.plan} />
                </div>
            </div>
        </div>
        <div class="edit-template-footer">
            <button on:click={saveTemplateInfo}>Save</button>
        </div>    
    </div>

</div>