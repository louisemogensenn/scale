import { Link } from "react-router-dom" // styrer navigationen mellem forskellige sider og bruges for at undgå at hele siden genindlæses - brugeren klikker og nyt indhold vises, men ingen “hvid-blinkende” genindlæsning!
import mystyle from "./Navigation.module.css";

export default function Navigation() {
    
    return (
        <>
            <nav className={mystyle.navigation}>

                <Link className={mystyle.navigationslink} to="/kontakt">KONTAKT</Link>

                <hr className={mystyle.navigationslinjer}/> {/* En vertikal linje */}

                <Link className={mystyle.navigationslink} to="/cases">CASES</Link>

                <hr className={mystyle.navigationslinjer}/> {/* En vertikal linje */}

                <Link className={mystyle.navigationslink} to="/kompetencer">KOMPETENCER</Link>

                {/* linker til routen med stien /kontakt, som så rendre det React-komponent, du har defineret i din router - Den navigerer til viewet Kontakt, som er defineret for path '/kontakt' */}

            </nav>
        </>
    )
}