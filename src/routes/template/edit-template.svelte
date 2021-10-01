<script>
    
    let people = {
        general: {
            bp: 150,
            puls: 78,
            restrate: 16,
            temp: 98,
            height: 73,
            weight: 240,
            bmi: 31.66,
            chiefcomplaint: '',
            hpi: '',
            subject: '',
            allegies: '',
            currentmeds: '',
            medicalhistory: '',
            socialhistory: '',
            familyhistory: '',
            object: '',
            assessment: '',
            plan: '',
        }
    }

    function saveTemplateInfo() {
        alert("SaveTemplageInfo");
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
        height: 40px;        
    }
    .edit-template-box .edit-template-content .patient-info .info-tabs > button.active {
        background-color: white;        
    }
    .edit-template-box .edit-template-content .patient-info .info-text {
        border: 1px solid grey;
        height: 160px;
        padding: 10px;
        margin-top: 10px;
    }
    .edit-template-box .edit-template-content .patient-info .info-text > #info-textarea {
        width: 99.5%;
        height: 97%;
        background-color: #f7f6f6;
    }
    .edit-template-box .edit-template-content .patient-info .info-text > #info-textarea:focus {
        border: 1px solid #db7b29;
        outline: none;
    }

    .edit-template-box .edit-template-footer {
        text-align: center;
    }
    .edit-template-box .edit-template-footer button {
        width: 100px;
        height: 35px;
        background-color: #96be06;
        color: white;
        border-radius: 5px;
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
            <select name="templateName" id="templateName">
                <option value="general">general</option>
                <option value="general">urgent</option>
                <option value="general">simple</option>
            </select>
        </div>
        <div class="edit-template-content">
            <div class="patient-value">
                <div class="bp">
                    <span>BP</span>
                    <input type="text" />
                </div>
                <div class="puls">
                    <span>Puls</span>
                    <input type="text" />
                </div>
                <div class="resprate">
                    <span>Resp, Rate</span>
                    <input type="text" />
                </div>
                <div class="temp">
                    <span>Temp</span>
                    <input type="text" />
                </div>
                <div class="height">
                    <span>Height</span>
                    <input type="text" />
                </div>
                <div class="weight">
                    <span>Weight</span>
                    <input type="text" />
                </div>
                <div class="bmi">
                    <span>BMI</span>
                    <input type="text" />
                </div>
            </div>
            <div class="patient-info">
                <div class="info-tabs">
                    <button class="btn-info active">Chief Complaint</button>
                    <button class="btn-info">HPI</button>
                    <button class="btn-info">Subject</button>
                    <button class="btn-info">Allergies</button>
                    <button class="btn-info">Current Meds</button>
                    <button class="btn-info">Medical History</button>
                    <button class="btn-info">Social History</button>
                    <button class="btn-info">Family History</button>
                    <button class="btn-info">Object</button>
                    <button class="btn-info">Assessment</button>
                    <button class="btn-info">Plan</button>
                </div>
                <div class="info-text">
                    <textArea id="info-textarea"></textArea>
                </div>
            </div>
        </div>
        <div class="edit-template-footer">
            <button on:click={saveTemplateInfo}>Save</button>
        </div>    
    </div>

</div>