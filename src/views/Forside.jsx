import { useState } from 'react';
import mystyle from './Forside.module.css';

export default function Forside() {
    const [isDarkMode, setIsDarkMode] = useState(true); 
    {/* 
        Oprettelse af en state-variabel kaldet setIsDarkMode med startværdien(initialværdi), true. Når komponenten først renderes, vil isDarkMode = true og dermed vil dark mode være aktiveret. isDarkMode er altså variablen, der holder styr på, om dark mode er aktiveret eller ej. 
        setDarkMode er en funktion, der bruges til at opdatere isDarkMode (ændrer den fra true til false eller omvendt)
    */}

    //Funktionen toggleBaggrund defineres – det er den, der skifter værdien af isDarkMode (fra true til false eller omvendt).
    const toggleBaggrund = () => { // Der oprettes en funktion (toggleBaggrund), hvis indhold med => (pilesynpaxen/arrow function) er defineret under den
        const nyVaerdi = !isDarkMode; // // Opretter en konstant nyVaerdi, som sættes til det modsatte af isDarkMode ved hjælp af ! (true bliver false, og false bliver true)
        setIsDarkMode(nyVaerdi); // Funktionen setIsDarkMode bliver kaldt med nyVaerdi som parameter for at opdatere isDarkMode til nyVærdi.
    
        if (nyVaerdi) { // Hvis nyVærdi er true (altså dark mode er aktiveret)
            document.documentElement.style.backgroundColor = 'var(--darkModeBaggrund)'; // Angives baggrundsfarven
            document.documentElement.style.color = 'var(--darkModeTekst)'; // Og tekstfarven
        } else { //Hvis nyVærdi ikke er true og lightmode derfor er aktiveret
            document.documentElement.style.backgroundColor = 'var(--lightModeBaggrund)'; // Angives baggrundsfarven
            document.documentElement.style.color = 'var(--lightModeTekst)'; //Og tekstfarven
        }
    };

    // Brug klassisk if-sætning til at sammensætte className
    let backgroundClass = mystyle.forsideTopIndhold; /* Konstanten oprettes og får tildelt en css styling: mystyle.forsideTopIndhold */

    if (isDarkMode) { // Hvis darkmode er true
        backgroundClass = backgroundClass + " " + mystyle.darkMode; // Så får backgroundClass klassen mystyle.darkMode tilføjet (så den nu har to klasser: mystyle.forsideTopIndhold og mystyle.darkMode. Det er derfor, der er mellemrum)
    } else { // Hvis darkmode ikke er true (og altså er false)
        backgroundClass = backgroundClass + " " + mystyle.lightMode; // Så får backgroundClass klassen mystyle.lightMode tilføjet (så den nu har to klasser)
    }
    // Ved at have to klasser tilføjet får de to billeder altså præcis samme styling (gennem forsideTopIndhold) og det er url'en til baggrundsbilledet der skifter med if-sætningen oven over

    return (
        <>
        <section className={backgroundClass}> {/* Det er i denne sektion, baggrundsbilledet placeres */}
            <img className={mystyle.forsideLogo} src="/src/assets/scaleLogo.svg" alt="Scale logo" />
            <p> Design med omtanke - Vi optimerer din digitale tilstedeværelse ved at kombinere æstetik, funktionalitet og performance. </p>
        </section>

        {/* Den sektion, der kan klikkes på for at skifte mellem dark mode og light mode */}
        <section className={mystyle.skiftModeSektion} onClick={toggleBaggrund}> {/* Sektionen er tom, da vi ønsker den gennemsigtig */}</section>
        
        <article>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
            <p>hej</p>
        </article>
        </>
  );
}
