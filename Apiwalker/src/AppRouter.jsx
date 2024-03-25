import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import PokemonDetalle from './components/PokemonDetalle'
import BuscaPokemon from './components/BuscaPokemon'
import Redireccionar from './components/Redireccionar'
import Tarjeta from './components/Tarjeta';
import Homeworld from './components/Homeworld';
function AppRouter() {
  return (
    <BrowserRouter>
      <div className='container m-3'>
        <BuscaPokemon/>
        <div className='row'>
          <div className='col-4'>
            <Routes>
              <Route path='/' element={<Redireccionar to="/pokemon/10" />} />
              <Route path='/pokemon/:id' element={<PokemonDetalle />} />
              <Route path="/:id/homeworld" element={<Homeworld />} />
              <Route path="/tarjeta/:id" element={<Tarjeta />} />
              <Route path='/:id' element={<Tarjeta />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default AppRouter
