import React from 'react'
import {Card, Button} from 'react-bootstrap'



export const Works = () => {
    return (
        <div>
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase text-white">TRABAJOS</h2>
                    <h3 className="section-subheading text-white">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row text-center ">
                    <div className="col-md-4 mt-5">
                    <Card className='mx-auto' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button className='mt-2' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>

                    <div className="col-md-4 mt-5">
                    <Card className='mx-auto' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button className='mt-2' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>

                    <div className="col-md-4 mt-5">
                    <Card className='mx-auto' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button className='mt-2' variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
    )
}

export default Works