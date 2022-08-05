import { Link } from 'react-router-dom'
import styles from './TopHouse.module.css'
function TopHouse(props) {
    return (
        <div className={styles.cardHome}>
            <h2>{props.title}</h2>
            <div className={styles.cardImage}><img src={props.imgUrl} /></div>
            <div className={styles.ctaContainer}>
                <Link to={`/house/${props.id}`} className={styles.detailsLink} >
                    Details
                </Link>
            </div>
        </div>
    )
}
export default TopHouse