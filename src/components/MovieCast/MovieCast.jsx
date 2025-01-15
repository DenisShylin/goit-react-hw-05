import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../services/api";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;
  if (cast.length === 0)
    return <div>We do not have any cast for this movie.</div>;

  return (
    <ul className={styles.cast}>
      {cast.map((actor) => (
        <li key={actor.id} className={styles.actor}>
          <div className={styles.imageWrapper}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={styles.photo}
              />
            ) : (
              <div className={styles.noPhoto}>
                <span>{actor.name.charAt(0)}</span>
              </div>
            )}
          </div>
          <div className={styles.info}>
            <p className={styles.name}>{actor.name}</p>
            <p className={styles.character}>Character: {actor.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
