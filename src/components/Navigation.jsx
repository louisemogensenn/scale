import { Link, useLocation } from "react-router-dom" // styrer navigationen mellem forskellige sider og bruges for at undgå at hele siden genindlæses - brugeren klikker og nyt indhold vises, men ingen “hvid-blinkende” genindlæsning!
import mystyle from "./Navigation.module.css";

export default function Navigation() {

    const lokation = useLocation(); // Få information om lokation

    let kompetencerClass = mystyle.navigationslink; // Opretter en konstant, der indeholder stylingen navigationslink
    let casesClass = mystyle.navigationslink; // Opretter en konstant, der indeholder stylingen navigationslink
    let kontaktClass = mystyle.navigationslink; // Opretter en konstant, der indeholder stylingen navigationslink

    if (lokation.pathname === "/kompetencer") { // Hvis lokationens pathname er /kompetencer (hvis vi er på kompetencesiden)
        kompetencerClass += " " + mystyle.aktiv; // Tilføjelse klassen aktiv til konstanten, der bruges som className i <Link>

    } else if (lokation.pathname === "/cases") { // Hvis lokationens pathname er /cases (hvis vi er på casesiden)
        casesClass += " " + mystyle.aktiv; // Tilføjelse klassen aktiv til konstanten, der bruges som className i <Link>


    } else if (lokation.pathname === "/kontakt") { // Hvis lokationens pathname er /cases (hvis vi er på casesiden)
        kontaktClass += " " + mystyle.aktiv; // Tilføjelse klassen aktiv til konstanten, der bruges som className i <Link>
    }
    
    return (
        <>
            <nav className={mystyle.navigation}>

                <Link className={kompetencerClass} to="/kompetencer">KOMPETENCER</Link>

                <hr className={mystyle.navigationslinjer}/> {/* En vertikal linje */}

                <Link className={casesClass} to="/cases">CASES</Link>

                <hr className={mystyle.navigationslinjer}/> {/* En vertikal linje */}

                <Link className={kontaktClass} to="/kontakt">KONTAKT</Link>

                {/* linker til routen med stien /kontakt, som så rendre det React-komponent, du har defineret i din router - Den navigerer til viewet Kontakt, som er defineret for path '/kontakt' */}

            </nav>
        </>
    )
}