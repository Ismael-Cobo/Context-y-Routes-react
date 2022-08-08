import { useContext } from "react"
import { Row } from "react-bootstrap"
import { TraductorContext } from "../../context/TraductorContext"

import llorens from '../../img/llorens.jpg'

export const Llorens = () => {

  const { traduce } = useContext(TraductorContext)

  return (
    <Row>
      <h2>
        {traduce('llorensTitle')}
      </h2>
      <p>{traduce('llorensP1')}</p>
      <img src={llorens} alt="img" style={{ maxWidth: '500px' }} />
    </Row>
  )
}
