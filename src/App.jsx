import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";
import TitleHome from "./components/TitleHome";
import { Component } from "react";
import { Container } from "react-bootstrap";

class App extends Component {
  state = {
    wordQuery: "Avengers",
  };

  handleword = (newQuery) => {
    console.log("Ricerca ricevuta:", newQuery);
    this.setState({ wordQuery: newQuery });
  };

  render() {
    return (
      <>
        <MyNav onSearch={this.handleword} />
        <Container fluid={true} className="bg-dark" data-bs-theme="dark">
          <TitleHome></TitleHome>
          <MovieGallery query={this.state.wordQuery} header="Ricerca: " />
          <MovieGallery query="Harry Potter" header="Maratona " />
          <MovieGallery query="Futurama" header="Cartoni " />
        </Container>
        <MyFooter></MyFooter>
      </>
    );
  }
}

export default App;
