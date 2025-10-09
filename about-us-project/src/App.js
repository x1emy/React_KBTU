import About from "./components/aboutus";
import MoviesList from "./components/movielist";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      
      <div>
        <h1 className="text-center mt-5">Studio Ghibli Movies</h1>
        <MoviesList />
      </div>
    </div>
  );
}

export default App;
