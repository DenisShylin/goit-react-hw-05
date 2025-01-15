const BASE_URL = "https://api.themoviedb.org/3";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDY1YzBkODU2ZTFkMzYzODFiYjZjNDNmM2Y5ZTY5YyIsInN1YiI6IjY1YmE0YzIyNmU5MjQ0MDE2M2M4ZGVkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7uKFgNE9HPeQM-EBVUy6N5J2cTxssXJhKPwWAqHEUSw",
  },
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    );
    const data = await response.json();
    console.log("API Response:", data);
    return data.results;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch trending movies: " + error.message);
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error("Failed to search movies: " + error.message);
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      BASE_URL + "/movie/" + movieId + "?language=en-US",
      options
    );
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch movie details: " + error.message);
  }
};

export const getMovieCredits = async (movieId) => {
  try {
    const response = await fetch(
      BASE_URL + "/movie/" + movieId + "/credits?language=en-US",
      options
    );
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch movie credits: " + error.message);
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await fetch(
      BASE_URL + "/movie/" + movieId + "/reviews?language=en-US&page=1",
      options
    );
    return await response.json();
  } catch (error) {
    throw new Error("Failed to fetch movie reviews: " + error.message);
  }
};
