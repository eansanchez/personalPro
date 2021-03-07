import React from 'react'



export const Skills = () => {
    return (
    <div>
        <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase text-white">SKILLS</h2>
                    <h3 className="section-subheading text-white">Excelentes habilidades de diseño y creación,
                                                                    Óptimo desempeño en equipo e independiente,
                                                                    Responsabilidad y disciplina,
                                                                    Capacidad de organización,
                                                                    Formación continua.</h3>
                </div>
                <div className="row text-center ">
                    <div className="col-md-4 mt-5">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-danger"></i>
                            <i className="fab fa-html5 fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 text-white">HTML</h4>
                        
                    </div>
                    <div className="col-md-4 mt-5">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-info"></i>
                            <i className="fab fa-css3-alt fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 text-white">CSS</h4>
                        
                    </div>
                    <div className="col-md-4 mt-5">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-warning"></i>
                            <i className="fab fa-js-square fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 text-white">JAVASCRIP</h4>
                        
                    </div>
                    <div className="col-md-4 mt-5">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-primary"></i>
                            <i className="fab fa-react fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 text-white">REACT</h4>
                        
                    </div>
                    <div className="col-md-4 mt-5">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-dark"></i>
                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 text-white">GITHUB</h4>
                        
                    </div>
                    <div className="col-md-4 mt-5">
                        <span className="fa-stack fa-4x">
                            <i className="fas fa-circle fa-stack-2x text-success"></i>
                            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="my-3 text-white">RESPONSIVE DESING</h4>
                        <p className="text-muted text-white"></p>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
    )
}

export default Skills