import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to="/" className={(navData) => navData.isActive ? "nav-active" : "" }>
                Accueil
            </NavLink>
            
            <NavLink exact className={(navData) => navData.isActive ? "nav-active" : "" } to="/news">
                 News
           </NavLink>

            <NavLink exact className={(navData) => navData.isActive ? "nav-active" : "" } to="/about">
                 About
           </NavLink>

          
           
              
        </div>
    );
};

export default Navigation;