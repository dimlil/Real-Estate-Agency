import house5 from '../../Assets/5.jpg'
import house2 from '../../Assets/house2.jpg'
import styles from './House.module.css'
function HouseForRent(){
    return(
        <main>

            <section id={styles.allListings}>
                <h1>Apartments for recents</h1>

                <div class={styles.card}>
                    <h3>Real House Luxury Villa</h3>
                    <p>Spacious and grand villa, 3 bedroom, 2 bath.</p>

                    <div class={styles.ctaContainer}><a href="#" class={styles.detLink}>Details</a></div>
                    <div class={styles.cardCircle}><img src={house5} /></div>

                </div>
                <div class={styles.card}>
                    <h3>House Take Away</h3>
                    <p>Nested among stunning Victorians and located.</p>

                    <div class={styles.ctaContainer}><a href="#" class={styles.detLink}>Details</a></div>
                    <div class={styles.cardCircle}><img src={house2} /></div>

                </div>

                <div class={styles.noDataListing}>
                    <p class={styles.noOffer}>There are no housing offers found...</p>
                </div>

            </section>
        </main>
    )
}
export default HouseForRent