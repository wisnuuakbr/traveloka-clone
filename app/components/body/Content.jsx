import React from 'react';

const Content = () => {
    // create gradient bg
    const gradientStyles = {
        background: 'linear-gradient(to bottom, #46b0e7, #157fd3)'
    };

    return (
        <div className='mx-auto w-full px-1 py-32' style={gradientStyles}>
        </div>
    );
};

export default Content;
