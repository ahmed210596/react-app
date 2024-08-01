import './Button.css';

function PrimaryButton(props) {
  return (
    <>
    <div className='main-button'>
        <a href='browse.html'>{props.children}</a>
    </div>
    
    </>
  );
}

function SecondaryButton(props) {
  return (
    <>
    <div className='main-button'>
        <a href='browse.html'>{props.children}</a>
    </div>
    </>
  );
}


export default PrimaryButton
export  {SecondaryButton}