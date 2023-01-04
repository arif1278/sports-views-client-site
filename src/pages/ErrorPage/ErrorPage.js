import React from 'react';
import errorImg from '../../assets/Error.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img className='w-96 mx-auto my-8' src={errorImg} alt=''></img>
        </div>
    );
};

export default ErrorPage;