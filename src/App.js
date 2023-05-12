import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';

function App() {

  const location = window.location.pathname;



  return (

    <Router>

      <Routes>

        <Route path='/Home' element={<Home/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>

      </Routes>

    </Router>

  );
}

export default App;
