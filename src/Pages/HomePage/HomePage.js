import house5 from '../../Assets/5.jpg'
import style from './Home.module.css'
function HomePage() {
    return (
        <main>
            <section id="home-page" className={style.backgroundImage}>
                <div className={style.homeContainer}>

                    <div className={style.info}>
                        <h1>Discover Your Perfect Home</h1>
                        <h2>The Best Real Estate Deals</h2>
                    </div>

                </div>
            </section>

            <section id={style.topHouses}>
                <h1>Top Houses</h1>
                <div className={style.houses}>


                    <div className={style.cardHome}>
                        <h2>Real House Luxury Villa</h2>
                        <div className={style.cardImage}><img src={house5} /></div>
                        <div className={style.ctaContainer}>
                            <a href="#" className={style.detailsLink}>Details</a>
                        </div>

                    </div>

                    <div className={style.noDataContainer}>
                        <p className={style.noData}>There are no housing offers found...</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default HomePage