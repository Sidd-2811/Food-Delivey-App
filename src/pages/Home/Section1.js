import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Burger from '../../assets/hero/hero-2.png'
import { Link } from 'react-router-dom'
function Section1() {
  return (
    <section className='hero_section'>
        <Container>
            <Row>
                {/* lg = 7 to divide the column
                lg-large-screen ke liye bottom margin 0 */}
                <Col lg={7} className='mb-5 mb-lg-0' >
                  <div className='position-relative'>
                    <img src={Burger} className='img-fluid'  alt="Hero"/>
                    <div className='price_badge'>
                      <div className='badge_text'>
                        <h4 className='only'>Only</h4>
                        <h4 className='amt'>$6.99</h4>
                      </div>
                    </div>
                  </div>
                </Col>
      {/* ----------------------------------------------------------------- */}

               <Col lg={5}>
                   <div className='hero_text text-center'>
                      <h1 className='text-white'>New Burger</h1>
                      <h2 className='text-white'>With Onion</h2>
                      <p className='text-white pt-2 pb-4'>we are living in the age of science from stone age to now science a been progressed now.</p>
                      <Link to='/' className='btn order_now'>
                      Order Now
                      </Link>
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section1