import './SectionWrapper.css'


function SectionWrapper(props) {
  return (
    <div className='section-wrapper'>

    <h4>{props.children}</h4>

   </div>
  );
}


export default SectionWrapper;