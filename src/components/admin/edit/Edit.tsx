import React, { ChangeEvent, useEffect, useState, MouseEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getter, sendData } from '../../../global/connection';
import { articleDataValidation } from '../../../global/validation';
import { ArticleData, ArticleListData } from '../../../types/article-types';
import { ConnectionType } from '../../../types/user-types';
import Button from '../../common/button/Button';
import Spinner from '../../common/spinner/Spinner';
import FilesPart from './parts/FilesPart';

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
}

const Edit = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [article, setArticle] = useState<ArticleListData>(initialState);
    const [info, setInfo] = useState<string>('')

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

    useEffect(() => {
        (async () => {
            await getArticle();
        })()
    }, []);

    const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setArticle(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const formSubmit = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        const dataToSend = {
            id: article.id,
            text: article.text,
            title: article.title,
            section: article.section,
            date: article.date
        };

        const validation = articleDataValidation(dataToSend as ArticleData);

        if (validation !== 'true') {
            setInfo(validation);
            return;
        };

        setLoading(true);
        const response = await sendData(dataToSend, 'user/article/patch', ConnectionType.U);
        setLoading(false);

        if (response instanceof Error) {
            navigate(`/error/${response.message}`);
        } else {
            if (response.actionStatus === true) {
                setInfo('Dane zapisane poprawnie');
                setTimeout(() => {
                    window.location.reload()
                }, 2000)
            } else {
                setInfo(response.message as string)
            };
        };
    };

    const goBack = () => {
        navigate(-1);
    }

    const showInfo = info.length > 0 ? <div className="form__info">{info}</div> : null;

    if (loading) return <Spinner />;

    return (
        <div className="Edit">
            <Button name='Wróć' className='standard' func={goBack} />
            {showInfo}
            <div className="Edit__text">
                <form className='Form__place'>
                    <div className="Form__place-text">
                        <label htmlFor='title'>Tytuł</label>
                        <input type="text" name='title' value={article.title} onChange={update} />
                        <label htmlFor="date">Data</label>
                        <input type="date" name='date' value={article.date} onChange={update} accept=".jpg,.png" />
                        <label htmlFor='text'>Treść</label>
                        <textarea name="text" cols={70} rows={20} value={article.text} onChange={update}></textarea>
                        <label htmlFor="section">Typ ogłoszenia</label>
                        <select name="section" value={article.section} onChange={update}>
                            <option value="">Wybierz z listy...</option>
                            <option value="programming">Programowanie</option>
                            <option value="automation">Automatyka</option>
                            <option value="welding">Spawalnictwo</option>
                            <option value="glass">Hutnictwo</option>
                        </select>
                    </div>
                    <div className="Edit__file">
                        <FilesPart fotos={article.fotos} id={article.id} />
                    </div>
                </form>
            </div>
            <Button name='Zapisz zmiany' className='standard' func={formSubmit} />           
        </div>
    );
};

export default Edit;


