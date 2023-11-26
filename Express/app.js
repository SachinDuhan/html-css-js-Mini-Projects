const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));// for serving statinc files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));// Set the view directory

// ENDPOINTS
app.get("/", (req, res)=>{
    const con= 'This is the best content on the internet';
    const params = {'title': 'PugG is the best game', 'content': con}
    res.status(200).render('index.pug', params);
});

app.post("/", (req, res)=>{
    // console.log(req.body);
    nam = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    phone = req.body.phone;
    more = req.body.more;

    let outputToWrite = `client name is ${nam}, ${age} years old, ${gender}, contact number ${phone}. More about client: ${more}`

    fs.writeFileSync('output.txt', outputToWrite);
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render("index.pug", params);
});

app.listen(port, ()=>{
    console.log(`The application started successfully at port http://localhost:${port}`);
});