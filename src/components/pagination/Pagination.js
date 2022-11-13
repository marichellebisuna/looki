import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import './pagination.scss';

const Pagination = () => {
  return (
    <div className='pagination'>
      <KeyboardArrowLeft className='arrows'/>     
      <div className="page active">1</div>
      <div className="page">2</div>
      <KeyboardArrowRight className='arrows'/>
    </div>
  )
}

export default Pagination