import { Link } from 'react-router-dom'
import styles from './register.module.css'
function RegisterPage() {
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
                            <input type="text" className={styles.inputField} placeholder="Alexander Parkinson" id="name" name="name" value="" />
                            <label className={styles.name} htmlFor="name">Full Name</label>
                        </div>
                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} placeholder="alexander" id="username" name="" value="" />
                            <label className={styles.username} htmlFor="username">Username</label>
                        </div>
                        <div className={styles.input}>
                            <input type="password" className={styles.inputField} id="password" name="" placeholder="******" />
                            <label className={styles.password} htmlFor="password">Password</label>
                        </div>
                        <div className={styles.input}>
                            <input type="password" className={styles.inputField} id="re-password" name="" placeholder="******" />
                            <label className={styles.rePassword} htmlFor="re-password">Repeat Password</label>
                        </div>
                        <div className={styles.action}>
                            <button className={styles.actionButton}>Get started</button>
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