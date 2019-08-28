// Assignment 8 - HTML / CSS / React
//
//
//

import React from 'react';
import ReactDOM from 'react-dom';


    function  formatthisName(user) {
        return user.firstName + ' ' + user.lastName;
    }
    const user = {
        firstName: 'Adam',
        lastName: 'Chen'
    };

    const element = (
        <h1>
            Hello, {formatthisName(user)}!
        </h1>
    );




ReactDOM.render(
    element,
    document.getElementById('root')
);

