import './Home.css';
import {Hero,MostPopulaire,GamingLibrary,Header,Footer} from '../../sections/index'
function Home(props) {
  return (
    <>
    <h1>Home page</h1>
    <Hero/>
      <MostPopulaire/>
      <GamingLibrary/>
    
    </>
  );
}

export default Home