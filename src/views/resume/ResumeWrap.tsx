import React, { useState } from 'react';
import Resume from './Resume';
import ResumeEng from './ResumeEng';

const ResumeWrap = () => {

    const [languange, setLanguange] = useState<string>('PL');

    const changeLanguange = () => {
        setLanguange(prev => {
            if (prev === 'PL') {
                return "EN"
            } else {
                return "PL"
            }
        });
    };

    return (
        <div className="ResumePage">
            <strong>{languange}</strong>
            <button onClick={changeLanguange}>{languange === "PL" ? "Wersja ENG" : "Version PL"}</button>
            <button>{languange === "PL" ? "Pobierz PDF" : "Download PDF"}</button>
            <button>{languange === "PL" ? "Powrót" : "Go back"}</button>

            {languange === 'PL' ? <Resume/> : <ResumeEng/>}
        </div>
    );
};

export default ResumeWrap;
