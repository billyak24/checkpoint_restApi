const express= require('express')
const connectDB = require('./connectDB/connect')
const user=require('./models/user')
const app = express()
const port= process.env.port||8080


app.use(express.json())


app.post('/api/user',(req,res)=>{
const {name,age,coffee}=req.body
user.create({name,age,coffee},(err)=>{
err? res.status(402).send('failed to add user',err)
: res.send('user added')
})
});

 app.get('/api/user',(req,res)=>{
    user.find()
    .then((users) => res.send(users))
    .catch((err) => console.log(err));

 });


app.put('/api/user/:id',(req,res)=>{
    user.findByIdAndUpdate(req.params.id,req.body,(err)=>{
        err ? res.status(204).send(err)
        :res.status(200).send('user stated')
    })
})
app.delete('/api/user/:id', (req, res) => {
    user.findByIdAndRemove(req.params.id, (err)=> {
        err ? res.status(504).send(err)
        :res.status(204).send('user deleted')
    })
})
connectDB()
app.listen(8080,err=>{
    err? console.log('error,err')
    :console.log(`server is running in port ${port}` )
})