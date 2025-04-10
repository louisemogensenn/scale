import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import {Outlet, useLocation} from "react-router-dom";
import ScrollTilTop from "./components/ScrollTilTop";

export default function Layout() {

    const nuvaerendeLokation = useLocation();  // Brug useLocation til at få den nuværende rute
    
    const paaForside = nuvaerendeLokation.pathname === '/';  // Tjek om vi er på forsiden ved brug af sammenligningsoperator

    return(
        <>

        <ScrollTilTop /> {/* Komponenten scroll til top, der indeholder funktionalitet og skal fungere på alle sider */}

        {!paaForside && <Logo /> /* Hvis vi IKKE er på forsiden vises komponenten (logo i venstre hjørne), der ellers vises på alle sider */}

        <Navigation /> {/* Komponenten Navigation, der skal vises på alle sider */}
        <main> 
            <Outlet /> {/* Alt indholdet, der skifter ved klik - henviser til siden main */}
        </main>
        <Footer /> {/* Komponenten Footer, der skal vises på alle sider */}
        </>
    )
}