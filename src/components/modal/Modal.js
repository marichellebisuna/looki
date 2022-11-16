import { Close } from '@material-ui/icons'
import './modal.scss'

const Modal = () => {
  return (
    <div className='modal'>
      <div className="top">
        <div className="spacer"></div>
        <div className="x"><Close/></div></div>
      <div className="bottom"></div>

    </div>
  )
}

export default Modal