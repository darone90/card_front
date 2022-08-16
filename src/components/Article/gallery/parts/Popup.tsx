import React, { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFotoForShow } from '../../../../global/connection';

import './Popup.scss';


interface Props {
    fotoId: string;
    func: (event: MouseEvent<HTMLElement>) => void;
}
const Popup = (props: Props) => {

    const navigate = useNavigate();

    const [foto, setFoto] = useState<string>('');

    const getFoto = async () => {

        const res = await getFotoForShow(`user/sendfoto/${props.fotoId}/normal`);
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
        })()
    }, []);

    return (
        <div className="Popup">
            <img src={foto} alt="foto" />
            <button onClick={props.func}>Powrót</button>
        </div>
    );
};

export default Popup
