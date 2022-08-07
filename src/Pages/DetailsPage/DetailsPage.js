import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { deletePost } from '../../Services/DeletePost';
import { getPost } from '../../Services/GetPost';
import styles from './Details.module.css'
function DetailsPage() {
    const [post, setPost] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState();
    const [isOwner, setIsOwner] = useState();

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPost(id).then(data => {
            setPost(data.house);
            setIsLoggedIn(data.isLoggedIn);
            setIsOwner(data.isOwner);
        });
    }, []);

    const deletePostHandler = async () => {
        const result = await deletePost(id);
        if (result) {
            navigate('/housing-for-rent');
        }
    }
    return (
        <main>
            <section id="deatils-page">
                <div class={styles.wrapper}>
                    <div class={styles.productImg}>
                        <img src={post?.imgUrl} />
                    </div>
                    <div class={styles.productInfo}>
                        <div class={styles.productText}>
                            <div class={styles.productText}>
                                <h1>Name: {post?.name}</h1>
                                <h2>Type: {post?.type}</h2>
                                <h4>Year: {post?.year}</h4>
                                <h4>City: {post?.city}</h4>
                                <p>Description: {post?.propertyDescription}</p>

                                {/* <!-- if there are already tenants of the housing, separate their names with a comma and a space ", "  --> */}
                                {/* <p>People rented this housing: Alex Petkov, Ivan Dobrev</p> */}
                                <p>People rented this housing: {post?.rentedAHome.length === 0 ? <>There are no tenants yet.</> :
                                    <>
                                        {post?.rentedAHome.map(user => {
                                            return user.name
                                        }).join(', ')}
                                    </>}
                                </p>

                                {/* <!-- If not display: --> */}
                                {/* <p>People rented this housing: There are no tenants yet.</p> */}
                            </div>
                        </div>

                        {/* <!-- if there is no registered user, do not display buttons--> */}
                        {isLoggedIn ? <>
                            <div class={styles.productBtn}>
                                {/* <!-- Only for registered user and creator of the housing offer--> */}
                                {isOwner ? <>
                                    <Link to={`/edit/${id}`} class={styles.edit}>Edit</Link>
                                    <p class={styles.remove} onClick={deletePostHandler}>Delete</p></> : <>
                                    {/* <!-- logged in user with available pieces--> */}
                                    <a href="#" class={styles.rentHome}>Rent a home, available {post.availablePieces} housing</a>
                                    <p class={styles.alRentHome}>You have already rent this home</p>

                                    {/* <!-- logged in user with no available pieces--> */}
                                    <p class={styles.noHousing}>No Housing Available!</p>
                                </>}
                            </div>
                        </> : <></>}

                    </div>
                </div>
            </section>
        </main>
    )
}
export default DetailsPage