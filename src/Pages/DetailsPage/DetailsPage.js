import styles from './Details.module.css'
function DetailsPage(){
    return(
        <main>
            <section id="deatils-page">
                <div class={styles.wrapper}>
                    <div class={styles.productImg}>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/314234927.jpg?k=21291418450e2c1802e02864677b7cf811321797b1d36aaa55e1019133f82698&o=&hp=1" />
                    </div>
                    <div class={styles.productInfo}>
                        <div class={styles.productText}>
                            <div class={styles.productText}>
                                <h1>Name: Sunhouse C21</h1>
                                <h2>Type: Apartment</h2>
                                <h4>Year: 2021</h4>
                                <h4>City: Sofia</h4>
                                <p>Description: Spacious dining room, remodel kitchen and wonderful deeded walk-out deck.</p>

                                {/* <!-- if there are already tenants of the housing, separate their names with a comma and a space ", "  --> */}
                                <p>People rented this housing: Alex Petkov, Ivan Dobrev</p>

                                {/* <!-- If not display: --> */}
                                <p>People rented this housing: There are no tenants yet.</p>
                            </div>
                        </div>

                        {/* <!-- if there is no registered user, do not display buttons--> */}
                        <div class={styles.productBtn}>
                            {/* <!-- Only for registered user and creator of the housing offer--> */}
                            <a href="#" class={styles.edit}>Edit</a>
                            <a href="#" class={styles.remove}>Delete</a>
                            
                            {/* <!-- logged in user with available pieces--> */}
                            <a href="#" class={styles.rentHome}>Rent a home, available 2 housing</a>
                            <p class={styles.alRentHome}>You have already rent this home</p>

                            {/* <!-- logged in user with no available pieces--> */}
                            <p class={styles.noHousing}>No Housing Available!</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default DetailsPage