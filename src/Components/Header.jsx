import React from 'react'
import Typed from 'react-typed'




export const Header = () => {
    return (

<div className="header-wraper">
    <div className="main-info">
        <h1 className="title-one mx-5">Bienvenidos a <br /> Mi Portafolio Personal.</h1>

        <Typed className='typed-text mx-5 mb-5'
        strings={["Mi nombre es Emanuel Sanchez",
                  "Tengo 26 años", 
                  "vivo en Buenos Aires, Argentina", 
                  "y soy desarrollador Front End."]}
        typeSpeed={20}
        backSpeed={60}
        loop />
    </div>
</div>
    )
}

export default Header