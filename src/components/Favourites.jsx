import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-4">Favourites</h1>
          {favourites.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
