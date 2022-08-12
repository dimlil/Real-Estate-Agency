import { useEffect, useState } from 'react';
import TopHouse from '../../Components/TopHouse/TopHouse.js'
import { getTopHouses } from '../../Services/GetTopHouses'
import style from './Home.module.css'
function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getTopHouses().then(data => { setPosts(data) });
    }, []);

    console.log(posts);

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

                    {posts.length > 0 ? (
                        <>
                            {
                                posts.map((post, key) => {
                                    return <TopHouse key={key} id={post._id} title={post.name} imgUrl={post.imgUrl} />
                                })}
                        </>
                    ) : (
                        <div className={style.noDataContainer}>
                            <p className={style.noData}>There are no housing offers found...</p>
                        </div>)
                    }
                </div>
            </section>
        </main>
    )
}
export default HomePage