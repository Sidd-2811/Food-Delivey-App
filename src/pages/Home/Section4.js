import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PromotionImage from '../../assets/promotion/pro.png'

function Section4() {
  return (
    <>
    <section className='promotion_section'>
        <Container>
            <Row className='align-items-center'>
                <Col lg={6} className='text-center mb-5 mb-lg-0'>
                <img src={PromotionImage} className='img-fluid' alt="Promotion"/>
                </Col>
                {/* left and right se space ke liye px-5 */}
                <Col lg={6} className='px-5'>
                    <h2>Nothing brings people together like a good burger</h2>
                    <p>
                        A juicy burger is the epitome of comfort food. Typically consisting of a toasted bun, a beef patty, cheese, lettuce, tomato, and condiments, this classic dish is a staple in many cuisines around the world.      
                    </p>
                    <ul>
                        <li>
                                <p>
                                Burgers: where dreams come between two buns." "The burger is my spirit animal.
                                </p>
                        </li>
                        <li>
                                <p>
                                Burgers are the answer to every question, especially the ones you haven't asked yet.
                                </p>
                        </li>
                        <li>
                                <p>
                                The perfect burger is a work of art, and I'm a hungry art critic.
                                </p>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>

    {/* Bg Parallax Scroll */}
    <section className='bg_parallax_scroll'>
        
    </section>
    </>
  )
}

export default Section4