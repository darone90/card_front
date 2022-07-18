import React from 'react';

import './Button.scss';

interface Props {
    name: string;
    func?: () => void;
    className: string
}

const Button = (props: Props) => {

    const { name, func, className } = props;

    return (
        <button onClick={func} className={className}>{name}</button>
    );
};

export default Button;