import { NavLink, Outlet } from "react-router-dom";
import "./../styles/main.scss"

export const Layout=()=>{
    return<>
    <header>
       
        <nav className="headerNav">
        <h3>The Zoo</h3>
            <ul>
                <li><NavLink to={'/home'}>Hem</NavLink></li>
                <li><NavLink to={'/djur'}>Djur</NavLink></li>
            </ul>
        </nav>
    </header>
    <main>
        <Outlet></Outlet>
    </main>
    <footer></footer>

    </>
}