import React from 'react'



export const Social = () => {
    return (
        <footer className="footer py-4">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4 text-lg-left text-white">Copyright © Emanuel Sanchez 2021</div>
                <div className="col-lg-4 my-3 my-lg-0">
                    <a className="btn btn-success btn-social mx-2" href="https://api.whatsapp.com/send?phone=+5491168163058" target="_blank"><i className="fab fa-whatsapp"></i></a>
                    <a className="btn btn-info btn-social mx-2"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-primary btn-social mx-2" href="https://www.linkedin.com/in/emanuel-sanchezok" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <div className="col-lg-4 text-lg-right">
                    <p className="mr-3 text-white" href="#!">emanuelsanchez.dev@gmail.com</p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Social   