import React from 'react';
import { useNavigate } from 'react-router-dom';

import Project from '../../components/programming/modal/Project';

import './Welding.scss';

const Welding = () => {

    const navigate = useNavigate();

    return (
        <div className="Welding">
            <a onClick={() => navigate('/')}>Powrót</a>
            <h1>Inżynieria stal i sztuka... <strong>Spawalnictwo</strong></h1>
            <p>Spawanie budziło moje zainteresowanie od pierwszych dni pracy. Osoby pracujące na stanowisku spawacz będące
                fachowcami w swojej dziedzinie niewątpliwie budzą szacunek i pewien rodzaj zazdrości. Spawanie na wysokim poziomie
                jest po prostu trudne, a co za tym idzie jest cenione. Wymaga sporej wiedzy technicznej, materiałoznawczej, jest także
                swego rodzaju sztuką, wymaga wprawnej ręki, praktyki. W przemyśle bez podstaw spawania niestety nie da się za wiele zdziałać.
                Dlatego spawanie elktrodą otuloną (MMA) jest niejako podstawą. Nie jest to najestetyczniejsza forma spawania,
                ale skuteczna. Ze względu na estetykę postanowiłem opanować spawanie metodą MIG/MAG. Aktualnie w planach mam zakup
                spawarki TIG i opanowanie tej metody.
            </p>
            <div className="Welding__projects">
                <Project />
                <Project />
            </div>
        </div>
    );
};

export default Welding;
