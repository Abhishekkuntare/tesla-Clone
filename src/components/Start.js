import styled from 'styled-components'
import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { useHistory } from 'react-router';

function Start() {
    const history = useHistory();
    return (
        <Zoom top>
            <Starta>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" alt="" />

                <Phone>
                    <img
                        src="https://www.pngarea.com/pngm/24/327107_tesla-png-tesla-logo-png-transparent-png.png" alt="" />
                    <p> Tesla is accelerating the world's transition to sustainable energy with electric cars.</p>

                </Phone>
                <button onClick={() => history.push('/')}
                ><i class="fas fa-user-astronaut"></i></button>


            </Starta>
        </Zoom>

    )
}

export default Start


const Starta = styled.div`
background:black;

img{
    magin-bottom:20px;
    width:50%;
    height:20%;
    @media (max-width: 768px){
        display:none;
    }
}

button{
    width: 100px;
    padding: 10px;
    margin-bottom: 10px;
    background: black;
    outline: none;
    border: 1px solid white;
    color: red;
    transition: all 0.7s ease-in-out;

    &:hover{
        background: white;
        cursor: pointer;
        color: red;
      
    }
    i{
        font-size:20px;
        color:white;
        &:hover{
            color:red;
        }
    }

   
`

const Phone = styled.div`
 p{
     display:none;
     @media (max-width: 768px){
        display:flex;
     }
 }
 i{
    display:none;
    width:10px;
    @media (max-width: 768px){
        display:flex;
     }
 }
img{
    display:none;
    @media (max-width: 768px){
        display:flex;
        flex-direction:column;
        width:100%;
    }
}
p{
    color:gray;
    opacity:0.7;
    letter-spacing:1px;
    margin-bottom:10px;
    
}
`