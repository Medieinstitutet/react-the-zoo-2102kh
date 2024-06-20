import { NavLink, Outlet } from "react-router-dom";
import "./../styles/main.scss"
export const Layout=()=>{
    return(
    
    <div className="app">
        <div className="home"> 
        <header>
        <nav className="headerNav">
        <h3>TheZoo</h3>
            <ul>
                <li><NavLink to={'/home'}>Hem</NavLink></li>
                <li><NavLink to={'/djur'}>Djur</NavLink></li>
            </ul>
        </nav>      
    </header>
   
    </div>
    <main>
        <Outlet>          
        </Outlet>
    </main>
    <footer></footer>
    
    </div>

   
   
    )
}