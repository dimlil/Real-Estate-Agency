import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { checkAuth } from '../../Services/CheckAuth';
import { } from './Header.module.css'
function Header() {
    let location = useLocation();
    const [user, setUser] = useState(false);
    useEffect(() => {
        checkAuth().then(data => { setUser(data) });
    }, [location]);
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
                        <li><a href="#">Logout</a></li>
                    </>
                }
            </ul>
        </nav>
    )
}
export default Header