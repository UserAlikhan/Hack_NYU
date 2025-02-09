import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import UsersPage from './pages/UsersPage'
import UserDetailsPage from './pages/UserDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import NavigationHeader from './components/navigation/navigationHeader'
import Footer from './components/navigation/footer'
import BillsPage from './pages/BillsPage'

function App() {
  return (
    <div>
      <NavigationHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:userId' element={<UserDetailsPage />} />
        <Route path='/users/:userId/bills/:accountId' element={<BillsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
