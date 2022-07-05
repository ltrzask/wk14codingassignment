import './App.css';
import React from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import { data } from './components/MovieData'
import MovieList from './components/MovieList';
import background from './images/background.jpg'


const useState = React.useState

function App() {
  const [movies, setMovies] = useState(data);

  const addReview = (id, rating, comment) => {
    const movie = movies.find(movie => movie.id === id);
      movie.reviews.push(
        {
          user: `user$(Math.floor(Math.random() * 1000) + 100)`,
          stars: rating,
          comment: comment
        }
      );
    setMovies([...movies, movie]);
  }


  return (
    <div className="App">
      <div style={{backgroundImage: `url(${background})`}}>
        <Header />
        <h2 className='mt-4 fs-1'>Rate and Review the Newest Movies!</h2>
        <MovieList movies={movies} addReview={addReview} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
