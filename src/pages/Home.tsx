import React from "react";
import { AuthProps } from "../interfaces";
import "../styles/style.css";
import { Form1 } from "../components/Forms/AuthForms/style";
import { Logo } from "../components/Logo/Logo";
import { StyledHome } from "./styles";
import { Button, Col, Row } from "react-bootstrap";

const Home: React.FC<AuthProps> = (props) => {
  if (window.innerWidth > 750) {
    return (
      <div id="Home">
        {!props.err && props.check ? (
          <div>
            <br />
            <br />
            <h2>Bem vindo {props.user?.email} ao Portal Geoeste!</h2>
            <h3>
              Portal de Dados Ambientais e Agropecuários da Mesorregião Oeste do
              Paraná
            </h3>
          </div>
        ) : props.err && !props.check ? (
          <div>
            <Logo />
            <div>
              <Form1 className="box" method="post">
                <a href="/login">
                  <button type="button" value="Entrar">
                    Entrar
                  </button>
                </a>
                <a href="/register">
                  <button type="button" value="Cadastrar">
                    Cadastrar
                  </button>
                </a>
              </Form1>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  } else {
    return (
      <StyledHome>
        <Row>
          <Col>
            <div>
              <img
                style={{ width: "100vw", marginTop: "-1.5vw" }}
                src={require("../assets/compass_with_p_blue_no_word.png")}
              />
            </div>
          </Col>
        </Row>
        <div id="Home">
          <div className="apresentation">
            <p>
              Portal de Dados Ambientais e Agropecuários da Mesorregião Oeste do
              Paraná
            </p>
          </div>
          <Row >
            <Col xs="6" className="form">
              <a href="/login">
                <Button variant="primary" size="lg" value="Entrar" className="btn-form">
                  Entrar
                </Button>
              </a>
            </Col>
            <Col xs="6" className="form">
              <a href="/register">
                <Button variant="primary" size="lg" value="Cadastrar">
                  Cadastrar
                </Button>
              </a>
            </Col>
          </Row>
        </div>
      </StyledHome>
    );
  }
};

export default Home;
