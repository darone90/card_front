import React, { useEffect, useState, MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Gallery from '../../components/Article/gallery/Gallery';
import Popup from '../../components/Article/gallery/parts/Popup';
import Spinner from '../../components/common/spinner/Spinner';
import { getter } from '../../global/connection';
import { ArticleListData } from '../../types/article-types';

import './Article.scss';

const initialState: ArticleListData = {
    title: "",
    date: "",
    id: "",
    section: "",
    text: "",
    fotos: [{
        id: "",
        name: "",
        orginalName: "",
        size: 0,
    }]
};

const Article = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [article, setArticle] = useState<ArticleListData>(initialState);
    const [loading, setLoading] = useState<boolean>(false);
    const [popupActie, setPopupActive] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState<string>('')

    const getArticle = async () => {
        setLoading(true);
        const response = await getter(`user/getone/${id}`);
        setLoading(false);
        if (response instanceof Error) {
            navigate(`/error/${response.message}`);
        } else {
            if (response.actionStatus === true) {
                setArticle(response.message as ArticleListData)
            } else {
                navigate(`/error/${response.message}`);
            };
        };
    };

    const activatePopup = (event: MouseEvent<HTMLElement>, id: string) => {
        event.preventDefault();
        setCurrentId(id);
        setPopupActive(true);
    };

    const disactivatePopup = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setCurrentId('');
        setPopupActive(false);
    };

    useEffect(() => {
        (async () => {
            await getArticle();
        })();
    }, [])

    if (loading) return <Spinner />;
    if (popupActie) return <Popup fotoId={currentId} func={disactivatePopup} />

    return (
        <div className="Article">
            <a onClick={() => navigate(-1)}>Powrót</a>
            <h1>{article.title} <strong>{article.date}</strong></h1>
            <div className="Article__wrap">
            <p>
                {article.text}
            </p>
                {article.fotos.length > 0 ? <Gallery fotos={article.fotos} popupCall={activatePopup} /> : null}
            </div>
        </div>
    );
};

export default Article;