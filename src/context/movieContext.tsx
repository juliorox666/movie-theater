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

const appname = process.env.REACT_APP_NAME;

const MovieContext = createContext<MovieContextProps>({} as MovieContextProps);

// eslint-disable-next-line react/prop-types
const MovieProvider: React.FC = ({ children }) => {
  const [word, setWord] = useState(() => {
    // const localWord = localStorage.getItem(`${appname}:word`);
    // try {
    //   if (localWord) {
    //     return JSON.parse(localWord);
    //   }
    // } catch (error) {
    //   localStorage.removeItem(`${appname}:word`);
    // }

    return '';
  });

  const [rate, setRate] = useState(() => {
    // const localRate = localStorage.getItem(`${appname}:rate`);
    // try {
    //   if (localRate) {
    //     return JSON.parse(localRate);
    //   }
    // } catch (error) {
    //   localStorage.removeItem(`${appname}:rate`);
    // }

    return 0;
  });

  const [movies, setMovies] = useState<MovieDiscoverModel[] | undefined>(() => {
    // const localMovies = localStorage.getItem(`${appname}:movies`);
    // try {
    //   if (localMovies) {
    //     return JSON.parse(localMovies);
    //   }
    // } catch (error) {
    //   localStorage.removeItem(`${appname}:movies`);
    // }

    return undefined;
  });

  const updateWord = useCallback(
    (word: string | null) => {
      setWord(word || '');

      // if (word) {
      //   localStorage.setItem(`${appname}:word`, JSON.stringify(word));
      // } else {
      //   localStorage.removeItem(`${appname}:word`);
      // }
    },
    [word],
  );

  const setRateFilter = useCallback(
    (newMovies, rate) => {
      setRate(rate);

      // if (rate) {
      //   localStorage.setItem(`${appname}:rate`, JSON.stringify(rate));
      // } else {
      //   localStorage.removeItem(`${appname}:rate`);
      // }

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

      // if (movies) {
      //   localStorage.setItem(`${appname}:movies`, JSON.stringify(movies));
      // } else {
      //   localStorage.removeItem(`${appname}:movies`);
      // }
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
