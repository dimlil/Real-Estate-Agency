import { Link } from 'react-router-dom'
import styles from './AllHouses.module.css'
function AllHouse(props) {
    return (
        <div className={styles.card}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>

            <div className={styles.ctaContainer}>
                <Link to={`/house/${props.id}`} className={styles.detLink} >
                    Details
                </Link>
            </div>
            <div className={styles.cardCircle}><img src={props.imgUrl} /></div>
        </div>
    )
}
export default AllHouse