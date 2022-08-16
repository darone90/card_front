import React, { MutableRefObject, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './About.scss';
import foto from './myFoto.jpg';

const About = () => {

    const navigate = useNavigate()

    const interestedIn = useRef(null);
    const about = useRef(null);
    const work = useRef(null);
    const feature = useRef(null);
    const programming = useRef(null);
    const summary = useRef(null);
    const contact = useRef(null);


    return (
        <div className="About">
            <ul className="About__menu">
                <li><a onClick={() => navigate('/')}>Powrót</a></li>
                <li><a onClick={() => (about as unknown as MutableRefObject<HTMLElement>).current.scrollIntoView({ behavior: 'smooth', block: 'end' })}>O mnie</a></li>
                <li><a onClick={() => (work as unknown as MutableRefObject<HTMLElement>).current.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Zawodowo</a></li>
                <li><a onClick={() => (feature as unknown as MutableRefObject<HTMLElement>).current.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Gdzie zmierzam</a></li>
                <li><a onClick={() => (programming as unknown as MutableRefObject<HTMLElement>).current.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Programowanie?</a></li>
                <li><a onClick={() => (summary as unknown as MutableRefObject<HTMLElement>).current.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Podsumowanie</a></li>
                <li><a onClick={() => (interestedIn as unknown as MutableRefObject<HTMLElement>).current.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Zainteresowania</a></li>
                <li><a onClick={() => (contact as unknown as MutableRefObject<HTMLElement>).current.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Kontakt</a></li>

            </ul>
            <div className="About__foto">
                <img src={foto} alt="Moje zdjęcie" />
            </div>
            <article ref={about}>
                <h2>O mnie <strong>czyli</strong>...</h2>
                <p>Inżynier z powołania. Uwielbiam gdy coś działa, ale najwięcej satysfakcji mam gdy działa po dobrej
                    przeprawie z wszystkimi co działać nie chce. Zasada jest prosta: nie odpuszczać aż się uda. Nie lubię przerostu teori
                    nad działaniami (czyli dużo gadać, mało robić), chyba dlatego swoją przygodę z uczelnią zakończyłem na etapie tytułu inżyniera. Głowę muszę mieć cały
                    czas czymś zajętą, stąd cierpię na chroniczny brak czasu. Jeśli w coś wchodzę to na całego. Wymyślanie koła od nowa to moje hobby,
                    ale zazwyczaj mam na nie czas dopiero po godzinach pracy. W robocie lubię na skróty. Lubię wiedzieć, jak nie wiem to pytam, dlatego fajnie
                    jak jest ktoś kto odpowie, podpowie itp. (bardzo cenię pracę w gronie lepszych od siebie i możliwości rozwoju). Raz na kilka
                    lat dobrze wywalić swoją karierę zawodową więc...
                </p>
            </article>
            <article ref={work}>
                <h2>Zawodowo...</h2>
                <p>
                    Od 8 lat zawodowo param się przemysłem ciężkim, a dokładniej jestem hutnikiem szkalrskim. Zagłębiając się jeszcze trochę w temat
                    zajmuję się instalacjami opalania, chłodzenia, pneumatyką, oraz rozruchami (czyli też rozgrzewami) pieców szklarskich.
                    Dużo hałasu, ciężkiego sprzętu, ludzi, procesów, instalacji... to właśnie moje środowisko. Ale radość z pierwszego szkła... Kto
                    nie przeżył, nie zrozumie. Swoje życie zawodowe realizuję na całym świecie. Pracujemy od Indii przez Arabię Saudyjską, Egipt, Turcję
                    aż po kraje zachodniej europy. Mogę pochwalić się współpracą z takimi potęgami jak Saint Gobain, Owens Ilinois, Philips Lightening (obecnie Signify)
                    Stoelzle, czy Isover.
                    Jako typowy "Gaziarz" posiadam szereg uprawnień ( Ciepłownicze, Gazowe, Elektryczne). W ramach rozrywki w pracy czasem pośmigam na wózku widłowym
                    (przypadkiem zrobiłem uprawnienia UDT). Prace ślusarskie i spawalcznicze też lubię i też potrafię. W wyniku tejże pracy zacząłęm się też interesować
                    automatyką. Generalnie nie boję się żadnego rodzaju pracy...
                </p>
            </article>
            <article ref={feature}>
                <h2>Gdzie zmierzam...</h2>
                <p>
                    No właśnie, więc po co to całe zamieszanie ? Od instalacji przez automatykę... no wiadomo. Programowanie. Od ponad dwóch
                    lat zajmuję się (oraz bardzo interesuję się) programowaniem. Do dzisija nie wiem dlaczego padło na Javascript.
                    Ale to na nim się głównie skupiłem. Chociaż proste programowanie mikrokontrolerów w C++ też nie jest mi obce. No i jescze Raspberry.
                    A jak Raspberry to oczywiście Python. Nie może być inaczej. Generalnie mam za sobą kilkanaście projektów w różnych technologiach
                    głownie JS`owych. Kilka zrobiłem komercyjnie. Niestety brak mi doświadczenia w pracy zespołowej, przy dużych projektach, z dużymi
                    możliwościami rozwoju. I tu jest właśnie mój cel. Tu właśnie zmierzam. Chcę zawodowo programować.
                </p>
            </article>
            <article ref={programming}>
                <h2>Więc co z tym <strong>programowaniem</strong> ?</h2>
                <p>
                    Po prostu lubię to. Lubię opanować nowy temat i od razu gdzieś go zastosować. Może dlatego korzystam z technologi zarówno
                    frontendowych jak i backendowych. Bardzo dobrze czuję się też z TypeScript. Jeden z lepszych wynalazków dla JS moim zdaniem.
                    A więc, radzę sobie nieźle z node: w grę wchodzi oczywiśćie Express i coś co ostanio spędza mi sen z powiek czyli Nest.
                    Nieodzowną częscią backendu są bazy danych. Jestem fanem baz mySql, ale z mongoDB też daję radę. Potrafię napisać serwer websocket. Uwierzytelnianie
                    i autoryzacje i logowania ograniam, chociaż tematy bezpieczeństwa to temat rzeka który staram się zgłebiać kiedy tylko jest taka możliwość.
                    Jeśli chodzi o frontend, to stawiam na React. Radzę sobie z hookami, Reduxem, Mobexem, Routerami... No nie oszukujmy się,
                    poczucie estetyki mam marne. Ale jeśli ktoś pokaże dokładnie jak coś ma wyglądać to wiem jak korzystać z CSS,SASS, Canvas, SGV,
                    no i magia: Potrafię w miarę skonfigurować Webpacka. GIT i html5 to raczej oczywiste. Mój prawdziwy konik to jak łączy się internet z automatyką... czyli słynne IOT.

                </p>
            </article>

            <article ref={summary}>
                <h2>Słowem podusmowania:</h2>
                <p>Krótko i na temat:
                    <ul>
                        <li>
                            8 lat doświadczenia jako inżynier, specjalista ds. Techniki cieplnej, hutnik, intalacje gaz, woda, powietrze
                        </li>
                        <li>
                            Programuję dużo w JS (Node, Nest, Express, React, i wiele innych), trochę w Python a jescze mniej w C++
                        </li>
                        <li>
                            Mam za sobą kilka projektów, również komercyjnych
                        </li>
                        <li>
                            Chcę programować jeszcze więcej w JS. Szukam pracy jako programista
                        </li>
                        Dodatkowo:
                        <li>
                            Posiadam szereg upranień (gazowe, ciepłownicze, elektryczne, wózki widłowe )
                        </li>
                        <li>
                            Znam się trochę na spawaniu i ślusarce
                        </li>

                    </ul>

                    Więcej i dokładniej o programowaniu czy innych moich zajawkach znajdziesz w poszczególnych zakładkach

                    Jestem otwarty na współpracę na wszystkich innych płaszczyznach, dam się zatrudnić, założe z kimś
                    firmę. Jestem otwarty.
                </p>
            </article>
            <article ref={interestedIn}>
                <h2>Zainteresowania ?</h2>
                <p>
                    No więc, poza tym wszystkim co wyżej jescze chodzę po górach czasem. Kiedyś sporo się wspinałem. Chcę do tego wrócić.
                    Pogrywam też na gitarze (ostanimi czasy również mniej niestety) i Djembe. No i w domu buduję, muruję, spawam, programuje,
                    remontuje. Jak dom to na wsi. Jak na wsi musi być pies. Więc gdy mam wszystkigo dość zgłebiam kynologie i testuję tą
                    wiedzę na moim psie. Jak bym miał czas czytał bym ksiązki. Fantastyczne.
                </p>
            </article>

            <article ref={contact}>
                <h2>Kontakt</h2>
                <p>
                    Kontaktować się ze mną można przez:
                    <ul>
                        <li>email: pileckidariusz90@gmail.com</li>
                        <li>telefon: 531587030</li>
                        <li>linkedin: https://www.linkedin.com/in/dariusz-pilecki-797b7819b</li>
                    </ul>

                </p>
            </article>
        </div>
    );
};

export default About;

