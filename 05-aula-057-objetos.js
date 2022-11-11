
const { request, response } = require('express');
const express = require('express');
const app = express();

app.get("/", (request, response) =>{
    response.send(`nihau chijiye
    Program Starts
falcon millenium hyperdrive ship
shield hellicarrier vanish capabilities
sea hawk t400 manuavable, fantastic, friendly, system
400 IBM thinkPad
Listen on port  5000
    `
    );
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Listen on port ", PORT)
})

console.log("Program Starts");
class Pessoa{
    constructor(){
        this.nome='T400thinkPadthinkBigFixBug'
    }
}

let p1=new Pessoa();
let p2=new Pessoa();
let p3=new Pessoa();
console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)