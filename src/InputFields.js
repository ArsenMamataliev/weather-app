import React,{useState} from 'react';

const styles = {
    input: {
        border: "none",
        padding: '10px 20px',
        marginRight: '10px',
    },
    btn: {
        border: 'none',
        padding: '10px 20px',
        backgroundColor: 'red',
        color: 'white'
    }
}


const InputFields = () => {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`${city} ${country}`)
    };

    return (<form onSubmit ={submitHandler}>
        <div>
            <input type="text" placeholder="City"  style = {styles.input} value = {city} onChange={e => setCity(e.target.value)}/>
            <input type="text" placeholder="Country" style = {styles.input} value = {country} onChange={e => setCountry(e.target.value)}/>
            <button type="submit" style = {styles.btn} >Get information</button>
        </div>
        </form>
    )
}

export default InputFields;