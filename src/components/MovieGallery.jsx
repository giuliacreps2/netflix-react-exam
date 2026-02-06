import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Component } from "react";
import MovieCard from "./MovieCard";

const apiURL = "http://www.omdbapi.com/?apikey=26793b79&s=";

class MovieGallery extends Component {
  state = {
    movies: [],
    searchQuery: this.props.query,
    headerTitle: this.props.header,
  };

  getMovies = () => {
    fetch(apiURL + "&s=" + this.props.query, {})
      .then((Response) => {
        if (Response.ok) {
          console.log("FETCH", Response);
          return Response.json();
        } else {
          throw new Error("Errore nel reupero dei dati");
        }
      })
      .then((data) => {
        console.log("IL MIO ARRAY", data);
        this.setState({ movies: data.Search });
      })
      .catch((Error) => {
        console.log("ERRORE", Error);
      });
  };

  componentDidMount() {
    console.log("sono un componentDidMount");
    this.getMovies();
  }

  render() {
    return (
      <Container className="p-2">
        <Row>
          <h4 className="text-white ps-0 mt-3 mb-2">
            {this.props.header}
            {this.props.query}
          </h4>
          <Row>
            {this.state.movies.slice(0, 6).map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </Row>
        </Row>
      </Container>
    );
  }
}

export default MovieGallery;
