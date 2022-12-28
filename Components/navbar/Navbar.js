import React from 'react';
import './Navbar.css';
import Toggler from '../toggler/Toggler';

export default function Navbar (props){
    return (
        <nav className={props.darkMode? 'nav': 'nav bright'}>
            <div className='wrapper'>
                <img className="nav--logo" src="logo512.png" alt="logo" />
                <h1 className="nav--title">ReactJS Facts</h1>
            </div>
           <Toggler
                darkMode={props.darkMode}
                toggleDarkMode={props.toggleDarkMode}/>
        </nav>
    )
}