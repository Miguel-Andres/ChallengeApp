import React, { PureComponent } from 'react'

import {Form ,Row ,Col ,Button} from "react-bootstrap"

const style ={
  margin :"35px",
  padding:"70px",
  backgroundColor:"#e7a61a",
  borderRadius: "0px 200px 1px 105px",   
  border:" 18px solid #000000"
}

export default class Register extends PureComponent {
    render() {
        return (
            <React.Fragment>
       
                <Form style={style} className="container  ">
          <Form.Row>
            <Col>
                <Form.Label>Nombre</Form.Label>
                <Form.Control placeholder="First name" />
            </Col>
            <Col>
                <Form.Label>Apellido</Form.Label>
                <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>

                <Form.Group>
                    <Col >
                    <Form.Label column >
                     Email
                    </Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                     </Col>
                </Form.Group>

  <Form.Row  >
   

    <Col >
    <Form.Label  >
      Password
    </Form.Label >
      <Form.Control type="password" placeholder="Password" />
    </Col>
    <Col >
    <Form.Label >
      Repet Password
    </Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Col>
    
  </Form.Row>
  <fieldset>
    <Form.Group >
        
      <Form.Label >
       <b> Rol de Usuario</b> 
      </Form.Label>

      {/* Usuario */}
      <Col >
        <Form.Check
          type="radio"
          label="Cliente"
          name="formHorizontalRadios"
          id="formCliente"
        />
        <Form.Check
          type="radio"
          label="Admin"
          name="formHorizontalRadios"
          id="formAdmin"
        />
        
      </Col>
    </Form.Group>
  </fieldset>
 

  <Form.Group as={Row}>
    <Col sm={{ span: 10, offset: 2 }}>
      <Button type="submit">Sign in</Button>
    </Col>
  </Form.Group>
</Form>
            </React.Fragment>
        )
    }
}
