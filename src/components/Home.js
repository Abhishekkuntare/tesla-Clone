import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />

            <Section title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />

            <Section title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory" />

            <Section title="Lowest Cost Solar Pannel In America"
                description="Money Back Guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More" />

            <Section title="Solar for News Roofs"
                description="Solar Roofs Prize - 1229$"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Order Now"
                rightBtnText="Learn More" />

            <Section title="Accessories"
                description="Tesla xvg"
                backgroundImg="accessories.jpg"
                leftBtnText="Show Now"
                rightBtnText="Learn More" />

            <Footer />
        </Container>
    )
}

export default Home


const Container = styled.div`
 height:100vh;
`
