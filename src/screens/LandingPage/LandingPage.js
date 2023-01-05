import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className="title">Welcome to App X </h1>
                            <p className="subtitle"> All the Pokémon data you'll ever need...</p>
                            <p className="subtitle"></p>
                        </div>
                            <div className="buttonContainer">
                                <a href="/pokes">
                                    <Button size='lg'className='landingbutton'>
                                        Enter
                                    </Button>
                                </a>
                                {/* <a href="/register">
                                    <Button size='lg'className='landingbutton' variant='outline-primary'>
                                        Sign Up 
                                    </Button>
                                </a> */}
                            </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage;