import { Button } from 'react-bootstrap'

export const ButtonCustom = ({ fn, variant, text }) => {
  return (
    <Button variant={variant} onClick={fn}>{text}</Button>
  )
}
