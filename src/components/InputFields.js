import React from 'react';

const InputFields = ({setCity}) => {

    const selectCity = (e) => {
        setCity(e.target.value);
       };
       
    return (
        <>
            <label> City </label>
            <select onChange = {selectCity}> 
              <option value = 'Osh' > Osh </option>
              <option value = 'Bishkek'> Bishkek </option>
              <option value = 'Talas'> Talas </option>
              <option value = 'Naryn'> Naryn </option>
              <option value = 'Jalal-Abad'> Jalal-Abad </option>
              <option value = 'Batken'> Batken </option> 
            </select>
        </>
    )
} 

export default InputFields;