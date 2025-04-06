import Navigation from "./components/Navigation";
import {Outlet} from "react-router-dom";

export default function Outlet() {

    return(
        <>
        <Navigation />
        <main>
            <Outlet />
        </main>
        </>
    )
}