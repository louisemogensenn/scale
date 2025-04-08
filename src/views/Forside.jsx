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
    

    return (
        <>
        <section className={backgroundClass}> {/* Det er i denne sektion, baggrundsbilledet placeres */}
            <img className={mystyle.forsideLogo} src="/src/assets/scaleLogo.svg" alt="Scale logo" />
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



