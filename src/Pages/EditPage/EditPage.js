import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost } from '../../Services/GetPost';
import styles from './Edit.module.css'
function EditPage() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');
    const [city, setCity] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [propertyDesc, setPropertyDesc] = useState('');
    const [availablePieces, setAvailablePieces] = useState('');

    const { id } = useParams();

    useEffect(() => {
        getPost(id).then(data => {
            setName(data.house.name);
            setType(data.house.type);
            setYear(data.house.year);
            setCity(data.house.city);
            setImgUrl(data.house.imgUrl);
            setPropertyDesc(data.house.propertyDescription);
            setAvailablePieces(data.house.availablePieces);
        })
        return () => {
            // cleanup
        };
    }, []);

    const updatingName = (e) => {
        setName(e.target.value);
    };

    const updatingType = (e) => {
        setType(e.target.value);
    };

    const updatingYear = (e) => {
        setYear(e.target.value);
    };

    const updatingCity = (e) => {
        setCity(e.target.value);
    };

    const updatingImgUrl = (e) => {
        setImgUrl(e.target.value);
    };

    const updatingPropertyDesc = (e) => {
        setPropertyDesc(e.target.value);
    };

    const updatingAvailablePieces = (e) => {
        setAvailablePieces(e.target.value);
    };

    const formHanldler = async (e) => {
        e.preventDefault();
        // const result = await create(name, type, year, city, imgUrl, propertyDesc, availablePieces);
        // if (result.status===200) {
        //     navigate('/')
        // }
    }
    return (
        <section id="edit-page">
            <div class={styles.editContainer}>
                <div class={styles.boxImage}>

                </div>
                <h2 class={styles.boxHeading}>
                    Edit Home
                </h2>

                <form class={styles.form} action="" method="">
                    <div class={styles.input}>
                        <input type="text" class={styles.inputField} id="home-name" name="" value={name} onChange={updatingName} />
                        <label class={styles.homeName}>Name:</label>
                    </div>
                    <div class={styles.input}>
                        <input type="text" class={styles.inputField} id="type" name="" value={type} onChange={updatingType} />
                        <label class={styles.type}>Property Type:</label>
                    </div>
                    <div class={styles.input}>
                        <input type="number" class={styles.inputField} id="year" name="" value={year} onChange={updatingYear} />
                        <label class={styles.year}>Year Built:</label>
                    </div>
                    <div class={styles.input}>
                        <input type="text" class={styles.inputField} id="city" name="" value={city} onChange={updatingCity} />
                        <label class={styles.city}>City</label>
                    </div>

                    <div class={styles.input}>
                        <input type="text" class={styles.inputField} id="homeImage" name="" value={imgUrl} onChange={updatingImgUrl} />
                        <label class={styles.homeImage}>Home Image:</label>
                    </div>

                    <div class={styles.input}>
                        <input type="text" class={styles.inputField} id="description" name="" value={propertyDesc} onChange={updatingPropertyDesc} />
                        <label class={styles.description}>Property Description:</label>
                    </div>

                    <div class={styles.input}>
                        <input type="number" class={styles.inputField} id="availablePieces" name="" value={availablePieces} onChange={updatingAvailablePieces} />
                        <label class={styles.availablePieces}>Available pieces:</label>
                    </div>

                    <div class={styles.createAction}>
                        <button class={styles.createButton}>Edit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default EditPage