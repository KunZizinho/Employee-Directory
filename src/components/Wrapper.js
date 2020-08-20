import React from "react";
import Header from "./Header";
import Main from "./Main";

function Wrapper(props) {

    return <div className='wrapper'>
                <Header />
                <Main />
            </div>
};

export default Wrapper;