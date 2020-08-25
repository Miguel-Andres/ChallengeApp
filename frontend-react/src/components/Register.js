import React, { PureComponent } from 'react'

import {Form ,Row ,Col ,Button} from "react-bootstrap"

const style ={
    backgroundColor : "grey"
}

export default class Register extends PureComponent {
    render() {
        return (
            <React.Fragment>
       
                <Form style={style}>
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
                <Form.Group  >
                    <Form.Label column >
                     Email
                    </Form.Label>
                    <Col >
                    <Form.Control type="email" placeholder="Email" />
                </Col>
                    </Form.Group>

  <Form.Group  >
    <Form.Label column ={6} >
      Password
    </Form.Label>
    <Col >
      <Form.Control type="password" placeholder="Password" />
    </Col>
  </Form.Group>
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
