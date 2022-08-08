import { useContext } from "react"
import { Row } from "react-bootstrap"
import { TraductorContext } from "../../context/TraductorContext"

import pedraforca from '../../img/pedraforca.jpg'

export const Pedraforca = () => {

  const { traduce } = useContext(TraductorContext)

  return (
    <Row>
      <h2>
        {traduce('pedraforcaTitle')}
      </h2>
      <p>{traduce('pedraforcaP1')}</p>
      <img src={pedraforca} alt="img" style={{ maxWidth: '500px' }} />
    </Row>
  )
}
