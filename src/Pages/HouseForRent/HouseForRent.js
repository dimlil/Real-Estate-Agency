import house5 from '../../Assets/5.jpg'
import house2 from '../../Assets/house2.jpg'
import AllHouse from '../../Components/AllHouses/AllHouses.js'
import styles from './House.module.css'
function HouseForRent() {
    return (
        <main>

            <section id={styles.allListings}>
                <h1>Apartments for recents</h1>

                <AllHouse />

                <div class={styles.noDataListing}>
                    <p class={styles.noOffer}>There are no housing offers found...</p>
                </div>

            </section>
        </main>
    )
}
export default HouseForRent