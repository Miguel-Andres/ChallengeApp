import React, { useState  } from 'react'

import {Form ,Row ,Col ,Button} from "react-bootstrap"

const style ={
  margin :"35px",
  padding:"70px",
  backgroundColor:"#e7a61a",
  borderRadius: "0px 200px 1px 105px",   
  border:" 18px solid #000000"
}

export default function Register(props) {
  
  const [datos ,setDatos] = useState({
    name : "",
    lastName :"" ,
    email :"" ,
    password : "",
    rol :""
  })   

  const handleInputChage = (e) =>{

    
           setDatos({
       ...datos,
       [e.target.id] : e.target.value
      })
      
    }

  const enviarDatos =(e)=>{
   
    var url = 'http://localhost:3000/api/users';
    var data = datos;
    
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));


      
  }
        

        return (
            <React.Fragment>
                <Form style={style} className="container" onSubmit={enviarDatos}>
          <Form.Row >
          <Form.Group as={Col} controlId= {"name"} >
            <Col>
                <Form.Label>Nombre</Form.Label>
                <Form.Control  placeholder="First name" onChange={handleInputChage} />
            </Col>         
          </Form.Group>

          <Form.Group as={Col} controlId={"lastName"}>

            <Col>
                <Form.Label>Apellido</Form.Label>
                <Form.Control placeholder="Last name"  onChange={handleInputChage} />
            </Col>
          </Form.Group>

            
          </Form.Row>

                <Form.Group controlId={"email"} >
                    <Col >
                    <Form.Label column >
                     Email
                    </Form.Label>
                    <Form.Control type="email" placeholder="Email" onChange={handleInputChage} />
                     </Col>
                </Form.Group>

  <Form.Row  >
   
          <Form.Group  controlId={"password"}>

    <Col >
    <Form.Label  >
      Password
    </Form.Label >
      <Form.Control type="password" placeholder="Password" onChange={handleInputChage}/>
    </Col>
          </Form.Group>

          <Form.Group controlId={"repetPassword"}>
    <Col >
    <Form.Label  >
      Repet Password
    </Form.Label>
      <Form.Control type="password" placeholder="newPassword" onChange={handleInputChage}/>
    </Col>
          </Form.Group>
    
  </Form.Row>
  <fieldset>
    <Form.Group  controlId={"rol"} >
        
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
          value ={"cliente"}
          onChange={handleInputChage} 
         
        />
        <Form.Check
          type="radio"
          label="Admin"
          name={"name"}
          id="rol"
          onChange={handleInputChage} 
          value = {"admin"}
         
        />
        
      </Col>
    </Form.Group>
    </fieldset>
    
 

  <Form.Group as={Row}  >
    <Col sm={{ span: 10, offset: 2 }}>

      <Button type="submit"  >Sign in</Button>
    </Col>
  </Form.Group>
        <h2>{JSON.stringify(datos)}</h2>
  </Form>

            </React.Fragment>
        )
    
}

  