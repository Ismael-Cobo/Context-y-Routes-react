import { useContext } from "react"
import { Row } from "react-bootstrap"
import { TraductorContext } from "../../context/TraductorContext"

import montserrat from '../../img/montserrat.jpg'

export const Montserrat = () => {

  const { traduce } = useContext(TraductorContext)

  return (
    <Row>
      <h2>
        {traduce('montserratTitle')}
      </h2>
      <p>{traduce('montserratP1')}</p>
      <img src={montserrat} alt="img" style={{ maxWidth: '500px' }} />
    </Row>
  )
}
