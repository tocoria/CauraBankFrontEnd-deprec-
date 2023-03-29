import styles from "../styles/Index.module.scss";

import Image from "next/image";
import logo from "../../public/images/logo-nofondo.png";
import logo_icon from "../../public/logo.ico";

import Link from "next/link";

// Google Font//
// import {Noto_Sans_Zanabazar_Square} from '@next/font/google'
// const noto = Noto_Sans_Zanabazar_Square({weight: '400', subsets:['latin']})

import { Noto_Sans } from "@next/font/google";
const notosans = Noto_Sans({
  weight: ["100", "200", "300", "400", "800"],
  subsets: ["latin"],
});

export default function Index() {
  return (
    <div className={styles.main}>
      <section className={[styles.container, notosans.className].join(" ")}>
        <h1 className={styles.h1}>
          <Image className={styles.logo} src={logo} alt={"Logo of CauraBank"} />
          CAURABANK
        </h1>
        <h2 className={styles.h2}>
          Deposit, withdraw & transfer.<br></br> The only bank that works FOR you.
        </h2>
        <h3 className={styles.h3}>
          Get a membership and start using our services. Operations using our
          platform give you points you can exchange for gifts on our premium online store.
        </h3>
        <h3 className={styles.start}>
          <Link href={"/register"}>
          <button className={styles.button}>Get Started </button>
          </Link>
          
          or <Link href={"/login"} className={styles.login}> <span>Log in</span> </Link>
        </h3>
      </section>
      <section className={styles.imageContainer}>

      </section>
    </div>
  );
}
