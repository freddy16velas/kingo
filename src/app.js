const express = require('express');
const morgan = require('morgan');
const path = require('path')

const app = express();


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

//middlware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// static files 
app.use(express.static(path.join(__dirname, 'public')))

//routes 
app.get ('/usuarios', (req, res)=> {
    res.json(users)
});

app.post ('/usuarios', (req, res) => {
    const { Name } = req.body;
    const { User } = req.body;
    const { Email } = req.body;
    const { LstName } = req.body;
    const { Rol } = req.body;
    const { Telefono } = req.body;
    const { Estatus } = req.body;
    users.push ({
        id: users.length+1,
        Name,
        User,
        Email,
        LstName,
        Rol,
        Telefono,
        Estatus
    })
    console.log(req.body);
    res.json('Successfully created');
});

app.put ('/usuarios/:id', (req,res)=>{
    console.log (req.params, req.body);
    const { id } = req.params; 
    const { Name } = req.body;
    const { User } = req.body;
    const { Email } = req.body;
    const { LstName } = req.body;
    const { Rol } = req.body;
    const { Telefono } = req.body;
    const { Estatus } = req.body;

    users.forEach((user, i) => {
        if (user.id == id) {
            user.Name = Name;
            user.User = User;
            user.Email = Email;
            user.LstName= LstName;
            user.Rol = Rol;
            user.Telefono = Telefono;
            user.Estatus = Estatus;
        }
    })
    res.json('Succesfully updated');
});
app.delete('/usuarios/:id', (req, res) =>{
    const { id } = req.params;
    users.forEach((user, i)=> {
        if (user.id ==id) {
            users.splice (i, 1)
        }
        res.json ('Succesfully deleted');
    });
})


// starting the server 
app.listen(app.get ('port'), () => {
    console.log(`Server is working, ¡Thanks God!`);
});
