import Layout from "../components/register-login-layout";

import Container from "@/components/register-login-container";

import styles from "../styles/pages/login.module.scss"

import Link from "next/link"

export default function Login() {
    return (
        <Layout>

            
          <Container>

                <form className={styles.form}>


                <input type="text" placeholder="Username" name="username"></input>

                <input type="password" placeholder="Password" name="password"></input>

                <button className={styles.button}>Log in</button>

                <p>You don&apos;t have an account? <Link href="/register" className={styles.register}>Sign in.</Link></p>

                </form>

          </Container>


        </Layout>
    );
}