import styles from './House.module.css'
function House(props) {
    return (
        <div className={styles.cardHome}>
            <h2>{props.title}</h2>
            <div className={styles.cardImage}><img src={props.imgUrl} /></div>
            <div className={styles.ctaContainer}>
                <a href="#" className={styles.detailsLink}>Details</a>
            </div>
        </div>
    )
}
export default House