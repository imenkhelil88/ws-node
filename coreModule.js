// const http=require("http")
// console.log(http)
const fs =require ("fs")
// console.log(fs)
fs.readFile('./test.txt',function(err,data){
if (err){
    console.log(err)
}
console.log(data.toString())
})