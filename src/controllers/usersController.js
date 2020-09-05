let db = require("../database/models")

let userController = {

    mostrar : function(req,res){
        db.User.findAll()
        .then(value=>{

            let users ={
                meta :{
                    status:200 ,
                    statusText : "Ok aqui tienes los usuarios de appChallenge",
                    url:"api/users",
                    total :value.length
                },
                datos : value
            }


                     res.json(users)
                 }) ;
             
        },

    crear : (req,res) => {


        db.User.create({
            name : req.body.name ,
            lastname: req.body.lastName ,
            email : req.body.email ,
            rol : req.body.rol ,
            password : req.body.password


        }).then(value=>{
            
           res.send(value)
        })
        

    },
    
    

}


module.exports = userController