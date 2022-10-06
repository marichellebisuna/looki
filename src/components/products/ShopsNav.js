import { AppsOutlined, ListOutlined } from '@material-ui/icons';
import './shopsNav.scss';

const ShopsNav = () => {
  return (
    <div className="shops-nav">
      <div className="grids">
       <AppsOutlined />
        <ListOutlined /> 
        </div>
        <p>There are 13 products.</p>
        <div className="sort">
          Sort by:
          <select>
            <option value="0">Relevance</option>
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