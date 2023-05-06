import styles from "../styles/pages/index.module.scss";

import { Container, Row, Col, Button } from "react-bootstrap";

import Link from "next/link";

export default function Index() {
  return (
    <main className={styles.main}>
      <Container>
        <Row className="justify-content-center">
          <Col className={`text-center col-12 mt-5 ${styles.h2Container}`}>
            <h2
              className={`my-5 text-white display-1 fw-bold ${styles.slogan}`}
            >
              Deposit, withdraw & transfer. The only bank that works FOR you.
            </h2>
            <h3 className={`text-white fw-light mb-5 ${styles.phrase}`}>
              Get a membership and start using our services. Operate using our
              platform and earn points you can use on our premium online store.{" "}
            </h3>
          </Col>
        </Row>

        <Row
          className={`d-flex justify-content-center h-100 mt-5 ${styles.btnContainer}`}
        >
          <Col className="col-3 align-self-center text-center" xs={12} lg={4}>
            <Link className={styles.registerLink} href="/register">
              <div className="d-grid">
                <Button
                  className="m-4 text-secondary fw-bold"
                  variant="white"
                  size="lg"
                >
                  Get Started
                </Button>
              </div>
            </Link>
          </Col>

          <Col className="col-3 align-self-center text-center" xs={12} lg={4}>

            <Link className={styles.loginLink} href="/login">

              <div className={`d-grid`}>
                <Button className={`m-4 fw-bold ${styles.loginButton}`} variant="outline-white" size="lg">

                  Login

                </Button>
              </div>

            </Link>

          </Col>
        </Row>
      </Container>
    </main>
  );
}
