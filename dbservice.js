const config = require("./dbconfig");
const mysql = require('mysql2/promise');

async function getReports(){
    // create the connection to database
const connection = await mysql.createConnection({
       host: "localhost",
      user: "root",
      password: "Jack@1234", 
      database: "ehr",
      port: "3306"

});
  const [results, ] = await connection.execute('SELECT * FROM t_patients');
  return results;
}
async function savePatientDetails(patient){
  const connection = await mysql.createConnection({
    host: "localhost",
   user: "root",
   password: "Jack@1234", 
   database: "ehr",
   port: "3306"

});
const query = 
        `INSERT INTO t_patients (firstname, lastname, gender, notes,age) VALUES ('${patient.firstname}', '${patient.lastname}', '${patient.gender}', '${patient.notes}','${patient.age}')`;
const [results ] = await connection.execute(query);
      return results.insertId;
}
async function saveHealthVitals(patient){
  const connection = await mysql.createConnection({
    host: "localhost",
   user: "root",
   password: "Jack@1234", 
   database: "ehr",
   port: "3306"

});
const query = 
        `Update t_patients set height= '${patient.height}', weight= ${patient.weight},pulse= ${patient.pulse},bp= '${patient.bp}',temp= ${patient.temp} where id= ${patient.id}`;
const [results, ] = await connection.execute(query);
    
      return {results};
}async function saveMedication(patient){
  const connection = await mysql.createConnection({
    host: "localhost",
   user: "root",
   password: "Jack@1234", 
   database: "ehr",
   port: "3306"

});
        const query = 
        `Update t_patients  set medication= '${patient.medication}', notes= '${patient.weight}',vaccinephoto= '${patient.vaccinephoto}' where id=${patient.id}`;
      const [results, ] = await connection.execute(query);
      return {results};
}
module.exports = {
    getReports,
    savePatientDetails,
    saveHealthVitals,
    saveMedication
  }