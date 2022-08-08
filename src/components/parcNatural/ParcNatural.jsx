import { useContext } from "react"
import { Row } from "react-bootstrap"
import { TraductorContext } from "../../context/TraductorContext"

import ParcNaturalImg from '../../img/ParcNatural.jpg'

export const ParcNatural = () => {

  const { traduce } = useContext(TraductorContext)

  return (
    <Row>
      <h2>
        {traduce('parcaNaturalTitle')}
      </h2>
      <p>{traduce('parcaNaturalP1')}</p>
      <img src={ParcNaturalImg} alt="img" style={{ maxWidth: '500px' }} />
    </Row>
  )
}
