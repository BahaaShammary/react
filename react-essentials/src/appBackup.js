import './App.css';

function Header(props) {
  // console.log(props);
  return (
    <header>
      <h1>{props.name}'s Project</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>Making a really {props.adjective} project over here man.</p>
      <ul style={{textAlign: "left"}}>
        {props.movies.map((movie) => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
          <h3>Copyright {props.year}</h3>
    </footer>
  );
}

const movies = [
  "The Batman",
  "Iron Man",
  "Spiderman"
];

// map over the movies
// movies.map(movie => console.log(movie));

// return a map of objects from the bare list of movies
const movieObjects = movies.map((movie, index) => ({id: index, title: movie}))
// movieObjects.map(movieObject => console.log(movieObject))
function App() {
  return (
    <div className="App">
      <Header name="Bahaa"/>
      <Main adjective="awesome" movies = {movieObjects}/>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  );
}

export default App;
