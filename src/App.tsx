import './styles/index.scss'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { Suspense } from 'react'
import { useTheme } from './theme/useTheme'
const App = () => {


  const { theme,toggleTheme }  =  useTheme()

  return (

    <div className={`app ${theme}`}>

      <button onClick={toggleTheme}>toggle</button>

        <Link to={'/'}> To1</Link>
        <Link to={'/about'}> To1</Link>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route  path={'/'} element={<MainPageAsync/>}/>
            <Route  path={'/about'} element={<AboutPageAsync/>}>
            </Route>
          </Routes>
      </Suspense>

    </div>
  )
}

export default App
