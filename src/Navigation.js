import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import HouseForRent from './Pages/HouseForRent/HouseForRent'
function Navigation() {
    return (
        <BrowserRouter>
        <Header />
            <Routes >
                <Route path="/" element={<HomePage />} />
                <Route path="/housing-for-rent" element={<HouseForRent />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation