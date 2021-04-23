import React, { useState } from 'react'

import { Form, Row, Col, Button ,Alert} from "react-bootstrap"

const style = {
  margin: "35px",
  padding: "70px",
  backgroundColor: "#e7a61a",
  borderRadius: "0px 200px 1px 105px",
  border: " 18px solid #000000"
}

export default function Register(props) {

const [create,setCreate]= useState(false)
  const [datos, setDatos] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    repetPassword:"",
    rol: ""
  })
  

  const handleInputChage = (e) => {

    setDatos({
      ...datos,
      [e.target.id]: e.target.value
    })
    
     
   
  }

  const enviarDatos = (e) => {

    e.preventDefault()
    console.log("envio ")

    let url = 'http://localhost:3000/api/users';
    let data = datos;

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())      
      .catch(error => console.error('Error:', error))      
      .finally(()=>{

        console.log(datos) 
      setDatos({  name: "",
      lastName: "",
      email: "",
      password: "",
      repetPassword:"",
      rol: ""}) 
           
        setCreate(true)
      })
     



  }


  return (
    <React.Fragment>


      <Form style={style} className="container" onSubmit={enviarDatos} action='/profile' >
        <Form.Row >
          <Form.Group as={Col} controlId={"name"} >
            <Col>
              <Form.Label>Nombre</Form.Label>
              <Form.Control placeholder="First name" onChange={handleInputChage}value={datos.name} />
            </Col>
          </Form.Group>

          <Form.Group as={Col} controlId={"lastName"}>

            <Col>
              <Form.Label>Apellido</Form.Label>
              <Form.Control placeholder="Last name" onChange={handleInputChage} value={datos.lastName} />
            </Col>
          </Form.Group>


        </Form.Row>

        <Form.Group controlId={"email"} >
          <Col >
            <Form.Label column >
              Email
                    </Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={handleInputChage}value={datos.email} />
          </Col>
        </Form.Group>

        <Form.Row  >

          <Form.Group controlId={"password"}>

            <Col >
              <Form.Label  >
                Password
    </Form.Label >
              <Form.Control type="password" placeholder="Password" onChange={handleInputChage} value={datos.password} />
            </Col>
          </Form.Group>

          <Form.Group controlId={"repetPassword"}>
            <Col >
              <Form.Label  >
                Repet Password
    </Form.Label>
              <Form.Control type="password" placeholder="newPassword" onChange={handleInputChage} value={datos.repetPassword} />
            </Col>
          </Form.Group>

        </Form.Row>
        <fieldset>
          <Form.Group controlId={"rol"} >

            <Form.Label >
              <b> Rol de Usuario</b>
            </Form.Label>

            {/* Usuario */}
            <Col  >
              <Form.Check
                type="radio"
                label="Cliente"
                name={"name"}
                id="rol"
                
                onChange={handleInputChage}
                value={"cliente"}

              />
              <Form.Check
                type="radio"
                label="Admin"
                name={"name"}
                id="rol"
                onChange={handleInputChage}
                value={"admin"}


              />

            </Col>
          </Form.Group>
        </fieldset>



        <Form.Group as={Row}  >
          <Col sm={{ span: 10, offset: 2 }}>

            <Button type="submit"  >Sign in</Button>
          </Col>
        </Form.Group>
       {create ?<Alert variant="primary">
           User Creado Con Exito !!!
            </Alert> : null} 
      </Form>

    </React.Fragment>
  )

}

