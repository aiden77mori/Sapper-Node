import { initDB } from '@lib/mysql';
var moment = require('moment');

var current_date = moment().format('yyyy-MM-DD:hh:mm:ss');

const { db } = initDB();

export async function get(req, res) {
  console.log("get");
  try {
    await db.query(`SELECT tm.id as template_id, tm.name as template_name, tm.doctor_id, pt.id as patient_id, pt.name, pt.last_name, pt.gender, pt.option FROM template as tm LEFT JOIN patient as pt on tm.patient_id = pt.id;`, (err, result) => {
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
  console.log("post");
  var functionName = req.body.functionName;
  if (functionName === 'useTemplate') {

    var templateInfo = req.body.useTemplateInfo;
    db.query(`INSERT INTO use_template (template_id, patient_id, doctor_id, patient_name, patient_last_name, patient_gender, patient_option, date) VALUES (${templateInfo.template_id}, ${templateInfo.patient_id}, ${templateInfo.doctor_id}, '${templateInfo.patient_name}', '${templateInfo.patient_last_name}', '${templateInfo.patient_gender}', '${templateInfo.patient_option}', '${current_date}')`, (err, result) => {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(result));
    });

  }
}