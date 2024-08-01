
import './Card.css';
import { FaRegStar,FaDownload  } from "react-icons/fa6";



function Card(props) {
  return (
    <div className='most-popolar-item'>
            <div className='card-wrapper'>
                <img src={props.image} className='most-popular-item-image'/>
                <div className='most-popular-item-content'>

                    <h4 className='most-popular-item-title'>{props.title}<br/>
                    
                    <span>{props.category}</span>
                    </h4>
                   <ul>

                   <li>
                  <span style={{"color":"yellow"}}><FaRegStar />  </span> <span>{props.rate}</span>
                    </li> 
                    <li>
                    <span style={{"color":"yellow"}}> <FaDownload /></span><span>{props.download}</span>
                    </li> 
                   </ul>
                </div>

            </div>
        </div>
  );
}

export default Card;