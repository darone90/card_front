import React, { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Resume from './Resume';
import ResumeEng from './ResumeEng';
import { downloadResumeConnection } from '../../global/connection';
import fileDownload from 'js-file-download';

import './ResumeWrap.scss';

const ResumeWrap = () => {

    const [languange, setLanguange] = useState<string>('PL');

    const navigate = useNavigate();

    const changeLanguange = () => {
        setLanguange(prev => {
            if (prev === 'PL') {
                return "EN"
            } else {
                return "PL"
            }
        });
    };

    const downloadResume = async (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();

        const response = await downloadResumeConnection(languange);

        if (response instanceof Error) {
            navigate(`/error/${response.message}`)
        } else {
            const blob = await response.blob();
            fileDownload(blob, `Dariusz Pilecki CV ${languange}.pdf`);
        };
    }

    return (
        <div className="ResumePage">
            <button onClick={changeLanguange}>{languange === "PL" ? "Wersja ENG" : "Version PL"}</button>
            <button onClick={downloadResume}>{languange === "PL" ? "Pobierz PDF" : "Download PDF"}</button>
            <button onClick={() => navigate('/')}>{languange === "PL" ? "Powrót" : "Go back"}</button>

            {languange === 'PL' ? <Resume/> : <ResumeEng/>}
        </div>
    );
};

export default ResumeWrap;
