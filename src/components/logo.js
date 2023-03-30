import Image from "next/image";

import logo from "../../public/images/logo-nofondo.png";

import styles from "../styles/components/logo.module.scss"

export default function Logo() {
    return (
        <h1 className={styles.h1}>
        <Image className={styles.logo} src={logo} alt={"Logo of CauraBank"} />
        CAURABANK
      </h1>

    );
}