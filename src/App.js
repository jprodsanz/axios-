import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
// import MyCoinFlips from './screens/MyCoinFlips/MyCoinFlips';

function App () {
  return(
    <>
          <Header />
          <main> 
            <Routes>
              <Route path='/'element= {<LandingPage/>} exact/>
              {/* <Route path='/flip'element= {<MyCoinFlips/>} /> */}
            </Routes>
          </main>
      <Footer />
    </>
  )
}
export default App;