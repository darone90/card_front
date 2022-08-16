import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store';

import './List.scss';
import ListPart from './parts/listPart';

const List = () => {

    const { type } = useParams();
    const { article } = useSelector((store: RootState) => store.article);



    const list = article.filter(art => art.section === type);
    const positions = list.map((art, index) => <ListPart title={art.title} date={art.date} id={art.id} key={index} />);

    const toShow = list.length < 1 ? 'Aktualnie brak artykułów w tej kategorii' : positions;

    return (
        <div className="List">
            <h2>Artykuły z kategorii {type}</h2>
            {toShow}
        </div>
    );
};

export default List;