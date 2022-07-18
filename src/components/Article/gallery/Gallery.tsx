import React from 'react';

import foto1 from './automatyka.jpeg';
import foto2 from './huta.jpg';
import foto3 from './Welding_Industrial.png';

import './Gallery.scss';

const Gallery = () => {
    return (
        <div className="Gallery">
            <div className="Gallery__block">
                <div className="Gallery__block-title">
                    <a className="Gallery__block-link" href="#">

                        <img className="Gallery__block-link-img" src={foto1} alt="Zdjęcie" />
                    </a>
                </div>
            </div>

            <div className="Gallery__block">
                <div className="Gallery__block-title">
                    <a className="Gallery__block-link" href="#">

                        <img className="Gallery__block-link-img" src={foto2} alt="Zdjęcie" />
                    </a>
                </div>
            </div>

            <div className="Gallery__block">
                <div className="Gallery__block-title">
                    <a className="Gallery__block-link" href="#">

                        <img className="Gallery__block-link-img" src={foto3} alt="Zdjęcie" />
                    </a>
                </div>
            </div>

            <div className="Gallery__block">
                <div className="Gallery__block-title">
                    <a className="Gallery__block-link" href="#">

                        <img className="Gallery__block-link-img" src={foto3} alt="Zdjęcie" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
