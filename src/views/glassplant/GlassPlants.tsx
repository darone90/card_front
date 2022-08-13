import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Project from '../../components/programming/modal/Project';
import { RootState } from '../../store';

import './GlassPlant.scss';

const GlassPlant = () => {

    const navigate = useNavigate();

    const { article } = useSelector((store: RootState) => store.article);

    const programmingArticle = article.filter(art => art.section === "glass");

    const modalList = programmingArticle.map((art, index) => <Project article={art} key={index} />);

    return (
        <div className="Glassplant">
            <a onClick={() => navigate('/')}>Powrót</a>
            <h1>Jak pachnie <strong>stopione</strong> szkło ? </h1>
            <p>Oczywiście ciężko to sprawdzić (stopione szkło ma zazwyczaj 1000 - 1500 stopni C). Dla mnie jedak zawsze będzie
                to zapach huty szkła czyli niebezpiecznego połączenia gazu ziemnego, stali, wody i powietrza sprężonego, oleju, ceramiki.... Kolejny
                czynnik to hałas. Jednak gdy wszystko w końcu działa brzmi on bardziej jak muzyka...
                Na hutach pracuję już 8 lat. Mam za sobą wiele niesamowitych inwestycji, doświadczeń, projektów ale i awarii.
                Aby przybliżyć temat przedstawiam moje ostatnie projekty zawodowe.
            </p>
            <div className="Glassplant__projects">
                {modalList.length < 1 ? "Brak artykułów w tej kategorii" : modalList}
            </div>
        </div>
    );
};

export default GlassPlant;