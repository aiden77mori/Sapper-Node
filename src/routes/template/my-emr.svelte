<script context='module'>

    export async function preload(page, session) {
        try {
            const res = await this.fetch('./template/myemr.json');
            if(res.ok) {
                const usetemplates = await res.json();
                return {usetemplates};
            }

        } catch (e) {
            console.error(e.message);
        }
    }

</script>

<script>

    export let usetemplates;

</script>

<style>
	
    .new-tempate-part h2 {
        font-weight: 700;
    }

    .template-box {
        border: 1px solid grey;
        border-radius: 5px;
        box-shadow: 3px 3px 3px grey;
        /* height: 300px; */
        background-color: #f7f6f6;
    }

    .template-box .template-content {
        text-align: center;
        margin-top: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .template-box .template-content .template-first .input-template-table, th, td {
        font-size: 16px;
        border: 1px solid grey;
        padding: 5px;
        border-collapse: collapse;
    }
    .template-box .template-content .template-first .input-template-table thead th {
        color: white;
    }
    .template-box .template-content .template-first {
        width: 90%;
    }
    .template-box .template-content .template-first .input-template-table {
        width: 100%;
    }
    .template-box .template-content .template-first .input-template-table th {
        background-color: #0050ffd1;
    }
    .template-box .template-content .template-second .patient-info div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
    }

    .template-box .template-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 50px;
        margin-bottom: 30px;
    }
    .template-box .template-footer a {
        width: 75px;
        height: 30px;
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
            display: flex;
            flex-direction: column;
        }
        .template-box .template-content .template-second .patient-info div {
            display: flex;
            flex-direction: column;
            margin-top: 5px;
        }
    }

</style>

<svelte:head>
	<title>My EMR</title>
</svelte:head>

<div class='new-tempate-part'>
    <h2>My EMR</h2>
    <div class="template-box">      
        <div class="template-content">
            <div class='template-first'>
                <table name="templateName" id="templateName" class="input-template-table">
                    <thead>
                        <th>templateName</th>
                        <th>patient_name</th>
                        <th>patient_last_name</th>
                        <th>patient_gender</th>
                        <th>patient_option</th>
                        <th>date</th>
                    </thead>
                    <tbody>
                        {#if usetemplates.length === 0}
                            <tr>
                                there is no data
                            </tr>
                        {:else}
                            {#each usetemplates as tn, i}
                            <tr>
                                <td>{tn.template_name}</td>
                                <td>{tn.patient_name}</td>
                                <td>{tn.patient_last_name}</td>
                                <td>{tn.patient_gender}</td>
                                <td>{tn.patient_option}</td>
                                <td>{tn.date}</td>
                            </tr>
                            {/each}
                        {/if}
                    </tbody>
                </table>
            </div>
        </div>
        <div class="template-footer">
            <a href="." class="btn-newTemplate">Cancel</a>
        </div>    
    </div>

</div>