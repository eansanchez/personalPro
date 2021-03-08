import React from 'react'
import {Card, Button} from 'react-bootstrap'



export const Works = () => {
    return (
        <div>
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase text-white">TRABAJOS</h2>
                    <h3 className="section-subheading text-white"></h3>
                </div>
                <div className="row text-center ">
                    <div className="col-md-4 mt-5">
                    <Card className='mx-auto bg-ligth text-dark' style={{ width: '18rem' }}>
                        <Card.Img variant="top" height='20px' src="https://wizardsoflatam-f72ac.web.app/img/bgfondo.jpg"/>
                        <Card.Body>
                            <Card.Title>Wizard Of Latams</Card.Title>
                            <Card.Text>
                            Mi primer App web sobre el mundo de Harry Potter, creada con HTML, CSS, BOOSTRAP y JAVASCRIPT
                            con el fin de poder darle al usuario, la facilidad de ver las peliculas y leer los libros de forma gratuita
                            </Card.Text>
                            <Button className='touchme mt-5' variant="primary" href='https://wizardsoflatam-f72ac.web.app/' target="_blank">Touch Me</Button>
                        </Card.Body>
                    </Card>
                    </div>

                    <div className="col-md-4 mt-5">
                    <Card className='mx-auto bg-ligth text-dark' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src="https://pework-a4181.web.app/images/undraw.svg" />
                        <Card.Body>
                            <Card.Title>PEWork</Card.Title>
                            <Card.Text>
                            Mi segunda App web, representa una consultora de RRHH, donde facilita al usuario la busqueda laboral <br></br>
                            Creada con HTML, CSS, BOOSTRAP y JAVASCRIPT.
                        

            
                            </Card.Text>
                            <Button className='touchme mt-5' variant="primary" href='https://pework-a4181.web.app/' target="_blank">Touch Me</Button>
                        </Card.Body>
                    </Card>
                    </div>

                    <div className="col-md-4 mt-5">
                    <Card className='mx-auto bg-Ligth text-dark' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://pework-a4181.web.app/images/contact.svg" />
                        <Card.Body>
                            <Card.Title>Portfolio Personal</Card.Title>
                            <Card.Text>
                            Este App, fue realizado con React.js utilizando librerias como Boostrap y Chakras Ui 
                            con el fin de mostrar mi perfil a los usuarios que la visiten
                            </Card.Text>
                            <Button className='touchme mt-5' variant="primary" href='#' target="_blank">Touch Me</Button>
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