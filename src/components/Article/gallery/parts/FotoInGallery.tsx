import React, { useEffect, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFotoForShow } from '../../../../global/connection';

interface Props {
    fotoId: string;
    popupCall: (event: MouseEvent<HTMLElement>, id: string) => void;
}

const FotoInGallery = (props: Props) => {

    const navigate = useNavigate();

    const { fotoId, popupCall } = props;

    const [foto, setFoto] = useState<string>('')

    const getFoto = async () => {

        const res = await getFotoForShow(`user/sendfoto/${fotoId}/mini`);
        if (res instanceof Error) {
            navigate(`/error/${res.message}`);
        } else {
            const blob = await res.blob();
            const objectURL = URL.createObjectURL(blob);
            setFoto(objectURL);
        };
    };

    useEffect(() => {
        (async () => {
            await getFoto()
        })();
    }, [])

    return (
        <div className="Gallery__block">
            <div className="Gallery__block-title">
                <a className="Gallery__block-link" onClick={(e) => popupCall(e, fotoId)}>

                    <img className="Gallery__block-link-img" src={foto} alt="Zdjęcie" />
                </a>
            </div>
        </div>
    );
};

export default FotoInGallery;