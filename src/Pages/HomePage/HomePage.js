import house5 from '../../Assets/5.jpg'
import House from '../../Components/House/House'
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

                    <House title="Real House Luxury Villa" imgUrl="https://cf.bstatic.com/xdata/images/hotel/max1280x900/314234927.jpg?k=21291418450e2c1802e02864677b7cf811321797b1d36aaa55e1019133f82698&o=&hp=1"/>

                    <div className={style.noDataContainer}>
                        <p className={style.noData}>There are no housing offers found...</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default HomePage