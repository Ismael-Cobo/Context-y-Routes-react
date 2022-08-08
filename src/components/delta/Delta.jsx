import { useContext } from "react"
import { Row } from "react-bootstrap"
import { TraductorContext } from "../../context/TraductorContext"

import delta from '../../img/delta.jpg'

export const Delta = () => {

  const { traduce } = useContext(TraductorContext)

  return (
    <Row>
      <h2>
        {traduce('deltaTitle')}
      </h2>
      <p>{traduce('deltaP1')}</p>
      <img src={delta} alt="img" style={{ maxWidth: '500px' }} />
    </Row>
  )
}
