import React from 'react';
import './Main.css'

export default function Main (props){
    return(
        <div className={props.darkMode? 'main dark-mode' : "main"}>
        <h1 className='main--title'>Importance of React</h1>
        <ul className='main--list'>
            <li>It is component-based.</li>
            <li>It makes code easy to manage.</li>
            <li>It is component-based.</li>
            <li>It is is the new tech of front-end.</li>
            <li>It makes code reusable.</li>
            <p></p>
        </ul>
        
        </div>
    )
}