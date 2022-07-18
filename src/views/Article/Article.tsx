import React from 'react';
import { useNavigate } from 'react-router-dom';

import Gallery from '../../components/Article/gallery/Gallery';

import './Article.scss';

const Article = () => {

    const navigate = useNavigate();

    return (
        <div className="Article">
            <a onClick={() => navigate(-1)}>Powrót</a>
            <h1>Tytuł projektu o którym będzie tu pisane</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ea sit distinctio tenetur dolorem ipsa debitis quae suscipit minima praesentium velit, maiores voluptate voluptatem autem illo asperiores eveniet mollitia. Culpa!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ea sit distinctio tenetur dolorem ipsa debitis quae suscipit minima praesentium velit, maiores voluptate voluptatem autem illo asperiores eveniet mollitia. Culpa!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ea sit distinctio tenetur dolorem ipsa debitis quae suscipit minima praesentium velit, maiores voluptate voluptatem autem illo asperiores eveniet mollitia. Culpa!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ea sit distinctio tenetur dolorem ipsa debitis quae suscipit minima praesentium velit, maiores voluptate voluptatem autem illo asperiores eveniet mollitia. Culpa!
            </p>
            <Gallery />
        </div>
    );
};

export default Article;