import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuRounded } from '@material-ui/icons';
import { Clear } from '@material-ui/icons';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';



function Order() {
    const history = useHistory();
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars);
    return (
        <>
            <Container>
                <a>
                    <img LeftButton onClick={() => history.push('/')}
                        src="/images/logo.svg" alt="tesla" />
                </a>

                <Menu>
                    {cars && cars.map((car, index) => (
                        <a key={index} href="#">{car}</a>
                    ))}
                    {/* <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a> */}
                </Menu>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                </RightMenu>
                <CustomMenu onClick={() => setBurgerStatus(true)} />

                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClear onClick={() => setBurgerStatus(false)} />
                    </CloseWrapper>
                    {cars && cars.map((car, index) => (
                        <li key={index} ><a href="#">{car}</a></li>
                    ))}
                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">CyberTruck</a></li>
                    <li><a href="#">Roadstar</a></li>
                    <li><a href="#">Fast</a></li>
                    <li><a href="#">Auto</a></li>
                    <li><a href="#">Setting</a></li>
                    <li><a href="#">Help</a></li>
                </BurgerNav>
            </Container>

            {/* first 1 */}

            <Image>
                <Fade top big>

                    <Content>
                        <img src="https://static-assets.tesla.com/configurator/compositor?&options=$MTS10,$PBSB,$WS10,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508" alt="" />
                    </Content>

                </Fade>

                <Flip top>

                    <Content>
                        <img src="https://static-assets.tesla.com/configurator/compositor?&options=$MTS10,$PBSB,$IBE00,$ST0Y&view=INTERIOR&model=ms&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508" alt="" />
                    </Content>

                </Flip>

                <Zoom top>
                    <h1>MODEL S</h1>
                </Zoom>
                <p>Est. Delivery: March-April</p>
                <button>Purchase Price</button>
                <button>Potential savings</button>

                <Details>
                    <p>
                        <Bold>405mi</Bold>
                        <Light>Range (EPA est.)</Light>

                    </p>

                    <p>
                        <Bold>155mph</Bold>
                        <Light>Top Speed</Light>

                    </p>

                    <p>
                        <Bold>3.1sec</Bold>
                        <Light>0-60 mph</Light>

                    </p>

                    <h3>Dual Motor All-Wheel Drive</h3>

                    <button>Long Range  $84,490</button>

                    <h3>Tri Motor All-Wheel Drive</h3>
                    <button>Plaid   $124,490</button>
                    <Learn>Learn More</Learn>

                </Details>
                <DownArrow src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Lsn96u57BIOyDaWCnrOKPRtA-wRld6dhCo6_mkwMVNZAan_wCvmD6s619s_OIN00cWE&usqp=CAU" />

            </Image>
            <Border />

            {/* 2nd Image */}

            <Image>
                <LightSpeed left>
                    <Content>
                        <img src="https://static-assets.tesla.com/configurator/compositor?&options=$MTY06,$PPSB,$WY19B,$INPB1&view=FRONT34&model=my&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508" alt="" />
                    </Content>

                </LightSpeed>

                <Flip bottom>
                    <Content>
                        <img src="https://static-assets.tesla.com/configurator/compositor?&options=$INPW1,$PPSB,$DV4W&view=STUD_SEAT&model=my&size=1441&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508" alt="" />
                    </Content>
                </Flip>

                <Zoom top>
                    <h1>MODEL Y</h1>
                </Zoom>
                <p>Est. Delivery: September-Octomber</p>
                <button>Purchase Price</button>
                <button>Potential savings</button>


                <Details>
                    <p>
                        <Bold>    326mi</Bold>
                        <Light>Range (EPA est.)</Light>

                    </p>

                    <p>
                        <Bold>135mph</Bold>
                        <Light>Top Speed</Light>

                    </p>

                    <p>
                        <Bold>4.8sec</Bold>
                        <Light>0-60 mph</Light>

                    </p>

                    <h3>Dual Motor All-Wheel Drive</h3>

                    <button>Long Range  $49,690</button>

                    <h3>Tri Motor All-Wheel Drive</h3>
                    <button>Plaid   $56,690</button>
                    <Learn>Learn More</Learn>

                </Details>
                <DownArrow src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Lsn96u57BIOyDaWCnrOKPRtA-wRld6dhCo6_mkwMVNZAan_wCvmD6s619s_OIN00cWE&usqp=CAU" />
            </Image>
            <Border />

            {/* 3rd Image */}

            <Image>

                <LightSpeed left>

                    <Content>
                        <img src="https://static-assets.tesla.com/configurator/compositor?&options=$MT321,$PPMR,$W40B,$IPB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508" alt="" />
                    </Content>

                </LightSpeed>


                <Flip bottom>
                    <Content>
                        <img src="https://static-assets.tesla.com/configurator/compositor?&options=$IPB1,$PPMR,$MT321&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508" alt="" />
                    </Content>

                </Flip>

                <Zoom top>
                    <h1>MODEL 3</h1>
                </Zoom>

                <p>Est. Delivery: December</p>
                <button>Purchase Price</button>
                <button>Potential savings</button>


                <Details>
                    <p>
                        <Bold>353mi</Bold>
                        <Light>Range (EPA est.)</Light>

                    </p>

                    <p>
                        <Bold>145mph</Bold>
                        <Light>Top Speed</Light>

                    </p>

                    <p>
                        <Bold>4.2sec</Bold>
                        <Light>0-60 mph</Light>

                    </p>

                    <h3>Rear-Wheel Drive</h3>

                    <button>Long Range  $49,690</button>

                    <h3>Tri Motor All-Wheel Drive</h3>
                    <button>Plaid   $56,690</button>
                    <Learn>Learn More</Learn>

                </Details>
                <DownArrow src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Lsn96u57BIOyDaWCnrOKPRtA-wRld6dhCo6_mkwMVNZAan_wCvmD6s619s_OIN00cWE&usqp=CAU" />
            </Image>
            <Border />


            {/* 4th Image */}
            <Image>

                <Roll right>

                    <Content>
                        <img src="https://static-assets.tesla.com/configurator/compositor?&options=$MTX10,$PPSW,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508" alt="" />
                    </Content>
                </Roll>

                <Flip right>
                    <Content>
                        <img src="https://static-assets.tesla.com/configurator/compositor?&options=$PMNG,$ICW00,$ST0Y&view=INTERIOR&model=mx&size=1920&bkba_opt=2&version=v0028d202109170508&crop=0,0,0,0&version=v0028d202109170508" alt="" />
                    </Content>
                </Flip>

                <Zoom top>
                    <h1>MODEL X</h1>
                </Zoom>
                <p>Est. Delivery: Janvary</p>
                <button>Purchase Price</button>
                <button>Potential savings</button>

                <Details>
                    <p>
                        <Bold>360mi</Bold>
                        <Light>Range (EPA est.)</Light>

                    </p>

                    <p>
                        <Bold>155mph</Bold>
                        <Light>Top Speed</Light>

                    </p>

                    <p>
                        <Bold>3.8sec</Bold>
                        <Light>0-60 mph</Light>

                    </p>

                    <h3>Dual Motor All-Wheel Drive</h3>

                    <button>Long Range  $94,690</button>

                    <h3>Tri Motor All-Wheel Drive</h3>
                    <button>Plaid   $114,690</button>
                    <Learn>Learn More</Learn>

                </Details>
            </Image>
            <Border />


            {/* image 5 */}
            <Image>

                <Roll right>

                    <Content>
                        <img src="https://www.tesla.com/ns_videos/commerce/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/wall-connector-gen3.jpg" alt="" />
                    </Content>
                </Roll>

                <Zoom top>
                    <h1> ACCESSORIES</h1>
                </Zoom>
                <p>As.Wall Connecter</p>
                <button>Purchase Price</button>
            </Image>

            <Footer />

        </>
    )
}

export default Order

const Container = styled.div`
min-height:60px;
position: fixed;
display:flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
top:0;
right:0;
left:0;
z-index:1;
   img{
    &:hover {
        cursor:pointer;
    }
   }
`

const Menu = styled.div`
display:flex;
align-items;center;
justify-content:center;
flex:1;

a{
font-weight:600;
text-transform: uppercase;
padding: 0 10px;
flex-wrap: nowrap;
}
@media(max-width:768px){
display:none;
}

`

const RightMenu = styled.div`
a{
font-weight:600;
text-transform: uppercase;
margin-right:10px;
}
`

const CustomMenu = styled(MenuRounded)`
cursor:pointer;
`

const BurgerNav = styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background: white;
width:300px;
z-index:16;
list-style: none;
padding:20px;
display:flex;
flex-direction: column;
text-align:start;
transition: transform 0.6s ease-in-out;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};

li{
padding:15px 0;
border-bottom:1px solid rgba(0,0,0,.2);
}
a{
font-weight:600;
}

`

const CustomClear = styled(Clear)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content: flex-end;
`



const Image = styled.div`

h1{
    font-size:42px;
    margin-bottom:5px;
}
p{
    margin-bottom:15px;
}
button{
    width: 138px;
    padding: 10px;
    outline: none;
    margin-right:5px;
    font-weight:400;
    transition: all 0.6s ease-in-out;
    margin-bottom:15px;

    &:hover{
        background:black;
        color:white;
        border: 1px solid white;
        cursor:pointer;

    }   
}
`
const Content = styled.div`

 img{
    width:100%;
 }
`
const Details = styled.div`
button{
    width: 238px;
    padding: 10px;
    outline: none;
    border-radius: 20px;
    margin-right:5px;
    font-weight:400;
    transition: all 0.6s ease-in-out;
    margin-top:15px;
    margin-bottom:15px;

    &:hover{
        background:black;
        color:white;
        cursor:pointer;
        border: 1px solid white;
        


    }   
}

`
const Bold = styled.div`
  font-size:23px;
  margin-bottom:5px;
`

const Light = styled.div`
font-size:1.2ch;
opacity:0.8;
`

const Learn = styled.div`
font-size:1.4ch;
opacity:0.8;
transition: all 0.6s ease-in-out;
margin-bottom:7px;


&:hover{
    text-decoration: underline;
    cursor:pointer;
`

const DownArrow = styled.img`
margin-top:20px;
height: 20px;
animation:animateDown infinite 1.5s;


`


const Border = styled.div`
border:0.7px solid gray;
`