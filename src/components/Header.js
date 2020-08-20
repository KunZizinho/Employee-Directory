import React, { Component } from 'react';


 class Header extends Component {

    render() {
        return (
            <div className='header'>

                <h1 style={{fontFamily: 'Times New Roman',fontSize: 60,
                textDecoration: 'underline red'}}>Employee Directory</h1>

             

            </div>
        );
    };
};

export default Header;