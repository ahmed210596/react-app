
import './GamingLibrary.css';
import PrimaryButton from '../../components/Button/Button'
function GamingLibraryCard(props) {
  return (
    <div className='gaming-library-card'>
    
  <ul>
   <li><img src={props.image} alt=''></img></li>
   <li><h4>{props.title}</h4><span>{props.category}</span></li>
   <li><h4>date added</h4><span>{props.date_added}</span></li>
   <li><h4>hours played</h4><span>{props.hours_played}</span></li>
   <li><h4>curently</h4><span>{props.download}</span></li>
   {/* <div className='main-button'>
        <a href='browse.html'>Browse Now</a>
    </div> */}
    <PrimaryButton>Browse Now</PrimaryButton>


    </ul>
    
    </div>
  );
}

export default GamingLibraryCard;