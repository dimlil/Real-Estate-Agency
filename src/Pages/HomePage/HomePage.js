import house5 from '../../Assets/5.jpg'
import style from './Home.module.css'
function HomePage() {
    return (
        <main>
            <section id="home-page" class={style.backgroundImage}>
                <div class={style.homeContainer}>

                    <div class={style.info}>
                        <h1>Discover Your Perfect Home</h1>
                        <h2>The Best Real Estate Deals</h2>
                    </div>

                </div>
            </section>

            <section id={style.topHouses}>
                <h1>Top Houses</h1>
                <div class={style.houses}>


                    <div class={style.cardHome}>
                        <h2>Real House Luxury Villa</h2>
                        <div class={style.cardImage}><img src={house5} /></div>
                        <div class={style.ctaContainer}>
                            <a href="#" class={style.detailsLink}>Details</a>
                        </div>

                    </div>

                    <div class="card-home">
                        <h2>House Take Away</h2>
                        <div class="cta-container"><a href="#" class="details-link">Details</a></div>
                        <div class="card_image"><img src="./static/images/house2.jpg" /></div>

                    </div>

                    <div class="card-home">
                        <h2>Sunhouse C21</h2>
                        <div class="cta-container"><a href="#" class="details-link">Details</a></div>
                        <div class="card_image"><img src="./static/images/apartments.jpg" /></div>

                    </div>

                    <div class={style.noDataContainer}>
                        <p class={style.noData}>There are no housing offers found...</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default HomePage