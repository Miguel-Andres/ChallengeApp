import React from 'react'
import Styled from "styled-components"

export default function Store() {

    const Boxcard = Styled.div`
       
       border : 3px solid black;
       background-color : gainsboro;
       margin :10px ;
       display: inline-block ;
       aling-text : center ;
`;



    return (
        <div>
            <Boxcard>
                <img src="https://play-lh.googleusercontent.com/R5hLCLt947e0R9q0KZJeMQJu-zkeB601mKyJqYZIvb1sVz0xgplkH0etKIvZOmlRXDU=s128-rw" alt="" />
                <p>Runner</p>
                <p>Game</p>
                <p>Price:5000</p>

            </Boxcard>
        </div>
    )
}
