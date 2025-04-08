import { useState, useEffect } from 'react';
import mystyle from './Forside.module.css';

    export default function Forside() {
        const [isDarkMode, setIsDarkMode] = useState(true);

        /* Oprettelse af en state-variabel kaldet setIsDarkMode med startværdien(initialværdi), true. Når komponenten først renderes, vil isDarkMode = true og dermed vil   dark mode være aktiveret. isDarkMode er altså variablen, der holder styr på, om dark mode er aktiveret eller ej. 
        setDarkMode er en funktion, der bruges til at opdatere isDarkMode (ændrer den fra true til false eller omvendt) */

        //Funktionen toggleBaggrund defineres – det er den, der skifter værdien af isDarkMode (fra true til false eller omvendt).
        const toggleBaggrund = () => { //Der oprettes en funktion (toggleBaggrund), hvis indhold med => (pilesynpaxen/arrow function) er defineret under den
        setIsDarkMode(nuvaerende => !nuvaerende); // Funktionen med parameteren nuvaerende skal returnere det modsatte af nuvaerende i funktionen
    };

    useEffect(() => { // Funktionen, der er angivet herunder køres, når komponenten Forside.jsx er renderet
        if (isDarkMode) { //Hvis dark mode er aktiveret isDarkMode === true
            document.documentElement.classList.add('dark'); // document.documentElement er <html>. vi tilføjer klassen dark i html - stylingen afhænger af klasserne dark og light, som er defineret i index.css
            document.documentElement.classList.remove('light'); // document.documentElement er <html>. vi fjerner klassen light i html - stylingen afhænger af klasserne dark og light, som er defineret i index.css
        } else { // Hvis ikke dark mode er aktiveret
            document.documentElement.classList.add('light'); // document.documentElement er <html>. vi tilføjer klassen light i html - stylingen afhænger af klasserne dark og light, som er defineret i index.css
            document.documentElement.classList.remove('dark'); // document.documentElement er <html>. vi fjerner klassen dark i html - stylingen afhænger af klasserne dark og light, som er defineret i index.css
        }
    }, [isDarkMode]); // dependencies array - useEffect-funktionen kører hver gang isDarkMode ændrer sig.
    
    // useEffect kører hver gang isDarkMode ændrer sig

    let backgroundClass = mystyle.forsideTopIndhold; // En konstant, der indeholder styling for forsideTopIndhold

    if (isDarkMode) { // Hvis dark mode er aktiveret (isDarkMode === true)
        backgroundClass += " " + mystyle.darkMode; // Så tilføjes klassen darkmode til backgroundClass (så denne nu består af to klasser)
    } else { // Hvis ikke dark mode er aktiveret
        backgroundClass += " " + mystyle.lightMode; // Så tilføjes klassen lightmode til backgroundClass (så denne nu består af to klasser)
    }

    let svgColor; // En konstant, der skal bestemme farven for logoet (en svg-fil, der er placeret i midten af forsiden)
    // Denne konstant bruges i linje, hvor <svg>-tagget starter og bruges for fyldefarve for SVG'en

    if (isDarkMode) { // Hvis dark mode er aktiveret - dark mode === true
        svgColor = 'var(--darkModeTekst'; // Så skal farven sættes til darkModeTekst (initialiseret i :root i index.css)
    } else { // Hvis ikke dark mode er aktiveret (dark mode === false)
        svgColor = 'var(--lightModeTekst)'; // Så skal farven sætes til lightModeTekst (initialiseret i :root i index.css)
    }
    

    return (
        <>
        <section className={backgroundClass}> {/* Det er i denne sektion, baggrundsbilledet placeres */}
        <svg className={mystyle.forsideLogo} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 338.96 91.6" fill={svgColor}> {/* Generator: Adobe Illustrator 28.7.5, SVG Export Plug-In . SVG Version: 1.2.0 Build 176) */}
            <g>
                <g id="Layer_1">
                    <g>
                        <g>
                            <g>
                                <polygon points="176.34 56.97 168.7 38.99 163.86 56.81 176.34 56.97" fill="none" stroke="currentColor" stroke-miterlimit="10"/>
                                <polygon points="168.7 38.99 168.7 38.99 168.7 38.99 168.7 38.99" fill="currentColor" stroke="currentColor" stroke-miterlimit="10"/>
                                <polygon points="174.1 19.07 168.7 38.99 178.87 62.73 151.93 62.73 167.28 1.47 155.58 7.29 133.32 90.27 144.73 90.27 149.32 73.43 159.21 73.43 183.55 73.43 190.51 90.27 202.19 90.27 174.1 19.07" fill="currentColor" stroke="currentColor" stroke-miterlimit="10"/>
                            </g>
                            <line x1="163.86" y1="56.81" x2="151.93" y2="62.73" fill="none" stroke="currentColor" stroke-miterlimit="10"/>
                            <polyline points="167.28 1.47 179.06 1.47 213.29 84.68 202.19 90.27" fill="none" stroke="currentColor" stroke-miterlimit="10"/>
                            <polyline points="144.73 90.27 156.29 84.82 159.21 73.43" fill="none" stroke="currentColor" stroke-miterlimit="10"/>
                        </g>
                        <text transform="translate(-1.4 88.83)" fill="currentColor" font-family="TrebuchetMS, &apos;Trebuchet MS&apos;" font-size="120"><tspan x="0" y="0">SC</tspan><tspan x="129.49" y="0" letter-spacing=".06em"> </tspan><tspan x="172.84" y="0" letter-spacing=".07em"> </tspan><tspan x="217.4" y="0">LE</tspan></text>
                    </g>
                </g>
            </g>
        </svg>

            <p> Design med omtanke - Vi optimerer din digitale tilstedeværelse ved at kombinere æstetik, funktionalitet og performance. </p>
        </section>

        {/* Den sektion, der kan klikkes på for at skifte mellem dark mode og light mode */}
        <section className={mystyle.skiftModeSektion} onClick={toggleBaggrund}> {/* Sektionen er tom, da vi ønsker den gennemsigtig */}</section>
        
        <article>
            <section>
                <h1 className={mystyle.forsideHovedoverskrift}>HVEM ER SCALE?</h1>
                <p>Scale er et nyopstartet webbureau, der tilbyder en bred vifte af services med et fokus på optimering af din virksomheds digitale tilstedeværelse. Teamet består af to energiske/entusiastiske multimediedesignere, Pernille og Louise, der med deres fælles baggrunden inden for multimediedesign har et stort kendskab til digital udvikling.</p>
            </section>

            <aside>
                <figure>
                    <img src="Billede af Pernille" alt="Billede af Pernille, der er Head of Design hos Scale" />
                    <figcaption>Pernille Christensen</figcaption>
                </figure>
                <figure>
                    <img src="Billede af Louise" alt="Billede af Louise, der er Head of Development hos Scale" />
                    <figcaption>Louise Mogensen</figcaption>
                </figure>
            </aside>
        </article>
        </>
    );
}



