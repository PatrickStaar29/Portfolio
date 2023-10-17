import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './assets/scss/style.scss'


//importer les pages
import Home from './assets/page/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
