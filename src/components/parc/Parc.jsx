import { useContext } from "react"
import { Row } from "react-bootstrap"
import { TraductorContext } from "../../context/TraductorContext"

import parc from '../../img/parc.jpg'

export const Parc = () => {

  const { traduce } = useContext(TraductorContext)

  return (
    <Row>
      <h2>
        {traduce('montsenyTitle')}
      </h2>
      <p>{traduce('montsenyP1')}</p>
      <img src={parc} alt="img" style={{ maxWidth: '500px' }} />
    </Row>
  )
}
