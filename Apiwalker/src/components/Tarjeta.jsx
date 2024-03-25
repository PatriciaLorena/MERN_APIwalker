import PropTypes from 'prop-types';
import { useState } from 'react';
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'; 

const Tarjeta = ({ nombre, altura, peso, colorPelo, mundo }) => {
    const { id } = useParams();
    const [resource, setResource] = useState('people'); 

    return (
        <div className='mt-3'>
                <h2 className='card-title'>{nombre}</h2>
                <p>Altura: {altura}</p>
                <p>Peso: {peso}</p>
                <p>Color de cabello: {colorPelo}</p>
                {resource === 'people' && (
                    <p>
                        Mundo Natal: <Link to={`/${id}/homeworld`}>{mundo}</Link>
                    </p>
                )}
            </div>
            
    );
};

Tarjeta.propTypes = {
    nombre: PropTypes.string.isRequired,
    altura: PropTypes.string.isRequired,
    peso: PropTypes.string.isRequired,
    colorPelo: PropTypes.string.isRequired,
    mundo: PropTypes.string.isRequired,
};

export default Tarjeta;
