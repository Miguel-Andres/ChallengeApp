let db = require("../database/models")

let userController = {

    mostrar : function(req,res){
        db.User.findAll()
        .then(value=>{
            res.json(value)
        })
        

        

    }
}


module.exports = userController