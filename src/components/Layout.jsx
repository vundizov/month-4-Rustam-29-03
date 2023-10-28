import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = ()=> {
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/contacts'>Contacts</Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                    </ul>
                </nav>
            </header>


            <Outlet/>

            <footer>
                <h1>FOOOTER</h1>
            </footer>
        </>
    )
}

export default Layout