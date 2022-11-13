import { AppsOutlined} from '@material-ui/icons';
import { FormatListBulleted} from '@mui/icons-material';
import { useState } from 'react';
import './shopsNav.scss';

const ShopsNav = ({show, setShow}) => {
 const [on, setOn] = useState(false)

  return (
    <div className="shops-nav">
      <div className="grids">
       <AppsOutlined className='active icon' onClick={()=>setOn(!on)}/>
        <FormatListBulleted className='icon' onClick={()=>setOn(!on)}/> 
      </div>
      <p>There are 13 products.</p>
      <div className="sort">
        Sort by:
        <select>
          <option value="0">Open this select menu</option>
          <option value="1">Name, A to Z</option>
          <option value="2">Name, Z to A</option>
          <option value="3">Price, low to high</option>
          <option value="4">Price, high to low</option>
        </select>
      </div>
    </div>
  )
}

export default ShopsNav