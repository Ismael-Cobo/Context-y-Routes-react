import { useContext } from "react"
import { Row } from "react-bootstrap"
import { TraductorContext } from "../../context/TraductorContext"

import collserola from '../../img/collserola.jpg'

export const Collserola = () => {

  const { traduce } = useContext(TraductorContext)

  return (
    <Row>
      <h2>
        {traduce('collserolaTitle')}
      </h2>
      <p>{traduce('collserolaP1')}</p>
      <img src={collserola} alt="img" style={{ maxWidth: '500px' }} />
    </Row>
  )
}
