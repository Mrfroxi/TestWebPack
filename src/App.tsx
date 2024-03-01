import { Route, Routes } from 'react-router-dom'
import './index.scss'
import MainPage from './pages/MainPage/MainPage'
import AboutPage from './pages/AboutPage/AboutPage'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <div className='app'>
       <Link to={'/'}> To1</Link>
        <Link to={'/about'}> To1</Link>
        <Routes>
          <Route  path={'/'} element={<MainPage/>}/>
          <Route  path={'/about'} element={<AboutPage/>}>
          </Route>
        </Routes>
    </div>
  ) 
}

export default App