import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row
      className="mx-0 mt-3 p-3 justify-content-between"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={4}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      {data.title && (
        <Col xs={6}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      )}
      <Col xs={2}>
        <Button
          variant="success"
          // onClick={() => dispatch({ type: "SELECT_COMPANY", payload: data })}
          onClick={() =>
            dispatch({
              type: "ADD_FAVOURITES",
              payload: { company_name: data.company_name },
            })
          }
        >
          Add to favourites ⭐
        </Button>
      </Col>
    </Row>
  );
};
export default Job;
