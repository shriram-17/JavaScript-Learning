const express =require("express");
const app =express();
const port= 8080;

app.use((req,res)=>{
    console.log("Welcome To the Server ")
    res.send("Hello ,We Got Your Request")
})

app.listen(port,()=>{
    console.log(`Server is Listening on  ${port}`)
})