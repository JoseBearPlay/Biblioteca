//IMPORTACION
const mongoose = require("mongoose")
const app = require("./app")

mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://Admin:123añs@biblioteca.wppj7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 

{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Conexión a la base de datos exitosa');

    app.listen(process.env.PORT || 3000, function() {
        console.log("Servidor utilizando el puerto 3000");
    })

}).catch(err => console.log(err))