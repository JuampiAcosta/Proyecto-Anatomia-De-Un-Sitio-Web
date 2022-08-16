const express=require('express');
const path = require('path');
const app=express();
const publicpath=path.resolve(__dirname,'./public');
app.use(express.static(publicpath));
app.listen(3000,()=>{console.log('Servidor corriendo en el puerto 3000');})