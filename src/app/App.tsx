import './styles/index.scss'
import {Suspense} from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

const App = () => {

  const { theme,toggleTheme }  =  useTheme()

  return (

    <div className={classNames('app',{},[theme,'cls2'])}>

      <button onClick={toggleTheme}>toggle</button>

      <Link to={'/'}> To1</Link>
      <Link to={'/about'}> To1</Link>

      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route  path={'/'} element={<MainPage/>}/>
            <Route  path={'/about'} element={<AboutPage/>}>
            </Route>
          </Routes>
      </Suspense>

    </div>
  )
}

export default App;
