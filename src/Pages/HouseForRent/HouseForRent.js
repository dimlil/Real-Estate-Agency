import { useEffect, useState } from 'react';
import house5 from '../../Assets/5.jpg'
import house2 from '../../Assets/house2.jpg'
import AllHouse from '../../Components/AllHouses/AllHouses.js'
import { getAllHouses } from '../../Services/GetAllHouses';
import styles from './House.module.css'
function HouseForRent() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllHouses().then(data => { setPosts(data) });
    }, []);
    return (
        <main>

            <section id={styles.allListings}>
                <h1>Apartments for recents</h1>

                {posts.length > 0 ? (
                    <>
                        {
                            posts.map((post, key) => {
                                return <AllHouse key={key} id={post._id} name={post.name} imgUrl={post.imgUrl}  description={post.propertyDescription} />
                            })}
                    </>
                ) : (
                    <div class={styles.noDataListing}>
                        <p class={styles.noOffer}>There are no housing offers found...</p>
                    </div>
                )}

            </section>
        </main>
    )
}
export default HouseForRent