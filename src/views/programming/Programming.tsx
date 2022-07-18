import React from 'react';
import { useNavigate } from 'react-router-dom';

import Project from '../../components/programming/modal/Project';

import './Programming.scss';

const Programming = () => {

    const navigate = useNavigate();

    return (
        <div className="Programming">
            <a onClick={() => navigate('/')}>Powrót</a>
            <h1>Rozrywka, Pasja, Praca: <strong>Programowanie</strong></h1>
            <p>
                Swoją przygodę z programowaniem rozpoczołem dwa lata temu. Było ono moim brakującym ogniwem w automatyce.
                Stosunkowo szybko odkryłem jednak Javascript który wciągnął mnie na całego i C++ poszedł w lekką odstawkę.
                Aktualnie pochwalić mogę się kilkonastoma projektami w tym kilkoma wykonanymi komercyjnie.
                Kilka z moich ostatnich projektów chciałbym zaprezentować niżej z krótkim opisem.
                Zachęcam również do sprawdzenia ich w moich publicznych repozytoriach.
                Na obecną chwilę bardzo chciałbym zdobyć doświadczenie przy pracy w większych programistycznych projektach.
                Bardzo zależy mi również na możliwości dalszego rozwoju związanego z programowaniem. Jest to aktualnie
                mój priorytet: Połączenie rozrywki, pasji, oraz kariery zawodowej.
            </p>

            <div className="Programming__projects">
                <Project />
                <Project />
            </div>


        </div>
    );
};

export default Programming;
