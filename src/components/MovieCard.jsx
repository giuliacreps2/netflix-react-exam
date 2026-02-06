import Col from "react-bootstrap/Col";

function MovieCard(props) {
  return (
    <>
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" src={props.movie.Poster} alt={props.movie.Title} />
      </Col>
    </>
  );
}
export default MovieCard;
