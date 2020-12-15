const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')

//middlware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// simulatin db
const users =  [
    {
        id: 1,
        User:"Freddy16velas",
        Name: "Freddy",
        LstName: "Velasquez",
        Email: "Fredy@gmail.com",
        Rol:"Servidor",
        Telefono:"52039026",
        Estatus:"Activo"
    }
]

// settings
app.set('port', process.env.PORT || 3000);

// static files 
app.use(express.static(path.join(__dirname, 'public')))

//routes 
app.get ('/usuarios', (req, res)=> {
    res.json(users)
});


app.post ('/usuarios', (req, res)=> { 
    console.log(req.body);
    res.send('datos recibidos ')
});

// starting the server 
app.listen(app.get ('port'), () => {
    console.log(`Server is working, ¡Thanks God!`);
});
