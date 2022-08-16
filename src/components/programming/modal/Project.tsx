import React, { useState, MouseEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFotoForShow } from '../../../global/connection';
import { ArticleListData } from '../../../types/article-types';

import './Project.scss';

interface Props {
    article: ArticleListData
}

const Project = (props: Props) => {

    const navigate = useNavigate();

    const { text, title, date, fotos, id } = props.article;

    const goToArticle = () => {
        navigate(`/article/${id}`)
    };

    const shortText = (text as string).length > 200 ? (text as string).substring(0, 200) : text;

    const [foto, setFoto] = useState<string>('');

    const getFoto = async () => {
        if (!fotos[0]) return;
        const res = await getFotoForShow(`user/sendfoto/${fotos[0].id}/mini`);
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
    }, []);

    return (
        <div className="Project">
            <div className="Project__modal-container">
                <div className="Project__modal-container-modal">
                    <h1 className='title'>{title}<strong>{date}</strong></h1>
                    <p className='text'>
                        {foto.length < 1 ? null : <img src={foto} alt="foto" className='Project__modal-container-foto' />}
                        {shortText}
                    </p>
                    <button onClick={goToArticle}>Czytaj więcej</button>
                </div>
            </div>
        </div>
    );
};

export default Project;