require(`dotenv`).config()
const cors=require(`cors`)
const express=require(`express`)
const app=express()
const mongoose=require(`mongoose`)
const routers=require(`./router/crudRouter`)
app.use(express.json());
app.use((request,response,next)=>{
    console.log(request.path+'\n'+request.method);
    next();
})
mongoose.connect(process.env.MONGO_URL).then((sucess)=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Port Is Running Sucessfully ${process.env.PORT}`);
    })
}).catch(error=>{
    console.log(error);
    
})
app.use(cors())
app.use('/crud/Application',routers)