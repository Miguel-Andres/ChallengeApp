import React, { PureComponent } from 'react'

import { Form, NavDropdown ,Button, ListGroup } from "react-bootstrap"
import {Link} from "react-router-dom"

const style={

    margin : "10px"
}

export default class Login extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <NavDropdown title="Login" id="collasible-nav-dropdown" style={style}>

<Form style={style}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
</Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
  <Link to ="/register"><ListGroup.Item variant="warning" > Sign Up</ListGroup.Item> </Link>
  </Form.Group>
  <Button variant="success" type="submit">
    Submit
</Button>
</Form>



</NavDropdown>

            </React.Fragment>
        )
    }
}
