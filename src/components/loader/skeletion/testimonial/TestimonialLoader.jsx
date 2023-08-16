import React from "react";
import { Skeleton } from "@mui/material";
import { Card, Row, Col } from "reactstrap";

function TestimonialLoader() {
  return (
    <Row className="flex-column justify-content-between pb-3">
      <Col xs={12}>
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ marginX: 3, width: 280, height: 20 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ marginX: 3, width: 280, height: 20 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ marginX: 3, width: 280, height: 20 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ marginX: 3, width: 280, height: 20 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ marginX: 3, width: 280, height: 20 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ marginX: 3, width: 280, height: 20 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ marginX: 3, width: 200, height: 20 }}
        />
      </Col>
      <Col xs={12}>
        <Skeleton
          variant="circular"
          animation="wave"
          sx={{ marginX: "auto", marginBottom: 1, width: 90, height: 90 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ marginX: "auto", width: 210, height: 20 }}
        />
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ marginX: "auto", width: 210, height: 20 }}
        />
      </Col>
    </Row>
  );
}

export default TestimonialLoader;
