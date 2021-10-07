import { initDB } from '@lib/mysql';

const { db } = initDB();

export async function get(req, res) {
  console.log("get");
  try {
    await db.query(`SELECT tm.*, tmc.id as tmc_id, tmc.bp, tmc.puls, tmc.resprate, tmc.temp, tmc.height, tmc.weight, tmc.bmi, tmc.chiefcomplaint, tmc.hpi, tmc.subject, tmc.allergies, tmc.currentmeds, tmc.medicalhistory, tmc.socialhistory, tmc.familyhistory, tmc.object, tmc.assessment, tmc.plan FROM template as tm LEFT JOIN template_content as tmc on tm.id = tmc.template_id ORDER BY tm.id;`, (err, result) => {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(result));
    });

  } catch (e) {
    console.error('index.json.js get:', e);
    res.status(500).json({error: e.message});
  }
}

export function post(req, res) {
  console.log('post');
  var functionName = req.body.functionName;
    if (functionName === 'saveTemplateName') {

      var patientInfo = req.body.value;
      var tmpName = req.body.newTemplateName;
      if (!patientInfo.id) {

         db.query(`INSERT INTO patient (name, last_name, gender, option) VALUES ('${patientInfo.name}', '${patientInfo.last_name}', '${patientInfo.gender}', '${patientInfo.option}')`, (err, result) => {
          if (err) throw err;
          db.query(`SELECT MAX(id) as id FROM patient`, (err, result) => {
            if(err) throw err;
            var pid = JSON.parse(JSON.stringify(result))[0]["id"];
            if(pid) {
              db.query(`INSERT INTO template (name, patient_id, doctor_id) VALUES ('${tmpName}', ${pid}, 1);`, (err, result) => {
                if (err) throw err;
                res.writeHead(200, {
                  'Content-Type': 'application/json'
                });
                res.end(JSON.stringify(result));
              });
            }
          });
        });

      } else {

        db.query(`INSERT INTO template (name, patient_id, doctor_id) VALUES ('${tmpName}', ${patientInfo.id}, 1);`, (err, result) => {
         if (err) throw err;
         res.writeHead(200, {
           'Content-Type': 'application/json'
         });
         res.end(JSON.stringify(result));
       });

      }
      
    } else if (functionName === 'saveTemplateInfopost') {

      var tmpInfo = req.body.value;
       db.query(`INSERT INTO template_content (template_id, doctor_id, patient_id, bp, puls, resprate, temp, height, weight, bmi, chiefcomplaint, hpi, subject, allergies, currentmeds, medicalhistory, socialhistory, familyhistory, object, assessment, plan) VALUES (${tmpInfo.id}, ${tmpInfo.doctor_id}, ${tmpInfo.patient_id}, '${tmpInfo.bp}', '${tmpInfo.puls}', '${tmpInfo.resprate}', '${tmpInfo.temp}', '${tmpInfo.height}', '${tmpInfo.weight}', '${tmpInfo.bmi}', '${tmpInfo.chiefcomplaint}', '${tmpInfo.hpi}', '${tmpInfo.subject}', '${tmpInfo.allergies}', '${tmpInfo.currentmeds}', '${tmpInfo.medicalhistory}', '${tmpInfo.socialhistory}', '${tmpInfo.familyhistory}', '${tmpInfo.object}', '${tmpInfo.assessment}', '${tmpInfo.plan}')`, (err, result) => {
        if(err) throw err;
        res.writeHead(200, {
          'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(result));
      });
      
    } else if (functionName === 'saveTemplateInfoput') {
      var tmpInfo = req.body.value;
      db.query(`UPDATE template_content SET bp='${tmpInfo.bp}', puls='${tmpInfo.puls}', resprate='${tmpInfo.resprate}', temp='${tmpInfo.temp}', height='${tmpInfo.height}', weight='${tmpInfo.weight}', bmi='${tmpInfo.bmi}', chiefcomplaint='${tmpInfo.chiefcomplaint}', hpi='${tmpInfo.hpi}', subject='${tmpInfo.subject}', allergies='${tmpInfo.allergies}', currentmeds='${tmpInfo.currentmeds}', medicalhistory='${tmpInfo.medicalhistory}', socialhistory='${tmpInfo.socialhistory}', familyhistory='${tmpInfo.familyhistory}', object='${tmpInfo.object}', assessment='${tmpInfo.assessment}', plan='${tmpInfo.plan}' WHERE id = ${tmpInfo.tmc_id}`, (err, result) => {
         if(err) throw err;
         res.writeHead(200, {
           'Content-Type': 'application/json'
         });
         res.end(JSON.stringify(result));
       });
    }
}

// export function put(req, res) {
//   console.log("put");
//   var functionName = req.body.functionName;
//   try {
//     if(functionName === 'saveTemplateInfo') {
     
//       var tmpInfo = req.body.value;
//      db.query(`UPDATE template_content SET bp='${tmpInfo.bp}', puls='${tmpInfo.puls}', resprate='${tmpInfo.resprate}', temp='${tmpInfo.temp}', height='${tmpInfo.height}', weight='${tmpInfo.weight}', bmi='${tmpInfo.bmi}', chiefcomplaint='${tmpInfo.chiefcomplaint}', hpi='${tmpInfo.hpi}', subject='${tmpInfo.subject}', allergies='${tmpInfo.allergies}', currentmeds='${tmpInfo.currentmeds}', medicalhistory='${tmpInfo.medicalhistory}', socialhistory='${tmpInfo.socialhistory}', familyhistory='${tmpInfo.familyhistory}', object='${tmpInfo.object}', assessment='${tmpInfo.assessment}', plan='${tmpInfo.plan}' WHERE id = ${tmpInfo.tmc_id}`, (err, result) => {
//         if(err) throw err;
//         res.writeHead(200, {
//           'Content-Type': 'application/json'
//         });
//         res.end(JSON.stringify(result));
//       });

//     } 

//   } catch(e) {
//     console.error('index.json.js put:', e);
//     res.status(500).json({error: e.message});
//   }

// }

// export async function del(req, res) {
//   console.log("del");
//   console.log(req.body.value);
// }
