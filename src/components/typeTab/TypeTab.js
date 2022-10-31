import './typeTab.scss';

const TypeTab = ({id, title, active, setSelected}) => {
  return (
    <li className={
      active ?"typeItem active":"typeItem"} 
      onClick={()=>setSelected(id)}>
      {title}
    </li>
  )
}

export default TypeTab