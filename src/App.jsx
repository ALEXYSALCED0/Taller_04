import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

import HomeView from './views/HomeView'
import CoursesView from './views/CoursesView'
import AboutView from './views/AboutView'
import LoginView from './views/LoginView'
import NotFoundView from './views/NotFoundView'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/cursos" element={<CoursesView />} />
        <Route path="/nosotros" element={<AboutView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  )
}

export default App