import { Routes, Route } from 'react-router-dom'
import App from '../App'

import { Collserola, NotFound, Parc, Pantano, Delta, Montserrat, Pedraforca, ParcNatural, Llorens } from '../components'

// import { Parc, Collserola, NotFound, Pa } from '../components'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Parc />} />
        <Route path='parc' element={<Parc />} />
        <Route path='collserola' element={<Collserola />} />
        <Route path='pantano' element={<Pantano />} />
        <Route path='delta' element={<Delta />} />
        <Route path='montserrat' element={<Montserrat />} />
        <Route path='pedraforca' element={<Pedraforca />} />
        <Route path='parcNatural' element={<ParcNatural />} />
        <Route path='llorens' element={<Llorens />} />
        <Route element={<NotFound />} />
      </Route>
    </Routes>
  )
}
