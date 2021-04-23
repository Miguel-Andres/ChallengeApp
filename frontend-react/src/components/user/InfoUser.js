import React from 'react'

import{Card ,Badge } from "react-bootstrap"


const style = {

        root:{
            display:"flex",
            justifyContent :"space-around"
        },

    titulo:{
        color :"black",
    }


}

export default function InfoUser(){
   
        return (
            <React.Fragment >
                 <Card border="info" style={{ width: "700px" }}>
                    <Card.Header>Informacion de usuario </Card.Header>
                        <Card.Body style={style.root}>
                            <div style={{backgroundColor:"gray"}}>
                            <Card.Title>Nombre</Card.Title>
                            <Card.Text> miguel </Card.Text>

                            

                            <Card.Title>apellido</Card.Title>
                            <Card.Text> silva </Card.Text>
                            
                            </div>

                            <div style={{margin:"10px" , backgroundColor:"red"}}>

                            <Card.Title>email</Card.Title>
                            <Card.Text> miguel </Card.Text>

                            <Card.Title>Rol de usuario</Card.Title>
                            <Card.Text> <Badge variant="info">Cliente</Badge>{' '} </Card.Text>
                            </div>
                </Card.Body>
                </Card>
            </React.Fragment>
        )
        }
