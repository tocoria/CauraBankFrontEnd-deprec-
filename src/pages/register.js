import styles from "../styles/pages/register.module.scss";


import {Button, Form, Container, Row, Col} from 'react-bootstrap'

export default function Register() {
  return (
    <main className={styles.main}>
      <Container fluid="md" className={styles.registerContainer}>

        <Row>
          
          <Col className={`mt-3`}>

            <Form>

              <Form.Group className="m-3" controlId="formBasicName">
                <Container>

                <Row>

                  <Col className="ps-0">
                <Form.Label className="text-white">Name</Form.Label>
                <Form.Control type="text" placeholder=" Enter Name" />
                </Col>

                <Col className="pe-0">
                <Form.Label className="text-white">Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last name" />
                </Col>

                </Row>
                </Container>
              </Form.Group>

              <Form.Group className="m-3" controlId="formBasicUserName">
                <Form.Label className="text-white">Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>

              <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>

              <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <div className="d-grid my-5 mx-3">
                <Button className="text-white fw-bold" variant="secondary" type="submit">
                Register
                </Button>
              </div>

            </Form>

          </Col>

        </Row>

      </Container>
    </main>
  );
}
