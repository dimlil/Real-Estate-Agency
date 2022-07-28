import styles from './Create.module.css'
function CreatePage() {
    return(
        <main>
            <section id="create-page">
                <div className={styles.createContainer}>
                    <div className={styles.boxImage}></div>

                    <h2 className={styles.boxHeading}> Add new home</h2>


                    <form className={styles.form} action="" method="">
                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} id="home-name" placeholder="Real House Luxury Villa..." name="" value="" />
                            <label className={styles.homeName}>Name:</label>
                        </div>
                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} id="type" placeholder="Villa..." name="" value="" />
                            <label className={styles.type}>Property Type:</label>
                        </div>
                        <div className={styles.input}>
                            <input type="number" className={styles.inputField} id="year" placeholder="2018..." name="" value="" />
                            <label className={styles.year}>Year Built:</label>
                        </div>
                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} id="city" placeholder="Sofia..." name="" value="" />
                            <label className={styles.city}>City</label>
                        </div>

                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} id="homeImage" placeholder="Image..." name="" value="" />
                            <label className={styles.homeImage}>Home Image:</label>
                        </div>

                        <div className={styles.input}>
                            <input type="text" className={styles.inputField} id="description" placeholder="Description..." name="" value="" />
                            <label className={styles.description}>Property Description:</label>
                        </div>

                        <div className={styles.input}>
                            <input type="number" className={styles.inputField} id="availablePieces" placeholder="1" name="" value="" />
                            <label className={styles.availablePieces}>Available pieces:</label>
                        </div>

                        <div className={styles.input}>
                            <button className={styles.createButton}>Add</button>
                        </div>


                    </form>
                </div>
            </section>

        </main>
    )
}
export default CreatePage