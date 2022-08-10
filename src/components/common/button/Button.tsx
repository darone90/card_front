import React, { MouseEvent } from 'react';

import './Button.scss';

interface Props {
    name: string;
    func?: (event: MouseEvent<HTMLElement>) => void | Promise<void>;
    className: string
}

const Button = (props: Props) => {

    const { name, func, className } = props;

    return (
        <button onClick={func} className={className}>{name}</button>
    );
};

export default Button;