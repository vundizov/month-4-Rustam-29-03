import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../css/Layout.css'

const Layout = ()=> {
    return(
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to='/' className="link">Home</Link>
                        </li>
                        <li>
                            <Link to='/contacts' className="link">Contacts</Link>
                        </li>
                        <li>
                            <Link to='/portfolio' className="link">Portfolio</Link>
                        </li>
                    </ul>
                </nav>
            </header>


            <Outlet/>

            <footer className="foot">
                <h1>FOOOTER</h1>
            </footer>
        </>
    )
}

export default Layout