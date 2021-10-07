import { initDB } from '@lib/mysql';

const { db } = initDB();

export function get(req, res) {
  console.log("get");
     db.query(`SELECT utm.*, tm.name as template_name FROM use_template as utm left join template as tm on tm.id = utm.template_id order by utm.date desc;`, (err, result) => {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type': 'application/json'
      });
      res.end(JSON.stringify(result));
    });
}