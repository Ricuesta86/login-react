import React from 'react';
import { NavLink } from 'react-router-dom';

const NavForm = () => {
    return (
        <div className="row">
            <div className="col-5 text-center">
            <NavLink 
                        activeClassName="active"
                        exact
                        to="/login"
                    >
                Iniciar sesión 
            </NavLink>
                        
            </div>
            <div className="col-2 text-center">|</div>
            <div className="col-5 text-center">
            <NavLink 
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
