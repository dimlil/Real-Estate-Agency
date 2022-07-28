import { Link } from 'react-router-dom'
import { } from './Header.module.css'
function Header() {
    return (
        <nav>
            {/* <a href="#">Home</a> */}
            <Link to={'/'}>Home</Link>
            <ul>
                {/* <li><a href="#">Housing for rent</a></li> */}
                <Link to={'/housing-for-rent'}>Housing for rent</Link>


                <Link to={'/login'}>Login</Link>
                <Link to={'/register'}>Register</Link>

                <Link to={'/create'}>Create offer</Link>
                <Link to={'/search'}>Search</Link>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    )
}
export default Header