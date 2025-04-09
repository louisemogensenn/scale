import mystyle from './Kontakt.module.css';
import scaleLouise from '../assets/scale-louise.webp';
import scalePernille from '../assets/scale-pernille.webp';

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

                        <section className={mystyle.scaleSocialeMedier}>
                            <h2>Find os:</h2>

                            <figure>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7618 6.31008C12.7714 7.54501 12.2948 8.73412 11.4348 9.62051C10.5749 10.5069 9.40079 11.0193 8.16615 11.0472C6.93407 11.0019 5.76647 10.4852 4.90457 9.60351C4.04272 8.72191 3.55246 7.54291 3.53516 6.31008C3.58872 5.10901 4.09697 3.97319 4.95693 3.13295C5.81686 2.2927 6.96415 1.81088 8.16615 1.78516C9.36468 1.81136 10.5079 2.29438 11.3621 3.13546C12.2163 3.97655 12.717 5.11216 12.7618 6.31008ZM4.03007 19.4607C4.03007 16.7387 5.76229 17.1629 8.16615 17.1629C10.57 17.1629 12.2669 16.7387 12.2669 19.4607V45.9741C12.2669 48.7316 10.5347 48.1659 8.16615 48.1659C5.79765 48.1659 4.03007 48.7316 4.03007 45.9741V19.4607Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M19.4062 19.4618C19.4062 17.9417 19.9719 17.3761 20.8556 17.1994C21.7394 17.0226 24.7796 17.1994 25.8401 17.1994C26.9007 17.1994 27.3249 18.9315 27.2895 20.2395C28.1967 19.022 29.4011 18.0577 30.7876 17.4387C32.174 16.8198 33.6961 16.5669 35.2082 16.7044C36.693 16.6136 38.1805 16.8363 39.5737 17.3578C40.9666 17.8794 42.2348 18.6882 43.2948 19.7317C44.3551 20.7753 45.1837 22.0301 45.7273 23.4149C46.2709 24.7996 46.5169 26.2833 46.4498 27.7693V45.8691C46.4498 48.6266 44.753 48.0609 42.3491 48.0609C39.9451 48.0609 38.2484 48.6266 38.2484 45.8691V31.7287C38.3105 31.0009 38.2155 30.2683 37.9694 29.5806C37.7234 28.8929 37.3319 28.2661 36.8223 27.743C36.3126 27.2199 35.6963 26.8125 35.0151 26.5487C34.3341 26.2849 33.6042 26.1706 32.875 26.2139C32.1493 26.1955 31.4279 26.3314 30.7586 26.6127C30.0894 26.894 29.4875 27.3143 28.9928 27.8457C28.4982 28.3771 28.1221 29.0075 27.8894 29.6952C27.6567 30.3829 27.5727 31.1121 27.6431 31.8347V45.9751C27.6431 48.7326 25.9109 48.1669 23.507 48.1669C21.1031 48.1669 19.4062 48.7326 19.4062 45.9751V19.4618Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M34.8382 10.9498C34.345 10.9498 33.9453 10.55 33.9453 10.0569C33.9453 9.56381 34.345 9.16406 34.8382 9.16406" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M34.8398 10.9498C35.3331 10.9498 35.7327 10.55 35.7327 10.0569C35.7327 9.56381 35.3331 9.16406 34.8398 9.16406" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 10.1893C1 5.11422 5.11419 1 10.1893 1H34.6944C39.7694 1 43.8837 5.11422 43.8837 10.1893V34.6943C43.8837 39.7693 39.7694 43.8836 34.6944 43.8836H10.1893C5.11419 43.8836 1 39.7693 1 34.6943V10.1893Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.4431 31.5502C27.4728 31.5502 31.5502 27.4728 31.5502 22.4431C31.5502 17.4133 27.4728 13.3359 22.4431 13.3359C17.4133 13.3359 13.3359 17.4133 13.3359 22.4431C13.3359 27.4728 17.4133 31.5502 22.4431 31.5502Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </figure>

                        </section>
                    </article>

                </section>

                <section className={mystyle.medarbejdere}>
                    <figure>
                        <img loading='lazy' src={scalePernille} alt="Billede af Pernille Christensen, Head Of Design, Scale" />
                        <figcaption className={mystyle.navnUnderBillede}>Pernille Christensen</figcaption>
                        <p className={mystyle.titel}>Head of Design</p>
                        <p>pernillechristensen@scale.dk</p>
                        <p className={mystyle.nummer}>+45 86 91 19 98</p>
                    </figure>

                    <figure>
                        <img loading='lazy' src={scaleLouise} alt="Billede af Louise Mogensen, Head Of Development, Scale" />
                        <figcaption className={mystyle.navnUnderBillede}>Louise Mogensen</figcaption>
                        <p className={mystyle.titel}>Head of Development</p>
                        <p>louisemogensen@scale.dk</p>
                        <p className={mystyle.nummer}>+45 86 91 19 99</p>
                    </figure>
                </section>
                
            </article>
        </>
    )
}