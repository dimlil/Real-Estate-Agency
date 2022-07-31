import styles from './House.module.css'
function House() {
    return (
        <div className={styles.cardHome}>
            <h2>Real House Luxury Villa</h2>
            <div className={styles.cardImage}><img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/314234927.jpg?k=21291418450e2c1802e02864677b7cf811321797b1d36aaa55e1019133f82698&o=&hp=1" /></div>
            <div className={styles.ctaContainer}>
                <a href="#" className={styles.detailsLink}>Details</a>
            </div>

        </div>
    )
}
export default House