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

        <ScrollTilTop />

        {!paaForside && <Logo /> /* Hvis vi IKKE er på forsiden vises komponenten */}

        <Navigation />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
}