import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { checkAuth } from '../../Services/CheckAuth';
import { logout } from '../../Services/Logout';
import { } from './Header.module.css'
function Header() {
    let location = useLocation();
    let navigate = useNavigate();
    const [user, setUser] = useState(false);
    useEffect(() => {
        checkAuth().then(data => { setUser(data) });
    }, [location]);

    const logoutHandler = async() => {
        const result = await logout();
        if (result.status===200) {
            navigate('/');
        }
    }
    return (
        <nav>
            <Link to={'/'}>Home</Link>
            <ul>
                <Link to={'/housing-for-rent'}>Housing for rent</Link>

                {user === false ?
                    <>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </>
                    :
                    <>
                        <Link to={'/create'}>Create offer</Link>
                        <Link to={'/search'}>Search</Link>
                        <li><a onClick={ logoutHandler }>Logout</a></li>
                    </>
                }
            </ul>
        </nav>
    )
}
export default Header