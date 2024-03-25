import React from 'react'
import { Outlet } from 'react-router-dom'

const ContenedorPaginas = () => {
  return (
    <>
      <h4>Dentro del contenedor de páginas</h4>
      <hr/>
      <Outlet/>
    </>
  )
}

export default ContenedorPaginas