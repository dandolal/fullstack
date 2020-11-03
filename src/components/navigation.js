import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">start_page</NavLink>
            <NavLink to="/problem">problem</NavLink>
        </div>
    );
}

export default Navigation;