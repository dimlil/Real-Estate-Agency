import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import CreatePage from './Pages/CreatePage/CreatePage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import HomePage from './Pages/HomePage/HomePage'
import HouseForRent from './Pages/HouseForRent/HouseForRent'
import LoginPage from './Pages/LoginPage/Login'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import SearchPage from './Pages/SearchPage/SearchPage'
function Navigation() {
    return (
        <BrowserRouter>
        <Header />
            <Routes >
                <Route path="/" element={<HomePage />} />
                <Route path="/housing-for-rent" element={<HouseForRent />} />

                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/house/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation