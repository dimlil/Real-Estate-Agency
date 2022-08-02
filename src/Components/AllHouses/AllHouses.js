import styles from './AllHouses.module.css'
function AllHouse(props) {
    return (
        <div className={styles.card}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>

            <div className={styles.ctaContainer}>
                <a href="#" className={styles.detLink}>Details</a>
            </div>
            <div className={styles.cardCircle}><img src={props.imgUrl} /></div>
        </div>
    )
}
export default AllHouse