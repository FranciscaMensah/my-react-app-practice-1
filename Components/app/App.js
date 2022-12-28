import React from 'react';
import Navbar from '../navbar/Navbar';
import Main from '../main/Main';

export default function App (){
    const [darkMode, setDarkMode] = React.useState(true);

    console.log(darkMode)
    function toggleDarkMode () {
        setDarkMode(prevMode => !prevMode);
        console.log(darkMode);
    }

    return (
        <>
        <Navbar 
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}/>
        <Main darkMode={darkMode}/>
        </>
    )
}
