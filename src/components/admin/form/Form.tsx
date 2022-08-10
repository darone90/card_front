import React, { ChangeEvent, useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendMultipart } from '../../../global/connection';
import { articleDataValidation } from '../../../global/validation';
import { ArticleData } from '../../../types/article-types';
import { ConnectionType } from '../../../types/user-types';

import Button from '../../common/button/Button';
import Spinner from '../../common/spinner/Spinner';

import './Form.scss';
import FileInfo from './parts/fileInfo';

const initialState = {
    title: "",
    text: "",
    date: "",
    section: ""
}


const Form = () => {

    const navigate = useNavigate();

    const [files, setFiles] = useState<FileList | null>(null);

    const [artData, setArtData] = useState<ArticleData>(initialState);

    const [info, setInfo] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setArtData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const fileHandler = (event: ChangeEvent<HTMLInputElement>): void => {

        if (event.target.files) {
            const filesList = event.target.files
            setFiles(filesList);
        };
    };

    const formSubmit = async (event: MouseEvent<HTMLElement>) => {

        event.preventDefault();

        const validation = articleDataValidation(artData);
        if (validation != 'true') {
            setInfo(validation);
            return;
        };
        if (window.confirm('Opublikować ?')) {
            const formData = new FormData();

            if (files) {
                for (let i = 0; i < files.length; i++) {
                    formData.append('file', files[i]);
                }
            };
            formData.append('data', JSON.stringify(artData));
            setLoading(true);
            const response = await sendMultipart(formData, 'user/addarticle', ConnectionType.A);
            setLoading(false);
            if (response instanceof Error) {
                navigate(`/error/${response.message}`);
            } else {
                setInfo(response.message);
                setArtData(initialState);
                setFiles(null);
            }
        } else {
            return;
        };
    };

    const addedFile = files ? [...files].map((file, index) => <FileInfo name={file.name} size={file.size} key={index} />) : null;

    const showInfo = info.length > 0 ? <div className="form__info">{info}</div> : null;

    if (loading) return <Spinner />; 

    return (
        <div className="Form">
            {showInfo}
            <form className='Form__place'>
                <div className="Form__place-text">
                    <label htmlFor='title'>Tytuł</label>
                    <input type="text" name='title' value={artData.title} onChange={update} />
                    <label htmlFor="date">Data</label>
                    <input type="date" name='date' value={artData.date} onChange={update} accept=".jpg,.png" />
                    <label htmlFor='text'>Treść</label>
                    <textarea name="text" cols={70} rows={20} value={artData.text} onChange={update}></textarea>
                    <label htmlFor="section">Typ ogłoszenia</label>
                    <select name="section" value={artData.section} onChange={update}>
                        <option value="">Wybierz z listy...</option>
                        <option value="programming">Programowanie</option>
                        <option value="automation">Automatyka</option>
                        <option value="welding">Spawalnictwo</option>
                        <option value="glass">Hutnictwo</option>
                    </select>
                </div>
                <div className="Form__place-files">
                    <label>
                        Dodaj zdjęcia <input type="file" multiple onChange={fileHandler} />
                    </label>
                    {addedFile}
                </div>
                <Button name='Zapisz' className='standard' func={formSubmit} />
            </form>
        </div>
    );
};

export default Form;