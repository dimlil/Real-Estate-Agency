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


                <li><a href="#">Login</a></li>
                <li><a href="#">Register</a></li>

                <li><a href="#">Create offer</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </nav>
    )
}
export default Header