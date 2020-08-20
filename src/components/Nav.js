import React from 'react';
import SearchTable from './SearchTable';


function Nav({ handleSearchChange }) {

    return (
            <div className='navbar-flex'>
                <SearchTable handleSearchChange={handleSearchChange} />
            </div>
    );
};

export default Nav;