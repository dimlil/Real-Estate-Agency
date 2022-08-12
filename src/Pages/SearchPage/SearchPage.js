import { useState } from 'react';
import AllHouse from '../../Components/AllHouses/AllHouses';
import { searchQuery } from '../../Services/Search';
import styles from './Search.module.css'
function SearchPage() {
    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState([]);
    const [toggle, setToggle] = useState(false);

    const updatingSearch = (e) => {
        setSearch(e.target.value);
    };

    const formHanldler = async (e) => {
        setPosts([])
        e.preventDefault();
        const result = await searchQuery(search);
        setToggle(true);
        setPosts(result);
    }
    return (
        <main>
            <form className={styles.search} action="" method="">
                <input type="search" name="" placeholder="Search here..." onChange={updatingSearch} />
                <button type="submit" onClick={formHanldler} >Search</button>
            </form>
            <section id={styles.findSection}>
                {toggle ? <>
                    {posts.length > 0 ? (
                        <>
                            {
                                posts.map((post, key) => {
                                    return <AllHouse key={key} id={post._id} name={post.name} imgUrl={post.imgUrl} description={post.propertyDescription} />
                                })}
                        </>
                    ) : (
                        <div className={styles.noDataListing}>
                            <p className={styles.noOffer}>No match was found for the submitted type...</p>
                        </div>
                    )}
                </> : <></>}
            </section>
        </main>

    )
}
export default SearchPage