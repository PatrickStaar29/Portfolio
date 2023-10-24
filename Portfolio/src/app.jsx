import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './assets/scss/style.scss'


//importer les pages
import Home from './assets/page/home'
import Projet from './assets/page/projet'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projet/:id' element={<Projet/>}/>
      </Routes>
    </Router>
  )
}

export default App
