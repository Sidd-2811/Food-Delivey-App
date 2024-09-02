import React from 'react'
import { Col, Container, Row, Carousel } from "react-bootstrap";
import User1 from '../../assets/blog/review-author-1.jpg'
import User2 from '../../assets/blog/review-author-2.jpg'
import User3 from '../../assets/blog/review-author-3.jpg'
import User4 from '../../assets/blog/review-author-5.jpg'
function Section6() {
  return (
    <>
    <section className='blog_section'>
    <Container>
        <Row>
        <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                <div className="user_img">
                      <img src={User1} alt="User-1" className="img-fluid"/>
                </div>
                <p>O Pará é um estado localizado no norte do Brasil, atravessado pelo baixo rio Amazonas. Ele faz fronteira com os estados brasileiros do Amapá, Maranhão, entre outros.</p>
                {/* Reviews */}
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                    <h5>By Amelia Newlove</h5>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                <div className="user_img">
                      <img src={User2} alt="User-2" className="img-fluid"/>
                </div>
                <p>O Pará é um estado localizado no norte do Brasil, atravessado pelo baixo rio Amazonas. Ele faz fronteira com os estados brasileiros do Amapá, Maranhão, entre outros.</p>
                {/* Reviews */}
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                    <h5>By Amelia Newlove</h5>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                <div className="user_img">
                      <img src={User3} alt="User-3" className="img-fluid"/>
                </div>
                <p>O Pará é um estado localizado no norte do Brasil, atravessado pelo baixo rio Amazonas. Ele faz fronteira com os estados brasileiros do Amapá, Maranhão, entre outros.</p>
                {/* Reviews */}
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                    <h5>By Amelia Newlove</h5>

                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                <div className="user_img">
                      <img src={User4} alt="User-4" className="img-fluid"/>
                </div>
                <p>O Pará é um estado localizado no norte do Brasil, atravessado pelo baixo rio Amazonas. Ele faz fronteira com os estados brasileiros do Amapá, Maranhão, entre outros.</p>
                {/* Reviews */}
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                    <h5>By Amelia Newlove</h5>

                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </Row>
    </Container>
    </section>
    </>
  )
}

export default Section6