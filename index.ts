import Server from "./clases/server";
import userRoutes from "./routes/usuario";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import express from "express";

const server = new Server();


//Body parser
server.app.use(express.urlencoded({extended: true}));
server.app.use(express.json());


//Rutas de mi aplicacion
server.app.use('/user', userRoutes)

//Conectar DB

mongoose.connect('mongodb://localhost:27017/fotosgram',
    { useNewUrlParser: true, useCreateIndex: true }, (err) => {
        if (err) throw err;
        console.log('Base de datos ONLINE');
    })

//levantar exoress
server.start(() => {
    console.log(`Servidor corriendo en puerto ${server.port}`);
});
