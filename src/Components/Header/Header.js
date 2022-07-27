import {styles} from './Header.module.css'
function Header(){
    return(
        <nav>
            <a href="#">Home</a>
            <ul>
                <li><a href="#">Housing for rent</a></li>
                
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