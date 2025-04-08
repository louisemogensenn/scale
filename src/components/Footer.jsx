import mystyle from './Footer.module.css';

export default function Footer() {

    return (
        <>
            <section className={mystyle.footerindhold}>
                <p className={mystyle.kant}>+45 86 91 19 97</p>
                <p>CONTACT@SCALE.DK</p>
            </section>
        </>
    )
}