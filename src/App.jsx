import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import { TraductorContext } from './context/TraductorContext'

import { Navegacion } from './components'

import { Container } from "react-bootstrap"

import { dictionary } from './dictionary/dictionary'


function App() {

  const [idioma, setIdioma] = useState(0)

  const traduce = (etiqueta) => dictionary[etiqueta][idioma];

  return (
    <TraductorContext.Provider value={{ setIdioma, traduce, idioma }}>
      <Navegacion />
      {/* <AppRouter /> */}
      <Container>
        <Outlet />
      </Container>
    </TraductorContext.Provider>

  )
}

export default App
