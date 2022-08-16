import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFotoForShow } from '../../../../global/connection';
import { ArticleListData } from '../../../../types/article-types';

import './Modal.scss';

interface Props {
    article: ArticleListData
}

const Modal = (props: Props) => {

    const navigate = useNavigate();

    const [foto, setFoto] = useState<string>('')

    const { title, text, id, fotos } = props.article;

    const shortText = (text as string).length > 200 ? (text as string).substring(0, 200) : text;

    const getFoto = async () => {

        const res = await getFotoForShow(`user/sendfoto/${fotos[0].id}/mini`);
        if (res instanceof Error) {
            navigate(`/error/${res.message}`);
        } else {
            const blob = await res.blob();
            const objectURL = URL.createObjectURL(blob);
            setFoto(objectURL);
        };
    };

    const navigateToArticle = () => {
        navigate(`/article/${id}`)
    }

    useEffect(() => {
        (async () => {
            await getFoto();
        })();
    }, [])

    return (
        <div className="Modal">
            <div className="Modal__container">
                <h1 className='Modal__title'>{title}</h1>
                <p className='Modal__text'>
                    {shortText}
                    {foto.length < 1 ? null : <img src={foto} alt="foto" />}
                </p>
                <button className="Modal__btn" onClick={navigateToArticle}>Zobacz</button>
            </div>
        </div>
    );
};

export default Modal;
