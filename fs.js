var fs = require("fs")
// Reading file synchronously.
var fileContent = fs.readFileSync('hw.js','utf8')
console.log(fileContent)
console.log('Should wait until I reach here')

// Reading file asynchronously and giving callback to that async.
// Callback here is closure which has only access in that function.
fs.readFile('hw.js','utf8',(err,data) => {if(!err){console.log(data)} else {console.log(err)}})

console.log ('After Async file read with closure')

// To not get into callbackHell follow
// Modularization
// Use Generators
// Use promises
// Use event-driven programming
// Use Async.js

// Modularization

// Can also give seperate Function 

fs.readFile('hw.js','utf8',firstCallBack)

console.log('After Async file read with seperate callback function')

function firstCallBack(err,data){
if(!err){
 console.log(data)
} else {
console.log(err)
}
}

// Use Generators

