import { Link } from "react-router-dom" // styrer navigationen mellem forskellige sider og bruges for at undgå at hele siden genindlæses - brugeren klikker og nyt indhold vises, men ingen “hvid-blinkende” genindlæsning!
import mystyle from "./Navigation.module.css";

export default function Navigation() {
    
    return (
        <>
            <nav className={mystyle.navigation}>
                <Link to="/kontakt">Kontakt</Link>
                <hr className={mystyle.navigationslinjer}/>
                <Link to="/cases">Cases</Link>
                <hr className={mystyle.navigationslinjer}/>
                <Link to="/kompetencer">Kompetencer</Link>
                {/* linker til routen med stien /kontakt, som så rendre det React-komponent, du har defineret i din router - Den navigerer til viewet Kontakt, som er defineret for path '/kontakt' */}
            </nav>
        </>
    )
}