import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTilTop() { 
    const lokation = useLocation(); // useLocation giver oplysninger om den aktuelle rute og ruten gemmes i konstant lokation (returnerer et objetk af informationer)
    
    useEffect(() => { // et Hook, hvis indhold med pilesyntaxen er angivet herunder
        window.scrollTo(0, 0); // scrollTo er en metode, der tager et x og et y koodinat (der er angivet til 0 for at starte i topppen )
    }, [lokation]); // useEffect kører, hver gang lokation ændrer sig (så hver gang brugeren navigerer til en ny rute(side)) [det react skal overvåge]
    
    return null; // Normalt returnerer vi noget HTML angivet i return(), men vi vil ikke returnere noget HTML - vi vil bare have noget funktionalitet. derfor return null. null betyder 'tom' eller 'ingen værdi' - men er ikke det samme som nul (0)
}
