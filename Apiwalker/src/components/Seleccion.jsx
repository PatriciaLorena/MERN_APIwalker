import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFilm, faSpaceShuttle, faCar, faDna, faGlobe,faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Seleccion() {
  const [resource, setResource] = useState('');

  const handleChange = (e) => {
    setResource(e.target.value);
  };

  return (
    

      <div className="d-flex align-items-center">
        <select value={resource} onChange={(e) => setResource(e.target.value)} className="p-2 mx-3">
          <option value="people">👤 People</option>
          <option value="films">🎬 Films</option>
          <option value="starships">🚀 Starships</option>
          <option value="vehicles">🚗 Vehicles</option>
          <option value="species">🧬 Species</option>
          <option value="planets">🌍 Planets</option>
        </select>
      </div>
  );
}

export default Seleccion;