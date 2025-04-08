import mystyle from './Kompetencer.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Kompetencer() {

    return (
        <>
            <article className={mystyle.kompetenceIndhold}>
                <section className={mystyle.kompetenceInfo}>
                    <h3>KOMPETENCER</h3>
                    <h1>VI HAR KOMPETENCERNE</h1>
                    <p>SCALE er meget mere end blot et webbureau i Aarhus - vi er en samarbejdspartner. Og sammen med jer kan vi med garanti skabe de helt rette løsninger for netop jeres virksomhed.</p>
                </section>

                <section>
                    <h1>WEBSITES</h1>
                    <p>Vi udvikler websites, der kombinerer skarp æstetik med høj ydeevne og brugervenlighed. <br /> <br /> Vores løsninger er designet til at støtte din virksomheds vækst og opfylde dine digitale mål. <br /> <br /> Vi dækker hele processen fra design til udvikling, og sikrer dig for, at dit website lever op til de nyeste standarder indenfor webdesign. <br /> <br />

                    <Link to="/cases" className={mystyle.link}>Læs mere og se eksempler </Link>
                    </p>
                </section>

                <section>
                    <h1>VISUEL IDENTITET</h1>
                    <p>Vi skaber visuelle identiteter, der præcist reflekterer din virksomheds kerneværdier og positionerer dit brand stærkt på markedet. <br /> <br /> Med en strategisk tilgang til design, sikrer vi at dit brand er genkendeligt og konsistent på tværs af alle kanaler. <br /> <br />

                    <Link to="/cases" className={mystyle.link}>Læs mere og se eksempler </Link>
                    </p>
                </section>

                <section>
                    <h1>STRATEGI</h1>
                    <p>Vores strategiske tilgang er baseret på en dyb forståelse af din forretning og markedet omkring jer. <br /> <br /> Vi udvikler en handlingsplan, der hjælper dig med at nå dine forretningssmål og fremtidssikrer dit website. <br /> <br /> Vi hjælper med at skabe en klar retning for din virksomheds digitale fremtid, og guider dig med de bedste forudsætninger. <br /> <br />
                    
                    <Link to="/cases" className={mystyle.link}>Læs mere og se eksempler </Link>
                    </p>
                </section>

                <section>
                    <h1>VI SKABER</h1>
                    <p>SCALE har fingeren på pulsen - og vi skaber løsninger, der gør en forskel og skaber værdi over tid. Vi forener æstetik, funktionalitet og performance med omtanke i alt, hvad vi laver. <br /> <br /> Er du klar til at tage din digitale tilstedeværelse til næste niveau? Lad os tage en uforpligtende snak om, hvordan vi kan hjælpe din virksomhed med at vokse og stå stærkt i en digital verden. <br /> <br /> 
                    
                    <Link to="/kontakt" className={mystyle.kontaktlink}>Kontakt os her! </Link></p>
                </section>

                <aside>
                    {/* HER SKAL KOMPETENCE-INFOGRAFIKKEN SÆTTES IND */}
                </aside>

                <aside>
                    {/* HER SKAL MOTION GRAPHIS SÆTTES IND */}
                </aside>
            </article>
            
        </>
    )
}