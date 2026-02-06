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
      <Container>
        <Row>
          <h4>
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

/* search: {
      Title: this.props.title,
      Year: this.props.year,
      imdbID: this.props.id,
      Type: this.props.genre,
      Poster: this.props.img,
    },
  };
  
  getMovies = () => {
    fetch(apiURL + this.props.id, {})
      .then((Response) => {
        if (Response.ok) {
          return Response.json();
        } else {
          throw new Error("Errore nel reupero dei dati");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ ricerche: data });
      })
      .catch((Error) => {
        console.log("ERRORE", Error);
      });
  };

  handleChange = () => {
    this.getMovies();
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <Col className="mb-2 text-center px-1">
        <img className="img-fluid" immagine={this.props.img} alt={this.props.title} />
      </Col>
    );
  }
}

export default MovieGallery;*/

/*
 <h4>Trending Now</h4>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4"
        >
          <div class="col mb-2 text-center px-1">
            <img class="img-fluid" src="assets/1.png" alt="movie picture" />
          </div>
          <div class="col mb-2 text-center px-1">
            <img class="img-fluid" src="assets/2.png" alt="movie picture" />
          </div>
          <div class="col mb-2 text-center px-1">
            <img class="img-fluid" src="assets/3.png" alt="movie picture" />
          </div>
          <div class="col mb-2 text-center px-1">
            <img class="img-fluid" src="assets/4.png" alt="movie picture" />
          </div>
          <div class="col mb-2 text-center px-1">
            <img class="img-fluid" src="assets/5.png" alt="movie picture" />
          </div>
          <div class="col mb-2 text-center px-1">
            <img class="img-fluid" src="assets/6.png" alt="movie picture" />
          </div>
        </div>*/
