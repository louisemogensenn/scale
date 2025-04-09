import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTilTop() { 
    const lokation = useLocation(); // useLocation giver oplysninger om den aktuelle rute og ruten gemmes i konstant lokation

    /*
    useLocation returnerer noget der ligner: 
    {
        pathname: "/side",
        search: "?id=5",
        hash: "#top",
        state: null,
        key: "abc123"
    }

    Vi skal kun bruge pathname (altså stien)
    */
    const sti = lokation.pathname; // Vi gemmer lokationens pathname (stien) i konstanten sti
    
    useEffect(() => { // en funktion, hvis indhold med pilesyntaxen er angivet herunder
        window.scrollTo(0, 0); // scrollTo er en metode, der tager et x og et y koodinat (der angiver til 0 for at starte i topppen )
    }, [sti]); // useEffect kører, hver gang pathname ændrer sig (så hver gang brugeren navigerer til en ny rute(side))
    
    return null; // Normalt returnerer vi noget HTML angivet i return(), men vi vil ikke returnere noget HTML - vi vil bare have noget funktionalitet. derfor return null. null betyder 'tom' eller 'ingen værdi' - men er ikke det samme som nul (0)
}
