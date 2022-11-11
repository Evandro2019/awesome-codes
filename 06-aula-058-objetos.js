
const { request, response } = require('express');
const express = require('express');
const app = express();

app.get("/", (request, response) =>{
    response.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>class-car</title>
    </head>
    <body><h1>
    Program Starts<br>
falcon millenium hyperdrive ship<br>
shield hellicarrier vanish capabilities<br>
sea hawk t400 manuavable, fantastic, friendly, system<br>
400 IBM thinkPad<br>
Listen on port  5000<br>
    </body>
    `
    );
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Listen on port ", PORT)
})

console.log("Program Starts");


class Carro {
    constructor(pnome, ptipo) {
        this.nome = pnome;
        this.tipo = ptipo
    }
}

let c1 = new Carro("falcon millenium",'hyperdrive ship');
let c2 = new Carro("shield hellicarrier",'vanish capabilities');
let c3 = new Carro("sea hawk t400",'manuavable, fantastic, friendly, system');
let c4 = new Carro(400,'IBM thinkPad');

console.log(c1.nome, c1.tipo)
console.log(c2.nome, c2.tipo)
console.log(c3.nome, c3.tipo)
console.log(c4.nome, c4.tipo)

