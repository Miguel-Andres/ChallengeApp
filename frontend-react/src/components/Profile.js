import React, { PureComponent } from 'react'

import {Table} from "react-bootstrap"

import InfoUser from "./user/InfoUser"

const style ={
    
    root:{
        display : "flex",
        margin : "45px" 
    },

    titulo :{
        display : "flex" ,
        color :"blue"
        

    } ,

    datos:{
        display : "flex" ,
        backgroundColor : "red" 
    }

}

export default class Profile extends PureComponent {
    render() {
        return (
         <React.Fragment>

             <div style={style.root} className="">
 
                <div style={style.titulo} className="col-6">

                    <InfoUser />


                </div>

                <div style={style.tabla} className="col-6">
                <Table striped bordered hover variant="">
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
             <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
            <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
                 </tbody>
                </Table>
        </div>


                 
    </div>

             
             
         </React.Fragment>
        )
    }
}
