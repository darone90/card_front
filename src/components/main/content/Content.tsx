import React from 'react';

import Modal from './modal/Modal';

import './Content.scss';

const Content = () => {
    return (
        <div className="Content">
            <aside><strong>Dariusz Pilecki</strong></aside>
            <h3>Ostatnie  projekty</h3>
            <div className="Content__modal-space">
                <Modal />
                <Modal />
            </div>
        </div>
    );
};

export default Content;