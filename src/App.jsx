import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <Container fluid={true} className="bg-dark" data-bs-theme="dark">
        <MovieGallery header="Maratona " query="Harry Potter" />
        <MovieGallery header="Tutti gli episodi di " query="Futurama" />
        <MovieGallery header="I tuoi preferiti " query="movie" />
      </Container>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
