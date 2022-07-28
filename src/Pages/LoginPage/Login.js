import { Link } from 'react-router-dom'
import styles from './Login.module.css'
function LoginPage() {
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
                            <input type="text" className={styles.inputField} placeholder="alexander" id="username" name="" value="" />
                            <label className={styles.username}>Username</label>
                        </div>
                        <div className={styles.input}>
                            <input type="password" className={styles.inputField} id="password" name="" placeholder="******" />
                            <label className={styles.password}>Password</label>
                        </div>
                        <div className="action">
                            <button className={styles.actionButton}>Login</button>
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