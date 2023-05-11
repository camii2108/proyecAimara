//entry point 
const express = require ("express"); // requiero el framework 
const app = express();//EJECUTO EXPRESS => me pone a disposion un objeto con cosas dentro 
const path = require("path");

app.use(express.static("public"));

/* app.get("/", (req, res)=>{
    console.log(req.query.user)
    let saludo = "<h1> Hola mundo  </h1>"
    return res.send(saludo)       //send solo me permite mandar texto plano res.send envia el dato y corta la respuesta+ con rest write envia respuesta
}) */ //utilizo el metodo "get" para ir a la ruta 1 parametro = ruta la que auiero escuchar o ir 2 parametro un callback: unrequire  cada que quiera ir a la ruta

/* app.get("/landing",(req, res) => {
    return res.sendFile(path.join(__dirname, "/views/landing.html"))
})

app.get("/portfolio",(req, res) => {
    return res.sendFile(path.join(__dirname, "/views/portfolio.html"))
})

app.get("/404",(req, res)=> {
    return res.send("Error página no encontrada")
   }) */

app.listen(3000, ()=>console.log("El servidor esta escuchando en el puerto 300"))