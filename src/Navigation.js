import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import CreatePage from './Pages/CreatePage/CreatePage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import EditPage from './Pages/EditPage/EditPage'
import HomePage from './Pages/HomePage/HomePage'
import HouseForRent from './Pages/HouseForRent/HouseForRent'
import LoginPage from './Pages/LoginPage/Login'
import PageNotFound from './Pages/PageNotFound/PageNotFound'
import RegisterPage from './Pages/RegisterPage/RegisterPage'
import SearchPage from './Pages/SearchPage/SearchPage'
import checkAuth from './Services/RouteGuard'

function Navigation() {
    const [auth, setAuth] = useState();
    useEffect(() => {
        checkAuth().then(data=>setAuth(data));
    }, []);
    return (
        <BrowserRouter>
        <Header />
            <Routes >
                <Route path="/" element={<HomePage />} />
                <Route path="/housing-for-rent" element={<HouseForRent />} />

                <Route path="/register" element={!auth ? <RegisterPage /> : <HomePage />} />
                <Route path="/login" element={!auth ? <LoginPage /> : <HomePage />} />
                <Route path="/create" element={auth ? <CreatePage /> : <LoginPage />} />
                <Route path="/search" element={auth ? <SearchPage /> : <LoginPage />} />
                <Route path="/house/:id" element={<DetailsPage />} />
                <Route path="/edit/:id" element={auth ? <EditPage /> : <LoginPage />} />
                <Route path="/*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navigation