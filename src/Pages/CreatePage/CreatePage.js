import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create } from '../../Services/Create';
import styles from './Create.module.css'
function CreatePage() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [year, setYear] = useState('');
    const [city, setCity] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [propertyDesc, setPropertyDesc] = useState('');
    const [availablePieces, setAvailablePieces] = useState('');

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
        const result = await create(name, type, year, city, imgUrl, propertyDesc, availablePieces);
        if (result.status===200) {
            navigate('/')
        }
    }
    return(
        <main>
            <section id="create-page">
                <div className={styles.createContainer}>
                    <div className={styles.boxImage}></div>

                    <h2 className={styles.boxHeading}> Add new home</h2>


                    <form className={styles.form} action="" method="">
                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} id="home-name" placeholder="Real House Luxury Villa..." name="" onChange={updatingName} />
                            <label className={styles.homeName}>Name:</label>
                        </div>
                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} id="type" placeholder="Villa..." name="" onChange={updatingType} />
                            <label className={styles.type}>Property Type:</label>
                        </div>
                        <div className={styles.input}>
                            <input type="number" className={styles.inputField} id="year" placeholder="2018..." name="" onChange={updatingYear} />
                            <label className={styles.year}>Year Built:</label>
                        </div>
                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} id="city" placeholder="Sofia..." name="" onChange={updatingCity} />
                            <label className={styles.city}>City</label>
                        </div>

                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} id="homeImage" placeholder="Image..." name="" onChange={updatingImgUrl} />
                            <label className={styles.homeImage}>Home Image:</label>
                        </div>

                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} id="description" placeholder="Description..." name="" onChange={updatingPropertyDesc} />
                            <label className={styles.description}>Property Description:</label>
                        </div>

                        <div className={styles.input}>
                            <input type="number" className={styles.inputField} id="availablePieces" placeholder="1" name="" onChange={updatingAvailablePieces} />
                            <label className={styles.availablePieces}>Available pieces:</label>
                        </div>

                        <div className={styles.input}>
                            <button className={styles.createButton} onClick={formHanldler}>Add</button>
                        </div>


                    </form>
                </div>
            </section>

        </main>
    )
}
export default CreatePage