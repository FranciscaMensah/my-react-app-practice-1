import React from 'react';
import './Toggler.css';

export default function Toggler (props){
    return(
        <div 
            className='toggler'
            onClick={props.toggleDarkMode}>

            <p style={props.darkMode? {color: 'inherit'} : {color: '#0b162e'}}>Light mode</p>
            <div 
                className={props.darkMode ? 'toggler--slider' : 'toggler--slider dark--slider'}>
                <div 
                    className={props.darkMode ? 'toggler--slider--circle': 'toggler--slider--circle dark--slider--circle'}></div>
            </div>
            <p style={props.darkMode? {color: '#eee'}: {color: 'inherit'}}>Dark mode</p>
        </div>
    )
}