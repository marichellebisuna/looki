import './typeTab.scss';

const TypeTab = ({ title, active, filterProducts}) => {
  
  return (
    <li className={
      active ?"typeItem active":"typeItem"} 
      onClick={()=>filterProducts(title)}>
      {title}
    </li>
  )
}

export default TypeTab