import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import styles from '../styles/components/header.module.scss'

import Link from 'next/link'

export default function Header({prueba}) {

    return(

 <Navbar className={styles.container}>
        <Container fluid>
          <Navbar.Brand className='d-flex align-items-center' fluid>
            <img
              alt="caurabank logo"
              src='images/logo500.png'
              className={`${styles.logo}`}
            />
            <h1 className='text-white fw-bold'><Link className={styles.logoLink} href="/" >CAURABANK</Link></h1>
          </Navbar.Brand>
        </Container>
      </Navbar>


    )



}