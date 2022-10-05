import  React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getter } from '../../../../global/connection';


const Visitors = () => {

    const [counter, setCounter] = useState<string>("0");

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response = await getter('user/visitors');
            if (response instanceof Error) {
                navigate(`/error/${response.message}`)
            } else {
                if (response.actionStatus === true && typeof response.message === 'string') {
                    setCounter(response.message);
                } else {
                    navigate(`/error/${response.message}`)
                };
            };
        })();
    },[]);

    const clearCounter = async () => {
        const response = await getter('user/visitors/clear');
            if (response instanceof Error) {
                navigate(`/error/${response.message}`)
            } else {
                if (response.actionStatus === true &&  response.message === 'Counter Clean') {
                    setCounter('0');
                } else {
                    navigate(`/error/${response.message}`)
                };
            }
    }

    return (
        <div className="Visitors">
            <div className="Visitors__counter">
                <strong>Liczba odwiedzin: {counter}</strong>
                <button className="Visitors__counter-clear" onClick={clearCounter}>Wyzeruj licznik</button>
            </div>
        </div>
    );
};

export default Visitors;