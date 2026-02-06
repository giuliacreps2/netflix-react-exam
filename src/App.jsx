import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";

function App() {
  return (
    <>
      <MyNav></MyNav>
      <MovieGallery header="Maratona " query="Harry Potter" />
      <MovieGallery header="Tutti gli episodi di " query="Futurama" />
      <MovieGallery header="I tuoi preferiti " query="movie" />
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
