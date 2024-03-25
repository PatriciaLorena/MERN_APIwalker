import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BuscaPokemon from './BuscaPokemon';
import Tarjeta from './Tarjeta';

function Homeworld() {
    const { id } = useParams();
    const [homeworld, setHomeworld] = useState(null);

    useEffect(() => {
        const fetchHomeworld = async () => {
            try {
                // Obtener los detalles del personaje para obtener la URL del mundo natal
                const characterResponse = await axios.get(`https://swapi.dev/api/people/${id}/`);
                const homeworldUrl = characterResponse.data.homeworld;

                // Obtener el nombre del mundo natal usando la URL obtenida anteriormente
                const homeworldResponse = await axios.get(homeworldUrl);
                setHomeworld(homeworldResponse.data.name);
            } catch (error) {
                console.error('Error fetching homeworld:', error);
            }
        };

        fetchHomeworld();
    }, [id]);

    return (
        <div>
            <h2>Mundo Natal</h2>
            {homeworld ? <p>{homeworld}</p> : <p>Cargando...</p>}
        </div>
    );
}

export default Homeworld;

