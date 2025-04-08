import mystyle from './Cases.module.css';
import { Link } from 'react-router-dom';

export default function Cases() {
    
    return(
        <>
            <article className={mystyle.casesIndhold}>
                <section>
                    <h3>CASES</h3>
                    <h1>VI BYGGER MED OMTANKE</h1>
                    <p>Vi samarbejder med hostingudbydere, der tænker ansvarligt, og vi vælger tekniske løsninger, der ikke kræver unødvendige ressourcer. <br /> <br /> Det betyder, at når dine kunder besøger din side, der er udviklet af os, trækkes der på færre serverer - Hvilket betyder, at der bruges mindre strøm. </p>
                </section>

                <section>
                    <h1>HVORDAN?</h1>
                    <p>Vi skalerer, så alt overflødigt fjernes. Optimering af websites handler ikke kun om æstetik - det handler også om performance. <br /> <br /> Vi prioriterer løsninger, der er er lette at bruge - og lette at loade. <br /> <br /> Vi sætter fokus på det, der betyder noget!</p>
                </section>

                <section className={mystyle.tidligereCasesInfo}>
                    <h3>TIDLIGERE CASES</h3>
                    <h1>UNØDVENDIG SPILD</h1>
                    <p>Når vi designer, gør vi det med et stort ansvar. <br /> <br /> Vi optimerer billeder, minimerer kode og rydder op i det, der ikke behøver være der.  <br /> <br /> Det gør siderne hurtigere og nemmere at bruge – og sparer samtidig på de digitale ressourcer, der ofte bliver overset.</p>
                </section>

                    <figure>
                        <img src="src/assets/lazarev.webp" alt="SCALE's case med Lazarev" />
                        <figcaption>CASE: OPTIMERING AF EKSISTERENDE WEBSITE</figcaption>
                    </figure>

                    <figure>
                        <img src="src/assets/konkout.webp" alt="SCALE's case med KONKOUT" />
                        <figcaption>CASE: OPTIMERING AF EKSISTERENDE WEBSITE</figcaption>
                    </figure>

                    <section className={mystyle.tidligereCasesInfo}>
                        <h3>TIDLIGERE CASES</h3>
                        <h1>ANSVARLIG UDVIKLING</h1>
                        <p>Vi tror på, at de små valg gør en forskel – også når det kommer til digitale løsninger. Vi tager os tid til at tænke over, hvad der egentlig er nødvendigt. <br /> <br /> Det handler ikke kun om design og funktionalitet, men også om måden, vi bygger på. <br /> <br /> Vi samarbejder med grønne hostingselskaber, der har dokumenteret fokus på ansvarlig drift. Vi benytter værktøjer, der belaster mindst muligt, og dette kan mærkes, når det digitale produkt benyttes.</p>
                    </section>

                    <figure>
                        <img src="src/assets/rudyaudio.webp" alt="SCALE's case med Ruby Audio" />
                        <figcaption>CASE: OPTIMERING AF EKSISTERENDE WEBSITE</figcaption>
                    </figure>

                    <figure>
                        <img src="src/assets/atmoslamp.webp" alt="SCALE's case med ATMOSLAMP" />
                        <figcaption>CASE: OPTIMERING AF EKSISTERENDE WEBSITE</figcaption>
                    </figure>

                    <section className={mystyle.kontaktInfo}>
                        <h1>DU BEHØVER IKKE <br /> <br /> STARTE FORFRA, FOR <br /><br /> AT GØRE DET BEDRE.</h1>
                        <p>Lad os hjælpe dig! <br /> <br />
                            <Link to="/kontakt" className={mystyle.link}>Kontakt os her!</Link>
                        </p>
                    </section>
                    

            </article>
        </>
    )
}