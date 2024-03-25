import { useState } from "react"
import {useNavigate} from "react-router-dom"
import Seleccion from "./Seleccion"

const BuscaPokemon = () => {
    const [texto, setTexto] = useState('')

    const navigate = useNavigate();

    const handleInput =(e)=>{
        setTexto(e.target.value)
    }
    const handleButton =()=>{
        navigate(`/pokemon/${texto}`)
    }

    return (
        <div className="input-group mb-3">
            <label className="mx-3" htmlFor="">Search for</label>
            <Seleccion />
            <label className="mx-3" htmlFor="">Id</label>
            <input type="text" className="form-control mx-3" value={texto} onChange={handleInput} placeholder="Ingresa un numero" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn btn-secondary px-5" type="button" id="button-addon2" onClick={handleButton}>Buscar </button>
        </div>
    )
}

export default BuscaPokemon