import { useState, useEffect } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const data = await fetchTrendingMovies();
        if (data) {
          setMovies(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Trending today</h1>
      {error && <div className={styles.error}>Error: {error}</div>}
      {isLoading && <div className={styles.loading}>Loading...</div>}
      {!isLoading && !error && movies && movies.length > 0 ? (
        <MovieList movies={movies} />
      ) : (
        !isLoading && !error && <div>No movies found</div>
      )}
    </main>
  );
};

export default HomePage;
