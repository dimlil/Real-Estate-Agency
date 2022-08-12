import styles from './PageNotFound.module.css'
function PageNotFound(){
    return(
        <main>
            <div className={styles.notFoundContainer}>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The Page you are looking for doesn't exist or another error occurred. Go to <a href="#">Home Page.</a></p>
            </div>
        </main>
    )
}
export default PageNotFound