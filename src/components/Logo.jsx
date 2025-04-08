import mystyle from './Logo.module.css';
import { Link } from 'react-router-dom';

export default function Logo() {

    return (

        <>
            <Link to="/" className={mystyle.logolink}>
            <svg className={mystyle.topLogo} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 338.96 91.6" fill="currentColor"> {/* Generator: Adobe Illustrator 28.7.5, SVG Export Plug-In . SVG Version: 1.2.0 Build 176) */}
                    <g>
                        <g id="Layer_1">
                            <g>
                                <g>
                                    <g>
                                        <polygon points="176.34 56.97 168.7 38.99 163.86 56.81 176.34 56.97" fill="none" stroke="currentColor" stroke-miterlimit="10"/>
                                        <polygon points="168.7 38.99 168.7 38.99 168.7 38.99 168.7 38.99" fill="currentColor" stroke="currentColor" stroke-miterlimit="10"/>
                                        <polygon points="174.1 19.07 168.7 38.99 178.87 62.73 151.93 62.73 167.28 1.47 155.58 7.29 133.32 90.27 144.73 90.27 149.32 73.43 159.21 73.43 183.55 73.43 190.51 90.27 202.19 90.27 174.1 19.07" fill="currentColor" stroke="currentColor" stroke-miterlimit="10"/>
                                    </g>
                                    <line x1="163.86" y1="56.81" x2="151.93" y2="62.73" fill="none" stroke="currentColor" stroke-miterlimit="10"/>
                                    <polyline points="167.28 1.47 179.06 1.47 213.29 84.68 202.19 90.27" fill="none" stroke="currentColor" stroke-miterlimit="10"/>
                                    <polyline points="144.73 90.27 156.29 84.82 159.21 73.43" fill="none" stroke="currentColor" stroke-miterlimit="10"/>
                                </g>
                                <text transform="translate(-1.4 88.83)" fill="currentColor" font-family="TrebuchetMS, &apos;Trebuchet MS&apos;" font-size="120"><tspan x="0" y="0">SC</tspan><tspan x="129.49" y="0" letter-spacing=".06em"> </tspan><tspan x="172.84" y="0" letter-spacing=".07em"> </tspan><tspan x="217.4" y="0">LE</tspan></text>
                            </g>
                        </g>
                    </g>
                </svg>
            </Link>
        </>
    )
}