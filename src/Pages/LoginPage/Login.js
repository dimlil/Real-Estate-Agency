import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../Services/Login';
import styles from './Login.module.css'
function LoginPage() {
    let navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const updatingUserName = (e) => {
        setUserName(e.target.value);
    };

    const updatingPassword = (e) => {
        setPassword(e.target.value);
    };
    const formHanldler = async (e) => {
        e.preventDefault();
        const result = await login(username, password);
        if (result.status==200) {
            navigate('/')
        }
    }
    return (
        <main>
            <section id="login-page">
                <div className={styles.boxs}>
                    <div className={styles.cardImage}>
                        <h2 className={styles.cardHeading}>
                            Login
                        </h2>
                    </div>
                    <form className={styles.cardForm} action="" method="">

                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} placeholder="alexander" id="username" name="username" onChange={updatingUserName} />
                            <label className={styles.username}>Username</label>
                        </div>
                        <div className={styles.input}>
                            <input type="password" className={styles.inputField} id="password" name="password" placeholder="******" onChange={updatingPassword}/>
                            <label className={styles.password}>Password</label>
                        </div>
                        <div className="action">
                            <button className={styles.actionButton} onClick={formHanldler}>Login</button>
                        </div>
                    </form>
                    <div className={styles.cardInfo}>
                        <p>Dont have an account?
                            <Link to='/register'>Sign up</Link>.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default LoginPage