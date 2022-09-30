import React from 'react'
import { Component } from 'react'
import { MenuItems } from "./MenuItems"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'    
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import './style.scss'




class Navbar extends Component {
    state = { clicked: false }
    handleCLick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (


            <nav className="container">
                <div className="logo">
                    <h1>
                        Clegal
                    </h1>
                </div>
                <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className="cart">
                <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="menu-icon" onClick={this.handleCLick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <>
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>

                                </li>
                            </>
                        )
                    }
                    )}

                </ul>
            </nav>

        )
    }
}

export default Navbar