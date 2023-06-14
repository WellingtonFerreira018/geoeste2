import { Col, Row } from "react-bootstrap";
import { Legend, Li } from "./style";

export function LegendMobile({ info: legend, atr: atr_n, reference: ref }) {
  return (
    <Legend>
      <Row>
        <Col xs={12}>
          <p className="title">{atr_n}</p>
          <Row>
            <ul className="values">
              {legend?.map((repo) => {
                return (
                    <Li color={repo.color} key={repo.atr}>
                      <button className="btn-mob"> {repo.atr} </button>
                    </Li>

                );
              })}
            </ul>
          </Row>
          <p className="fonts">SRC: {ref?.src}</p>
          <p className="fonts">FONTES: {ref?.fontes}</p>
          <p className="fonts">ELABORAÇÃO: {ref?.elaboracao}</p>
        </Col>
      </Row>
    </Legend>
  );
}
