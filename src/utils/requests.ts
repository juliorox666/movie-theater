import { MovieDiscoverModel, ResponseFindMovieModel, ResponseMovieDiscoverModel } from 'models/movie.discover';

import { api, apiKey } from 'services/api';

interface SearchMoviesProps {
  word: string;
}

interface FindMovieProps {
  id: string | number;
}

export const searchMovies = async ({ word }: SearchMoviesProps): Promise<MovieDiscoverModel[]> => {
  try {
    const response = await api.get<ResponseMovieDiscoverModel>(`/search/movie?api_key=${apiKey}&query=${word}&page=1`);
    const {
      data: { results },
    } = response;

    return results || [];
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllMovies = async (): Promise<MovieDiscoverModel[]> => {
  try {
    const response = await api.get<ResponseMovieDiscoverModel>(
      `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    );
    const {
      data: { results },
    } = response;

    return results || [];
  } catch (error) {
    throw new Error(error);
  }
};

export const findMovie = async ({ id }: FindMovieProps): Promise<ResponseFindMovieModel> => {
  try {
    const response = await api.get<ResponseFindMovieModel>(`/movie/${id}?api_key=${apiKey}`);
    const { data } = response;

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
