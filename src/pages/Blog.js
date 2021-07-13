import React from 'react';
import { Container, Row, Col, Media, ListGroup, Card } from 'react-bootstrap';

export default function Blog() {
  return (
    <Container>
      <Row>
        <Col md="9">
          <Media className="m-5">
            <img
              className="mr-3"
              width={150}
              height={150}
              src="data:image/png;base64,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"
            ></img>
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </Media.Body>
          </Media>
          <Media className="m-5">
            <img
              className="mr-3"
              width={150}
              height={150}
              src="data:image/png;base64,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"
            ></img>
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </Media.Body>
          </Media>
          <Media className="m-5">
            <img
              className="mr-3"
              width={150}
              height={150}
              src="data:image/png;base64,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"
            ></img>
            <Media.Body>
              <h5>Blog post</h5>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio.
              </p>
            </Media.Body>
          </Media>
        </Col>
        <Col md="3">
          <h5 className="text-center mt-5">Categories</h5>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>HTML/CSS</ListGroup.Item>
              <ListGroup.Item>JS</ListGroup.Item>
              <ListGroup.Item>PYTHON</ListGroup.Item>
              <ListGroup.Item>C++</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card className="mt-3" bg="light">
            <Card.Body>
              <Card.Title>Side widget</Card.Title>
              <Card.Text>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}