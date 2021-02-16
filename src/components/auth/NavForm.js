import React from 'react';
import { NavLink } from 'react-router-dom';

const NavForm = () => {
    return (
        <div className="row pb-5">
            <div className="col-sm-10 col-md-4 col-lg-5 text-center">
            <NavLink 
                        className="font-weight-bold nav-form"
                        activeClassName="active"
                        exact
                        to="/login"
                    >
                Iniciar sesión 
            </NavLink>
                        
            </div>
            <div className="col-sm-1 col-md-4 col-lg-2 text-center">|</div>
            <div className="col-sm-12 col-md-4 col-lg-5 text-center">
            <NavLink    
                        className="font-weight-bold nav-form"
                        activeClassName="active"
                        exact
                        to="/register"
                    >
                Registrate
            </NavLink>
            </div>
        </div>
    );
};

export default NavForm;
