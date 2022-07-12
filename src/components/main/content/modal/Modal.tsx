import React from 'react';

import './Modal.scss';

const Modal = () => {
    return (
        <div className="Modal">
            <div className="Modal__container">
                <h1 className='Modal__title'>Tytuł modala</h1>
                <p className='Modal__text   '>tekst opis czy jakieś inne lorem ipsum coś tam lores</p>
                <button className="Modal__btn">Przycisk</button>
            </div>
        </div>
    );
};

export default Modal;
