import axios from "axios";

const auth =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzI5ZDZkOTE4YjEwYjIxMzE0ZDcyNzk5ZDc1ZWVmYyIsIm5iZiI6MTcyNDM3MzYzOS44MzYzOTksInN1YiI6IjY2YmI4YzZkYjBmYWRhMzg1MGMzMzEwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EU_dH40JMVAAObYWuHGk6OHSdix8r7k0JGgdvMzfH8s";
const imagemUrlBase = "https://api.themoviedb.org/3/discover/movie";

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  genre: string;
  duration: string;
  rating: string;
}

export const fetchMovies = async (page: number = 2): Promise<Movie[]> => {
  try {
    const response = await axios.get(imagemUrlBase, {
      params: {
        include_adult: false,
        include_video: false,
        language: "pt-BR",
        page: page,
        sort_by: "popularity.desc",
      },
      headers: {
        accept: "application/json",
        Authorization: auth,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("erro ao buscar filmes:", error);
    throw error;
  }
};
