/*
Synchronous Programming
It is a way of programming in which you can
perform only one task at a time and when one task
is completed we move to another task. This is what
we called Blocking Code operation because you
need to wait for a task to finish to move to
the next one.
console.log("Program Starts");
let sum = getSum(2,3);
console.log(sum);
console.log("Program Ends");
In the above code snippet, you see code will
execute line by line and when an operation on
one line is finished then we move to the next
line so this is just a simple example of the
synchronous way of programming and we do this
in our daily life of programming.
*/

//npm install express
//npm init
//gitgnore
//git init
//git status
//git add .
//git commit -m "first commit"
//heroku login
//heroku apps:create hellokittyawesome
//heroku git:remote hellokittyawesome
//git remote     //retorna heroku
//git push heroku master
//heroku open

const { request, response } = require('express');
const express = require('express')
;
const app = express();

app.get("/", (request, response) =>{
    response.send(`nihau chijiye
    `
    );
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log("Listen on port ", PORT)
})

console.log("Program Starts");
let sum = getSum(200,300);
console.log("fun getSum 200 + 300",sum);
console.log("Program Ends");


function getSum(a, b){
    return a + b;

}

/*
$ npm init
This command prompts you for a number of things,
 such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception:

entry point: (index.js)
Enter app.js, or whatever you want the name of the main
 file to be. If you want it to be index.js, hit RETURN to accept the suggested default file name.

Now install Express in the myapp directory and save
 it in the dependencies list. For example:

$ npm install express
To install Express temporarily and not add it 
to the dependencies list:

$ npm install express --no-save
*/