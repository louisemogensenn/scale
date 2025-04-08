import { useState } from 'react';
import mystyle from './Forside.module.css';

export default function Forside() {
    const [isDarkMode, setIsDarkMode] = useState(true); 
    {/* 
        Oprettelse af en state-variabel akldet isDarkMode med startværdien(initialværdi), true. Når komponenten først renderes, vil isDarkMode = true og dermed vil dark mode være aktiveret. isDarkMode er altså variablen, der holder styr på, om dark mode er aktiveret eller ej. 
        setDarkMode er en funktion, der bruges til at opdatere isDarkMode (ændrer den fra true til false eller omvendt)
    */}

    const toggleBaggrund = () => {
        setIsDarkMode(nuvaerende => !nuvaerende);
    };

    {/*
        Funktionen toggleBaggrund defineres - det er denne, der opdaterer værdien af isDarkMode.
        setIsDarkMode betyder, at man skifter (altså toggler) den nuværende værdi af isDarkMode.
        nuvaerende refererer til den nuværende værdi af isDarkMode og !nuvaerende inverter den (true bliver til false, false bliver til true)
        Hver gang toggleBaggrund kaldes, ændres isDarkMode fra true til false eller fra false til true
    */}

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
