const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const app = express();
const port = 8000;

// MONGOOSE SPECIFIC STUFF
main().catch(err=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/ballroomContact');
}
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    age: String,
    email: String,
    address: String,
    query: String
});
var Contact = mongoose.model('Contact', contactSchema);

// EXPRESS SPECIFIC STUFF
// app.use(express.static('static', option))
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('home.pug', params);
});

app.get('/contact', (req, res)=>{
    res.status(200).render('contact.pug');
});

app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This data has been saved to the database")
    }).catch(()=>{
        res.status(400).send("Error: Item was not saved to the database")
    });
    // res.status(200).render('contact.pug');
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
});