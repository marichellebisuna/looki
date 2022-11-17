import "./search.scss"
import { Search, CloseOutlined } from '@material-ui/icons'

const SearchPage = ({setOpenSearchPage}) => {
  return (
    <div className="container_search" onClick={()=>setOpenSearchPage(false)}>
      <div className="close" onClick={()=>setOpenSearchPage(false)}><CloseOutlined /></div>
      <div className="search" >            
        <form >
          <input type="text" name="" id="" placeholder="Search Products...." autoFocus/>
          <button type="submit"><Search /></button>
        </form>            
      
      </div>
    </div>
    
  )
}

export default SearchPage