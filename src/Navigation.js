import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
function Navigation() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation