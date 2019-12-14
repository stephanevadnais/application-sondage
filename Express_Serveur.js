const express = require('express');
const application = express();

application.get('/',(requete,reponse)=>{

    reponse.send({Serveur: "Connection établie"});

})



const PORT = process.env.PORT || 5000;

application.listen(PORT);