
import styles from "../styles/pages/login.module.scss";
import {Button, Form, Container, Row, Col} from 'react-bootstrap'

import Link from "next/link"

export default function Login() {
      
   return (


<main className={styles.main}>
      <Container fluid="md">

        <Row className={styles.loginContainer}>
          
          <Col lg={7}>

            <Form> 

              <Form.Group className="my-5 mx-3" controlId="formBasicUserName">
                <Form.Label className="text-white">Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group className="my-5 mx-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>

              <div className="d-grid my-6 mx-3">
                <Button className="text-white fw-bold" variant="secondary" type="submit">
                Log In
                </Button>
              </div>

            </Form>

          </Col>

        </Row>

      </Container>
    </main>






   )
}