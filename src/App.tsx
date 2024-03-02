import './styles/index.scss'
import {Link, Route, Routes} from 'react-router-dom'
import {MainPageAsync} from './pages/MainPage/MainPage.async'
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async'
import {Suspense} from 'react'
import {useTheme} from './theme/useTheme'
import {classNames} from "./helpers/classNames/classNames";

const App = () => {


  const { theme,toggleTheme }  =  useTheme()

  return (

    <div className={classNames('app',{},[theme,'cls2'])}>

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

export default App;
