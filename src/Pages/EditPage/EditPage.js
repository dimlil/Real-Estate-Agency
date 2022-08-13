import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editPost } from '../../Services/EditPost';
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
    const [errors, setErrors] = useState('');

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
    });

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
        setErrors();
        const result = await editPost(id, name, type, year, city, imgUrl, propertyDesc, availablePieces);
        if (result.status===200) {
            navigate(`/house/${id}`)
        }
        else{
            setErrors(result.data);
        }
    }
    return (
        <section id="edit-page">
            {errors ? <div>
                <div className="errorContainer">
                    <p>{errors}</p>
                </div>
            </div> : <></>}
            <div className={styles.editContainer}>
                <div className={styles.boxImage}>

                </div>
                <h2 className={styles.boxHeading}>
                    Edit Home
                </h2>

                <form className={styles.form} action="" method="">
                    <div className={styles.input}>
                        <input type="text" className={styles.inputField} id="home-name" name="" value={name} onChange={updatingName} />
                        <label className={styles.homeName}>Name:</label>
                    </div>
                    <div className={styles.input}>
                        <input type="text" className={styles.inputField} id="type" name="" value={type} onChange={updatingType} />
                        <label className={styles.type}>Property Type:</label>
                    </div>
                    <div className={styles.input}>
                        <input type="number" className={styles.inputField} id="year" name="" value={year} onChange={updatingYear} />
                        <label className={styles.year}>Year Built:</label>
                    </div>
                    <div className={styles.input}>
                        <input type="text" className={styles.inputField} id="city" name="" value={city} onChange={updatingCity} />
                        <label className={styles.city}>City</label>
                    </div>

                    <div className={styles.input}>
                        <input type="text" className={styles.inputField} id="homeImage" name="" value={imgUrl} onChange={updatingImgUrl} />
                        <label className={styles.homeImage}>Home Image:</label>
                    </div>

                    <div className={styles.input}>
                        <input type="text" className={styles.inputField} id="description" name="" value={propertyDesc} onChange={updatingPropertyDesc} />
                        <label className={styles.description}>Property Description:</label>
                    </div>

                    <div className={styles.input}>
                        <input type="number" className={styles.inputField} id="availablePieces" name="" value={availablePieces} onChange={updatingAvailablePieces} />
                        <label className={styles.availablePieces}>Available pieces:</label>
                    </div>

                    <div className={styles.createAction}>
                        <button className={styles.createButton} onClick={formHanldler}>Edit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default EditPage