import styles from './Edit.module.css'
function EditPage() {
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
                        <input type="text" class={styles.inputField} id="home-name" name="" value="" />
                        <label class={styles.homeName}>Name:</label>
                    </div>
                    <div class={styles.input}>
                        <input type="text" class={styles.inputField} id="type" name="" value="" />
                        <label class={styles.type}>Property Type:</label>
                    </div>
                    <div class={styles.input}>
                        <input type="number" class={styles.inputField} id="year" name="" value="" />
                        <label class={styles.year}>Year Built:</label>
                    </div>
                    <div class={styles.input}>
                        <input type="text" class={styles.inputField} id="city" name="" value="" />
                        <label class={styles.city}>City</label>
                    </div>

                    <div class={styles.input}>
                        <input type="text" class={styles.inputField} id="homeImage" name="" value="" />
                        <label class={styles.homeImage}>Home Image:</label>
                    </div>

                    <div class={styles.input}>
                        <input type="text" class={styles.inputField} id="description" name="" value="" />
                        <label class={styles.description}>Property Description:</label>
                    </div>

                    <div class={styles.input}>
                        <input type="number" class={styles.inputField} id="availablePieces" name="" value="" />
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