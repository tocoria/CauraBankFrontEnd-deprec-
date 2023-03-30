
import styles from "../styles/pages/register.module.scss"

import Layout from "@/components/register-login-layout";
import Container from "@/components/register-login-container.js"

import Link from "next/link"

export default function Register() {

  const sendToConsole = () => {
    console.log("test");
  }
    return (
        <Layout>

            
          <Container>

                <form className={styles.form}>

                  {/* <label htmlFor="name">Name</label>
                  <input type="text" placeholder="Name" name="name"></input>


                  <label htmlFor="username">Username</label>
                  <input type="text" placeholder="Username" name="username"></input>

                  <label htmlFor="password">Password</label>
                  <input type="password" placeholder="Password" name="password"></input>

                  <label htmlFor="email">Email</label>
                  <input type="email" placeholder="Email" name="email"></input>

                  <button type="submit" htmlFor="register">Register</button> */}


                  <input type="text" placeholder="Name" name="name"></input>


                  <input type="text" placeholder="Username" name="username"></input>

                  <input type="password" placeholder="Password" name="password"></input>

                  <input type="email" placeholder="Email" name="email"></input>

                  <button type="submit" htmlFor="register">Register</button>

                  <p>Already have an account? <Link href="/login" className={styles.login}><span>Log in</span></Link></p>                
                  </form>

          </Container>


        </Layout>
    );
}