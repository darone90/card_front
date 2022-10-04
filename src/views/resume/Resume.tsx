import React, {MouseEvent} from 'react';

import './Resume.scss';
import me from './IMG_8069.jpg';
import html from './HTML5.png';
import css from './CSS3.png';
import scss from './Sass.png';
import bootstrap from './Bootstrap.png';
import gsap from './GSAP.png';
import react from './React.png';
import redux from './Redux.png';
import vue from './Vue.png';
import js from './JS.png';
import ts from './typescript.png';
import node from './Node.png';
import ex from './express.png';
import nest from './NEST.png';
import typeorm from './typeorm.png'
import mongo from './mongo.png';
import sql from './mySql.png';
import jest from './jest.png';
import git from './git.png';
import nginx from './nginx.png';
import pm from './PM2.png';
import webpack from './webpack.png';
import websocket from './websocket.png';

const techstack = [{img: html, name: 'HTML5'}, {img: css, name: 'CSS3'}, {img: scss, name: 'SCSS'}, {img: bootstrap, name: 'Bootstrap'}, {img: js, name: 'JavaScript'},
{img: gsap, name: 'GSAP'}, {img: react, name: 'React'}, {img: redux, name: 'Redux'}, {img: vue, name: 'Vue'}, 
{img: ts, name: 'TypeScript'}, {img: node, name: 'Node.js'}, {img: ex, name: 'Express'}, {img: nest, name: 'Nest'}, {img: typeorm, name: 'TypeORM'},
{img: mongo, name: 'MongoDB'}, {img: sql, name: 'mySql'}, {img: jest, name: 'Jest'}, {img: git, name: 'Git'}, {img: nginx, name: 'NginX'},
{img: pm, name: 'PM2'}, {img: webpack, name: 'Webpack'}, {img: websocket, name: 'Websocket'}]


const Resume = () => {

    const technologies = techstack.map((tech,index) => <div key={index}><img src={tech.img} alt={tech.name} /><h3>{tech.name}</h3></div>)

    const buttonEffect = (e:any) => {
        const x = e.pageX - e.target.offsetLeft
	    const y = e.pageY - e.target.offsetTop

	    e.target.style.setProperty('--x', `${ x }px`)
	    e.target.style.setProperty('--y', `${ y }px`)
    }

    return (
        <div className="Resume">
            <div className="Resume__Head">
                <div className="Resume__Head-foto">
                    <img src={me} alt="my foto" />
                </div>
                <div className="Resume__Head-title">
                    <h1>Dariusz Pilecki</h1>
                    <h2>Web Developer</h2>
                    <p>Cześć! Nazywam się Dariusz i jestem pasjonatem programowania dla którego poznawanie nowych technolgii, oraz roziwjanie 
                        swoich umiejętności jest priorytetem. Mam na koncie kilka indywidualnych projektów wykonanych komercyjnie i aktualnie marzę by stać się częścią 
                        zgrangeo zespołu w którym będę mógł rozwinać skrzydła. 
                 </p>
                </div>
            </div>
            <div className="Resume__Content">
                    <section className="Resume__Content-info">
                        <div className="contact">
                            <h2>Kontakt</h2>
                        <p><i className="fa-sharp fa-solid fa-location-dot"></i> Kraków</p>
                        <p><i className="fas fa-envelope"></i> pileckidariusz90@gmail.com</p>
                        <p><i className="fas fa-phone"></i> +48 531 587 030</p>
                        <p><i className="fa fa-light fa-globe"></i> <a href="https://www.techniczny.site">techniczny.site</a></p>
                        </div>
                        <div className="media">
                            <h2>Media</h2>
                            <p><i className="fab fa-github"></i> <a href="https://github.com/darone90">GitHub</a></p>
                            <p><i className="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/dariusz-pilecki-797b7819b/">LinkedIn</a></p>
                        </div>
                        <div className="technologies">
                            <h2>Technologie</h2>
                            <div>
                                {technologies}
                            </div>
                        </div>
                        <div className="education">
                            <h2>Edukacja</h2>
                            <h3>2009 - 2014</h3>
                            <strong>AGH Kraków</strong>
                            <p>
                                Inżynieria środowiska: specjalizacja OZE
                            </p>
                            <li> <p>tytuł:</p>  Inżynier</li>
                            
                        </div>

                        <div className="job">
                            <h2>Aktualna praca</h2>
                            <h3>2015 - dziś</h3>
                            <strong>Techglass</strong>
                            <p>Specjalista ds. techniki cieplnej</p>
                        </div>
                        <div className="clause">
                            <h2>Klauzula</h2>
                            <p>Wyrażam zgodę na przetwarzanie moich danych osobowych w celu prowadzenia rekrutacji na aplikowane przeze mnie stanowisko.</p>
                        </div>
                    </section>
                    <section className="Resume__Content-main">
                            <h2>Projekty</h2>
                            <article>
                                <h3>Aplikacja Head Hunter</h3>
                                <h4>Stack: React, Nest, TypeScript, TypeORM, mySql</h4>
                                <p>
                                    Aplikacja stworzona w ramach praktyk na zakończenie rocznego kursu programowania MegaK.
                                    Praca w 8 osobowym zespole w metodologii Scrum/Agile, w którym zostałem liderem części back-end. 
                        
                                </p>
                                <a href="https://github.com/Bartlomiej95/GR12-HeadHunter-backend" onMouseMove={(e) => buttonEffect(e)}>Repozytorium projektu Back-end</a>
                                <a href="https://github.com/Bartlomiej95/GR12-HeadHunter-frontend" onMouseMove={(e) => buttonEffect(e)}>Repozytorium projektu Front-end</a>

                            </article>
                            <article>
                                <h3>Aplikacja Tool base</h3>
                                <h4>Stack: React, Express, TypeScript, TypeORM, mySql, Jest</h4>
                                <p>
                                    Program wspomagający zarządzanie narzędziami warsztatu, wykonany komercyjnie. Udało mi się stworzyć płynnie działające
                                    aplikacje front-end i back-end połączone z bazą danych, posiadające prosty, responsywny interfejs. Back-end napisałem stosując TDD.                 
                                </p>
                                <a href="https://github.com/darone90/toolbase-back" onMouseMove={(e) => buttonEffect(e)}>Repozytorium projektu Back-end</a>
                                <a href="https://github.com/darone90/toolbase-front" onMouseMove={(e) => buttonEffect(e)}>Repozytorium projektu Front-end</a>
                            </article>
                            <article>
                                <h3>Urządzenie Dry Ager</h3>
                                <h4>Stack: React, Express, Websocket, Python</h4>
                                <p>
                                    Sterowanie urządzenia oparte o serwer Websocket oraz Experss.
                                    Elementy wykonawcze sterowane przez skrypty napisane w Python uruchamiane jako child process.
                                    Program steruje chłodzeniem, podgrzewaniem, suszeniem, nawilżaniem oraz wbudowaną kamerą wraz z podświetleniem.

                                </p>
                                <a href="https://github.com/darone90/dryager" onMouseMove={(e) => buttonEffect(e)}>Repozytorium projektu Back-end</a>
                                <a href="https://github.com/darone90/dryagerFront/tree/main/src" onMouseMove={(e) => buttonEffect(e)}>Repozytorium projektu Front-end</a>
                            </article>
                            <article>
                                <h3>Serwis GSSCH</h3>
                                <h4>Stack: Express, JavaScript, MongoDB</h4>
                                <p>
                                    Serwis wykonany dla spółdzielni handlowej, posaidający system zarządzania treścią, archiwizacji oraz chmurę na dokumenty. Istnieje możliwość 
                                    dodawania użytkowników o różnym poziomie uprawnień. 
                                </p>
                                <a href="https://github.com/darone90/gssch-komancza" onMouseMove={(e) => buttonEffect(e)}>Repozytorium projektu</a>
                            </article>
                            <div className="iteduction">
                                <div>
                                    <h2>Kursy IT</h2>
                                    <section>
                                        <h3>
                                            Vue - The Complete Guide (incl. Router and Composition API)
                                        </h3>
                                        <p>
                                            30 godzin Stack: <strong>Vue.js</strong> 
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            MegaKurs
                                        </h3>
                                        <p>
                                            14 miesięcy Stack: <strong>JavaScript ES6+, Node, Express, React, Nest, TypeScript, Jest, mySql, noSql</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Zaawansowane projekty front-end 
                                        </h3>
                                        <p>
                                            50 godzin Stack: <strong>SASS, GSAP, Canvas, SVG, CSS, Webpack, Bootstrap</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Python: Podstawy 
                                        </h3>
                                        <p>
                                            25 godzin Stack: <strong>Python 3</strong> 
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Podstawy Back-endu w node.js 
                                        </h3>
                                        <p>
                                            40 godzin Stack: <strong>Node, Express, Jest </strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            React od podstaw 
                                        </h3>
                                        <p>
                                            60 godzin Stack: <strong>React</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Podstawy programowania JavaScript 
                                        </h3>
                                        <p>
                                            40 godzin Stack: <strong>JavaScript ES6+</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Front-end dla średniozaawansowanych
                                        </h3>
                                        <p>
                                            15 dni Stack: <strong>CSS3, SASS, HTML5, JavaScript</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Web-developer od podstaw
                                        </h3>
                                        <p>
                                            15 dni Stack: <strong>HTML5, CSS3</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                </div>
                            </div>
                    </section>
                    
                </div>
        </div>
    )
};

export default Resume;