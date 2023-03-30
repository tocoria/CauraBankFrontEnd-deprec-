import TesteandoLogo from "../components/logo";

import styles from "../styles/components/RegisterLoginLayout.module.scss"

export default function RegisterLoginLayout({children}) {
    return (
      <div className={styles.layout} >
        
        <TesteandoLogo />

        {children}

      </div>
    );
}