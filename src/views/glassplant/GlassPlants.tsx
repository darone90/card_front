import React from 'react';
import { useNavigate } from 'react-router-dom';

import Project from '../../components/programming/modal/Project';

import './GlassPlant.scss';

const GlassPlant = () => {

    const navigate = useNavigate()

    return (
        <div className="Glassplant">
            <a onClick={() => navigate('/')}>Powrót</a>
            <h1>Jak pachnie <strong>stopione</strong> szkło ? </h1>
            <p>Oczywiście ciężko to sprawdzić (stopione szkło ma zazwyczaj 1000 - 1500 stopni C). Dla mnie jedak zawsze będzie
                to zapach huty szkła czyli niebezpiecznego połączenia gazu ziemnego, stali, wody i powietrza sprężonego. Kolejny
                czynnik to hałas. Jednak gdy wszystko w końcu działa brzmi on bardziej jak muzyka...
                Na hutach pracuję już 8 lat. Mam za sobą wiele niesamowitych inwestycji, doświadczeń, projektów ale i awarii.
                Aby przybliżyć temat przedstawiam moje ostatnie projekty zawodowe.
            </p>
            <div className="Glassplant__projects">
                <Project />
                <Project />
            </div>
        </div>
    );
};

export default GlassPlant;