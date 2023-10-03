import React from 'react';
import { NavLink } from 'react-router-dom';


const Error = () => {
    return (
        <section>
            <p className='errorText'>404</p>
            <h1 className='errorTitle'>Oups! La page que vous demandez n'existe pas.</h1>
            <NavLink to='/home'>
                <p className='errorBack'>Retourner sur la page d'accueil</p>
            </NavLink>
        </section>
    );
};

export default Error;