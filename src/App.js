import './App.css';
import { Header } from './components/Header';
import { Countries } from './components/Countries';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Country } from './components/Country';
function App() {
  return (
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/rest-countries-app/" element={(
            <>
              <Countries/>
            </>
          )}/>

          <Route path="/rest-countries-app/countries/:name" element={<Country/>}/>
        </Routes>
        
        
      </Router>
          
  )
}

export default App;
