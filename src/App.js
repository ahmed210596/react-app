import logo from './logo.svg';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import {Header,Footer,Hero ,MostPopulaire,GamingLibrary}from'./sections/index';
import {Container} from '../src/components/index'
import {  Home,Profile} from '../src/Pages/index'

function App() {
  return (
    <>
    <Router>
    <Header />
    <Container>
      {/* <Hero/>
      <MostPopulaire/>
      <GamingLibrary/> */}
      <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/profile' element={<Profile/>} />
    </Routes>
    </Container>
  <Footer/> 
  </Router>
    </>
  );
}

export default App;
