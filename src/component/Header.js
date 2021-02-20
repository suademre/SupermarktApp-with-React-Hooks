import React from 'react'
import Logo from "../images/supermarkt-logo-design_1.jpg"
import Searchbar from "../component/Searchbar"



export default function Header() {
    
    return (
        <div className="container">
             
            <div className="navbar">
                
                <div className="logo-name">
                    <img src={Logo} alt=""/>
                </div>

                <Searchbar></Searchbar>

                <div className="nav">
                    <button type="button">Anmelden</button>
                    <button type="button">Registrieren</button>
                </div>
            </div>
        </div>
    )
}
