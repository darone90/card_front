import React, { MouseEvent } from 'react';

import './Gallery.scss';
import { Fotos } from '../../../types/article-types';
import FotoInGallery from './parts/FotoInGallery';

interface Props {
    fotos: Fotos[] | null;
    popupCall: (event: MouseEvent<HTMLElement>, id: string) => void;
}

const Gallery = (props: Props) => {

    if (!props.fotos) return null;

    const fotosGallery = props.fotos.map((foto, index) => <FotoInGallery fotoId={foto.id} key={index} popupCall={props.popupCall} />)

    return (
        <div className="Gallery">
            {fotosGallery}
        </div>
    );
};

export default Gallery;
