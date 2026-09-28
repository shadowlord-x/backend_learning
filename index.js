import express from 'express'

const app=express()

require('dotenv').config()

const port=process.env.PORT

app.get('/',(req,res)=>{
  res.send('hellow world')
})

app.get('/bhk',(req,res)=>{

})

app.listen(port, ()=>{
  console.log(`Example app listenig on ${port}`)
})