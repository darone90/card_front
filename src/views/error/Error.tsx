import React from 'react';
import { useParams } from 'react-router-dom';

const Error = () => {

    const { message } = useParams();

    return (
        <div className="error">
            wystąpił błąd: {message}
        </div>
    );
};

export default Error;