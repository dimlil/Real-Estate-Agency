import styles from './Search.module.css'
function SearchPage(){
    return(
        <main>
        <form class={styles.search} action="" method="">
            <input type="search" name="" placeholder="Search here..." />
            <button type="submit">Search</button>
        </form>
        <section id={styles.findSection}>

            {/* <!-- If there are any matching matches from the search, show each of them -->

            <div class="card">
                <h3>Real House Luxury Villa</h3>
                <p>Spacious and grand villa, 3 bedroom, 2 bath </p>
                <div class="cta-container"><a href="#" class="det-link">Details</a></div>
                <div class="card_circle"><img src="./static/images/house2.jpg"></div>

            </div> */}

            {/* <!-- If there are no search matches, show: --> */}
            {/* <div class="no-data-listing">
                <p class="no-offer">No match was found for the submitted type...</p>
            </div> */}
        </section>
    </main>

    )
}
export default SearchPage