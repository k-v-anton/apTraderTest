import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../../pages/homePage/HomePage'
import { ProjectPage } from '../../pages/projectPage/ProjectPage'

export const App = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/project/:projectName' element={<ProjectPage />} />
    </Routes>
  )
}
