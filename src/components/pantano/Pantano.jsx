import { useContext } from "react"
import { Row } from "react-bootstrap"
import { TraductorContext } from "../../context/TraductorContext"

import pantano from '../../img/pantano.jpg'

export const Pantano = () => {

  const { traduce } = useContext(TraductorContext)

  return (
    <Row>
      <h2>
        {traduce('pantanoTitle')}
      </h2>
      <p>{traduce('pantanoP1')}</p>
      <img src={pantano} alt="img" style={{ maxWidth: '500px' }} />
    </Row>
  )
}
