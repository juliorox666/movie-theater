import React, { useState, useCallback, createContext, useContext } from 'react';
import { MovieDiscoverModel } from 'models/movie.discover';

interface MovieContextProps {
  word: string;
  rate: number | null;
  movies: MovieDiscoverModel[] | undefined;
  updateWord(word: string): void;
  setRateFilter(movies: MovieDiscoverModel[] | undefined, rate: number | null): MovieDiscoverModel[];
  updateMovies(movies: MovieDiscoverModel[] | undefined): void;
}

const MovieContext = createContext<MovieContextProps>({} as MovieContextProps);

// eslint-disable-next-line react/prop-types
const MovieProvider: React.FC = ({ children }) => {
  const [word, setWord] = useState(() => {
    return '';
  });

  const [rate, setRate] = useState(() => {
    return 0;
  });

  const [movies, setMovies] = useState<MovieDiscoverModel[] | undefined>(() => {
    return undefined;
  });

  const updateWord = useCallback(
    (word: string | null) => {
      setWord(word || '');
    },
    [word],
  );

  const setRateFilter = useCallback(
    (newMovies, rate) => {
      setRate(rate);

      if (rate && newMovies && newMovies.length > 0) {
        const maxValue = rate * 2;
        const minValue = maxValue - 2;
        return newMovies.filter(
          (movie: MovieDiscoverModel) =>
            movie.vote_average != null && movie.vote_average >= minValue && movie.vote_average <= maxValue,
        );
      }
      return newMovies;
    },
    [rate],
  );

  const updateMovies = useCallback(
    (movies: MovieDiscoverModel[]) => {
      setMovies(movies);
    },
    [movies],
  );

  return (
    <MovieContext.Provider value={{ word, rate, movies, updateWord, setRateFilter, updateMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

function useMovieContext(): MovieContextProps {
  const context = useContext(MovieContext);

  return context;
}

export { MovieProvider, useMovieContext };
