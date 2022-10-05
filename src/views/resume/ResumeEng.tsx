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


const ResumeEng = () => {

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
                    <p>Hi! My name is Dariusz and I'm passionate about programming. I love learning new technologies, and continuous development of my skills is my priority.
                       I have made several individual commercial projects and currently  dreaming about becoming a part of a good team
                       that will let me spread my wings.
                 </p>
                </div>
            </div>
            <div className="Resume__Content">
                    <section className="Resume__Content-info">
                        <div className="contact">
                            <h2>Contact</h2>
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
                            <h2>Technologies</h2>
                            <div>
                                {technologies}
                            </div>
                        </div>
                        <div className="education">
                            <h2>Education</h2>
                            <h3>2009 - 2014</h3>
                            <strong>AGH Kraków</strong>
                            <p>
                            Environmental engineering: specialization RES
                            </p>
                            <li> <p>degree:</p>  Bachelor of Engineering</li>                         
                        </div>

                        <div className="job">
                            <h2>Current Job</h2>
                            <h3>2015 - today</h3>
                            <strong>Techglass</strong>
                            <p>Combustion Engineer</p>
                        </div>
                        <div className="clause">
                            <h2>Clause</h2>
                            <p>I hereby consent to my personal data being processed for the purpose of considering my application.</p>
                        </div>
                    </section>
                    <section className="Resume__Content-main">
                            <h2>Projects</h2>
                            <article>
                                <h3>Application Head Hunter</h3>
                                <h4>Stack: React, Nest, TypeScript, TypeORM, mySql</h4>
                                <p>
                                Application created as part of the internship at the end of the one-year MegaK programming course.
                                Working in an 8-person team in the Scrum/Agile methodology, in which I was selected as the leader of the back-end part. 
                        
                                </p>
                                <a href="https://github.com/Bartlomiej95/GR12-HeadHunter-backend" onMouseMove={(e) => buttonEffect(e)}>Back-end Repository</a>
                                <a href="https://github.com/Bartlomiej95/GR12-HeadHunter-frontend" onMouseMove={(e) => buttonEffect(e)}>Front-end Repository</a>

                            </article>
                            <article>
                                <h3>Application Tool base</h3>
                                <h4>Stack: React, Express, TypeScript, TypeORM, mySql, Jest</h4>
                                <p>
                                A commercially made workshop tool management program. I was able to create a smooth running
                                front-end and back-end applications connected to the database, having a simple, responsive interface. I wrote the back-end using TDD.                 
                                </p>
                                <a href="https://github.com/darone90/toolbase-back" onMouseMove={(e) => buttonEffect(e)}>Back-end Repository</a>
                                <a href="https://github.com/darone90/toolbase-front" onMouseMove={(e) => buttonEffect(e)}>Front-end Repository</a>
                            </article>
                            <article>
                                <h3>Device Dry Ager</h3>
                                <h4>Stack: React, Express, Websocket, Python</h4>
                                <p>
                                    Device control based on the Websocket and Experss servers.
                                    Controls by scripts written in Python run as JS child process
                                    The program controls heating, cooling,
                                    drying, humidifying and a built-in camera with backlight.
                                </p>
                                <a href="https://github.com/darone90/dryager" onMouseMove={(e) => buttonEffect(e)}>Back-end Repository</a>
                                <a href="https://github.com/darone90/dryagerFront/tree/main" onMouseMove={(e) => buttonEffect(e)}>Front-end Repository</a>
                            </article>
                            <article>
                                <h3>Service GSSCH</h3>
                                <h4>Stack: Express, JavaScript, MongoDB</h4>
                                <p>
                                    Website made for a commercial cooperative, with a content management system, archiving and a cloud for documents. This app is a SPA website made in pure JS. It is possible
                                    adding users with different authorization levels.
                                </p>
                                <a href="https://github.com/darone90/gssch-komancza" onMouseMove={(e) => buttonEffect(e)}>Repository</a>
                            </article>
                            <div className="iteduction">
                                <div>
                                    <h2>IT education</h2>
                                    <section>
                                        <h3>
                                            Vue - The Complete Guide (incl. Router and Composition API)
                                        </h3>
                                        <p>
                                            30 hours Stack: <strong>Vue.js</strong> 
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            MegaKurs
                                        </h3>
                                        <p>
                                            14 months Stack: <strong>JavaScript ES6+, Node, Express, React, Nest, TypeScript, Jest, mySql, noSql</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Advanced front-end projects
                                        </h3>
                                        <p>
                                            50 hours Stack: <strong>SASS, GSAP, Canvas, SVG, CSS, Webpack, Bootstrap</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Python: Basics 
                                        </h3>
                                        <p>
                                            25 hours Stack: <strong>Python 3</strong> 
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Basics of Back-endu with node.js 
                                        </h3>
                                        <p>
                                            40 hours Stack: <strong>Node, Express, Jest </strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            React for begginers 
                                        </h3>
                                        <p>
                                            60 hours Stack: <strong>React</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Basics of programming in JavaScript 
                                        </h3>
                                        <p>
                                            40 hours Stack: <strong>JavaScript ES6+</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Front-end for intermediate
                                        </h3>
                                        <p>
                                            15 days Stack: <strong>CSS3, SASS, HTML5, JavaScript</strong>
                                        </p>
                                        <div className="dot"></div>
                                    </section>
                                    <section>
                                        <h3>
                                            Web-developer: beginning
                                        </h3>
                                        <p>
                                            15 days Stack: <strong>HTML5, CSS3</strong>
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

export default ResumeEng;