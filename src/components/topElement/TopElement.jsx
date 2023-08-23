import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import "./style.scss";

function TopElement({ icon, name, content }) {
  return (
    <Row className="justify-content-center">
      <Col xs={12} md={6} className="top_element_hero">
        <div className="semi_circle" />
        <img src={icon} className="img-fluid" />
        <h3 className="text-center">{name}</h3>
        {content && (
          <p className="text_secondary text-center mb-0 pt-4">{content}</p>
        )}
      </Col>
    </Row>
  );
}

export default memo(TopElement);
