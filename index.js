
const express = require("express");
const redis = require("redis");

const app= express();


const client=redis.createClient({
 host:"redis",
 port: 6379
})

client.set('visit',0)

app.get("/",(req,res)=>{
    
client.get('visit',(err,visit)=>{
if(err){
res.send('error')
}else{
res.send("the number of visits : "+visit)
}

client.set('visit',parseInt(visit)+1)
})





})




app.listen(3000,()=>{
console.log('server is listening on port 3000....')
})

