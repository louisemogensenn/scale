import mystyle from './Kontakt.module.css';

export default function Kontakt() {
    
    return(
        <>
            <article className={mystyle.kontaktIndhold}>
                <section className={mystyle.kontaktInformationTop}>
                    <article className={mystyle.kontaktKant}>
                        <h3>KONTAKT</h3>
                        <h1>KONTAKT OS</h1>
                        <p>Vi hjælper dig med at skabe en løsning, der passer til det, du står for - alt imens, vi prioriterer dine behov og ønsker. <br /> <br /> Vi garanterer en god kommunikation og et tæt samarbejde, så du får netop dét, du- og din virksomhed har brug for!</p>
                    </article>

                    <article className={mystyle.overordnetScaleInfo}>
                        <section className={mystyle.scaleInfo}>
                            <h2>Kontakt os:</h2>
                            <p>contact@scale.dk</p>
                        </section>

                        <section className={mystyle.scaleInfo}>
                            <h2>Kom forbi :</h2>
                            <p>Jægergaardsgade 12, 8000 Aarhus C</p>
                        </section>
                    </article>

                </section>

                <section className={mystyle.medarbejdere}>
                    <figure>
                        <img src="src/assets/IMG_5260.jpeg" alt="Billede af Pernille Christensen, Head Of Design, Scale" />
                        <figcaption className={mystyle.navnUnderBillede}>Pernille Christensen</figcaption>
                        <p className={mystyle.titel}>Head of Design</p>
                        <p>pernillechristensen@scale.dk</p>
                        <p className={mystyle.nummer}>+45 86 92 19 98</p>
                    </figure>

                    <figure>
                        <img src="src/assets/IMG_5260.jpeg" alt="Billede af Louise Mogensen, Head Of Development, Scale" />
                        <figcaption className={mystyle.navnUnderBillede}>Louise Mogensen</figcaption>
                        <p className={mystyle.titel}>Head of Development</p>
                        <p>louisemogensen@scale.dk</p>
                        <p className={mystyle.nummer}>+45 86 92 19 99</p>
                    </figure>
                </section>
                
            </article>
        </>
    )
}