
import React from 'react';
import {Link } from "react-router-dom";

function Page404(props) {
    return (
        <div>
            <h1 className='errorPage'>WRONG PAGE</h1>
            <Link to="/">
                <h1>Go to Main</h1>
            </Link>
        </div>
    );
}

export default Page404;