import React from 'react';
import { useParams } from 'react-router-dom';

import './List.scss';

const List = () => {

    const { type } = useParams();
    return (
        <div className="List">
            Lista {type}

        </div>
    );
};

export default List;