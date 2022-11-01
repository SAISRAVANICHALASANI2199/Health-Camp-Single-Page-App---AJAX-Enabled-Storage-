const express = require("express");
const cors = require('cors');
const { getReports,savePatientDetails,saveHealthVitals,saveMedication } = require("./dbservice");
const app = express();
const port = 3000;
app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/getreports", async (req, res) => {
  var userdetails = await getReports();
  res.json({ data: userdetails });
});
app.post("/savedetails", async (req, res) => {
  var data  = await savePatientDetails(req.body)
  res.json({ data: data });
});
app.post("/saveHealthVitals", async (req, res) => {
  console.log(req.body);
  var data  = await saveHealthVitals(req.body)
  res.json({ data: data });
});
app.post("/saveMedication", async (req, res) => {
  console.log(req.body);
  var data  = await saveMedication(req.body)
  res.json({ data: data });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});