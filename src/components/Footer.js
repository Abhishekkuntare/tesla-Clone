import styled from 'styled-components'
import React from 'react'

function Footer() {
    return (

        <Container>

            <p>COMPANY</p>
            <p>CAREERS</p>
            <p>CONTACT US</p>
            <p>MEDIA</p>
            <p>PRIVERCY </p>
            <p>SITE MAP</p>
            <p>AUTO</p>
            <p>FOUNDER</p>


            <img src="https://i.pinimg.com/originals/ec/0d/b8/ec0db88550d77e27e4b6615b063b304d.jpg" alt="" />

            <br />
            <h4>Copyright © 2021 Tesla  S.p.A. a sole shareholder company part of ree Group.
                All rights reserved. VAT no. IT 00591801204</h4>

        </Container>


    )
}

export default Footer




const Container = styled.div`
width:100vw;
height:40vh;
background-size: cover;
display: flex;
align-items: start;
padding:25px;
background: black;
overflow: hidden;


p{
    margin-left: 20px;
    color:white;
    letter-spacing:1px;
    transform: all 0.7s ease-in;

    &:hover {
        color:red;
         cursor:pointer;
        transform: scaleX(1);
        }
}


img{
    width:200px; 
}

h4{
    margin-top:150px;
    margin-right:34px;
    color:white;
}


@media(max-width:768px){
 flex-direction: column;
 p{
     margin-bottom:15px;
 }
}

`