const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
 
app.use(cors());
 const port = process.env.PORT || 3000; 


const apiData= require("./data.json");


app.get('/', (req, res) => {
       res.send("hello i am live");
});
app.get("/jobs", (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading data.json:', err);
          res.status(500).send('Internal Server Error');
          return;
        }
        try {
          const jobs = JSON.parse(data);
          res.json(jobs);
        } catch (parseError) {
          console.error('Error parsing data.json:', parseError);
          res.status(500).send('Internal Server Error');
        }
      });
});
app.listen(port, ()=>{
    console.log("listening on port");
});
