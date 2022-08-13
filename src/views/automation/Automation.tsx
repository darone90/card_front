import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Project from '../../components/programming/modal/Project';
import { RootState } from '../../store';

import './Automation.scss';

const Automation = () => {

    const navigate = useNavigate();

    const { article } = useSelector((store: RootState) => store.article);

    const programmingArticle = article.filter(art => art.section === "automation");

    const modalList = programmingArticle.map((art, index) => <Project article={art} key={index} />);

    return (
        <div className="Automation">
            <a onClick={() => navigate('/')}>Powrót</a>
            <h1>Przekaźniki, czujniki, <strong>moduły</strong>...</h1>
            <p>Po kilku latach zawodowej pracy w której cały czas korzystam ze zautmatyzowanych urządzeń
                oraz instalacji, naturalnie zrodziło się pytanie: jak to działa ? Pytanie to rodziło się szczególnie
                w sytuacjach gdy coś nagle działać przestawało. W każdym razie świat przekaźników wciągną mnie
                zarówno w wyniku potrzeby naprawy w awaryjnych sytuacjach jak i ciekawości ponieważ miałem już
                całą głowę pomysłów jak to wykorzystać. Poniżej przedstawiam kilka swoich koncepcji.
            </p>
            <div className="Automation__projects">
                {modalList.length < 1 ? "Brak artykułów w tej kategorii" : modalList}   
            </div>
        </div>
    );
};

export default Automation;
