import { useEffect, useState } from 'react';
import Progress from './Progress';
import './Astros.css'

const DATA_URL = 'http://api.open-notify.org/astros.json'

const Astro = ({name, craft, index}) => {
    return (
        <div className='astro--container'>
            <h2 className='astro--name'>{name}</h2>
            <p className='astro--station'>Space satation: {craft}</p>
        </div>
    )
}

const Astros = () => {
    const [astros, setAstros] = useState([])

    useEffect(() => {
        fetchAstros();
    }, []);

    const fetchAstros = () => {
        fetch(DATA_URL)
        .then(res => res.json())
        .then(data => setAstros(data.people))
        .catch(err => console.log(err));
    }

    return (
        <>
            <h2>Amogus</h2>
            {
                astros.length !== 0
                    ?
                astros.map((astro, index) => (
                    <Astro key={index} {...astro}/>
                ))
                : 
                <Progress/>
            }
        </>
    )
}

export default Astros;