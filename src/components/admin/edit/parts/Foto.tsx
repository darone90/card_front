import fileDownload from 'js-file-download';
import React, { MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFotoForShow, getter } from '../../../../global/connection';
import Button from '../../../common/button/Button';

interface Props {
    id: string;
    orginalName: string
}

const Foto = (props: Props) => {

    const { id, orginalName } = props;

    const navigate = useNavigate()

    const [img, setImg] = useState<string>('');

    const showFoto = async () => {

        if (id) {
            const res = await getFotoForShow(`user/sendfoto/${id}/mini`);
            if (res instanceof Error) {
                navigate(`/error/${res.message}`);
            } else {
                const blob = await res.blob();
                const objectURL = URL.createObjectURL(blob);
                setImg(objectURL);
            };
        } else return;
    };

    const downloadFoto = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();

        const res = await getFotoForShow(`user/sendfoto/${id}/normal`);
        if (res instanceof Error) {
            navigate(`/error/${res.message}`)
        } else {
            const blob = await res.blob();
            fileDownload(blob, orginalName);
        };
    };

    const deleteFoto = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        try {
            const res = await getter(`user/foto/remove/${id}`)
            if (res instanceof Error) {
                navigate(`/error/${res.message}`);
            } else {
                if (res.actionStatus !== true) {
                    navigate(`/error/${res.message}`);
                } else {
                    setImg('')
                };
            };
        } catch (err) {
            navigate(`/error/${(err as Error).message}`)
        };
    };

    useEffect(() => {
        (async () => {
            await showFoto();
        })()
    }, [])

    return (
        <div className="Foto">
            <img src={img} alt={'Zdjecie usunięte'} />
            <Button name='Pobierz' className='Standard' func={downloadFoto} />
            <Button name='Usuń' className='Standard' func={deleteFoto} />
        </div>
    );
};

export default Foto;