import styles from "../styles/components/RegisterLoginContainer.module.scss"

export default function RegisterLoginContainer({children}) {
    return (

        <div className={styles.boxContainer}>

            {children}

        </div>

    )
}