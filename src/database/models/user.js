module.exports = function(sequelize,dataTypes){

    let alias = "User" ;
    
    let col = {
        id:{
            type : dataTypes.INTEGER ,
            primaryKey : true,
            autoIncrement : true ,

        },
        name :{
            type : dataTypes.STRING ,

        },
        lastname:{
            type : dataTypes.STRING ,


        },
        email:{
            type : dataTypes.STRING ,


        },
        password:{
            type : dataTypes.STRING ,


        }
    }


    let config ={
        tableName :"users" ,
        timestamps : true 
    }



    let user = sequelize.define(alias,col,config)


    return user
}