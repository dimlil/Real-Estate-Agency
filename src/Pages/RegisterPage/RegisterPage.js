import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../../Services/Register';
import styles from './register.module.css'

function RegisterPage() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const updatingName = (e) => {
        setName(e.target.value);
    };

    const updatingUsername = (e) => {
        setUsername(e.target.value);
    };

    const updatingPassword = (e) => {
        setPassword(e.target.value);
    };

    const updatingRePassword = (e) => {
        setRePassword(e.target.value);
    };

    const formHanldler = async (e) => {
        e.preventDefault();
        const result = await register(name, username, password);
        if (result) {
            navigate('/')
        }
    }
    return (
        <main>

            <section id="register-page">
                <div className={styles.boxs}>
                    <div className={styles.cardImage}>
                        <h2 className={styles.cardHeading}>
                            Create your account
                        </h2>
                    </div>
                    <form className={styles.cardForm} action="" method="">
                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} placeholder="Alexander Parkinson" id="name" name="name" onChange={updatingName} />
                            <label className={styles.name} htmlFor="name">Full Name</label>
                        </div>
                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} placeholder="alexander" id="username" name="username" onChange={updatingUsername} />
                            <label className={styles.username} htmlFor="username">Username</label>
                        </div>
                        <div className={styles.input}>
                            <input type="password" className={styles.inputField} id="password" name="password" placeholder="******" onChange={updatingPassword} />
                            <label className={styles.password} htmlFor="password">Password</label>
                        </div>
                        <div className={styles.input}>
                            <input type="password" className={styles.inputField} id="re-password" name="rePassword" placeholder="******" onChange={updatingRePassword} />
                            <label className={styles.rePassword} htmlFor="re-password">Repeat Password</label>
                        </div>
                        <div className={styles.action}>
                            <button className={styles.actionButton} onClick={formHanldler}>Get started</button>
                        </div>
                    </form>

                    <div className={styles.cardInfo}>
                        <small>Already have an account?
                            <Link to='/login'>Sign in</Link>
                        </small>
                    </div>
                </div>
            </section>

        </main>
    )
}
export default RegisterPage