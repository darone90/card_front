import React from 'react';

import Button from '../../common/button/Button';

import './Form.scss';

const Form = () => {
    return (
        <div className="Form">
            <form className='Form__place'>
                <div className="Form__place-text">
                    <label htmlFor='title'>tytuł</label>
                    <input type="text" name='title' />
                    <label htmlFor='text'>Treść:</label>
                    <textarea name="text" cols={70} rows={20}></textarea>
                    <label htmlFor="type">Typ ogłoszenia</label>
                    <select name="type">
                        <option value="programming">Programowanie</option>
                        <option value="automation">Automatyka</option>
                        <option value="welding">Spawalnictwo</option>
                        <option value="glass">Hutnictwo</option>
                    </select>
                </div>
                <div className="Form__place-files">
                    <label>
                        Dodaj zdjęcia <input type="file" multiple />
                    </label>
                </div>
                <Button name='Zapisz' className='standard' />
            </form>
        </div>
    );
};

export default Form;