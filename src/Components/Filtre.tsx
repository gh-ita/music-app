import React from 'react';
import FiltreInterface from './FiltreInterface.tsx'
import '../Style/Filtre.css'

function Filtre({value,setValue,placeholder}:FiltreInterface){
    function handleChange(e){
        const newValue = e.target.value;
        setValue(newValue);
    }
    return(
        <>
        <input type ="text" placeholder= {placeholder} value = {value} 
        onChange={(e) => handleChange(e)}
        />
        </>
    );

}

export default Filtre;