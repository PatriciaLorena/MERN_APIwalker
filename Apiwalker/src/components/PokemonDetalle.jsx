import { useState } from "react";
import { useParams } from "react-router-dom"
import Tarjeta from "./Tarjeta"
import useAxios from "../hooks/useAxios";

const PokemonDetalle = () => {
    const { id } = useParams();
    const [resource, setResource] = useState('people');
    const {data: pokemon, isLoading, error} = useAxios(`https://swapi.dev/api/${resource}/${id}`)
    
    if(isLoading){
        return <p>Cargando...</p>
    }

    if(error){
        return <div>
        <p>{error.message}</p>
        <img width="200" src="https://media.vogue.fr/photos/606dca7e47f477da2ff11fcf/2:3/w_2560%2Cc_limit/010_A7A08C89_416.jpg" alt="Estos no son los droides que está buscando" />
        <p>Estos no son los droides que está buscando</p>
      </div>
        
    }
    
    const {name, height,mass,hair_color, homeworld} = pokemon

    return (
        <Tarjeta
        nombre={`${name}`}
        altura={height}
        peso={mass}
        colorPelo={hair_color}
        mundo={homeworld}

        />


        
    )
}

export default PokemonDetalle