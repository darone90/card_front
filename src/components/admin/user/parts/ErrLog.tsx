import React from 'react';
import { ErrorLog } from '../../../../types/errrolog-types';

interface Props {
    error: ErrorLog;
}

const ErrLog = (props: Props) => {

    const { id, date, message, stack, name } = props.error;
    return (
        <div className="Error">
            <h3>Błąd: {name} wystąpił: {date} id: {id}</h3>
            <p>Opis: {message}</p>
            <p>Stack: {stack}</p>
        </div>
    );
};

export default ErrLog;