import './Navitem.css';


function Navitem(props) {
  return (
    <li className='nav-item'>
    
   <div>{props.children}</div>
    
    </li>
  );
}



function NavitemDropDown(props) {
    return (
      <li className='nav-item dropdown'>
      
     <div>{props.children}</div>
      
      </li>
    );
  }
export default Navitem;
export {NavitemDropDown};