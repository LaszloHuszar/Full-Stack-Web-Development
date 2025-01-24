import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = '0893d1f2ea66c04531b43d62a7bf2d50';
const page = 1;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3'}), endpoints: (builder) => ({
        // Get Genres
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`
        }),
       
        // Get Movies By Type
        getMovies: builder.query({
            query: () => `/movie/popular?page=${page}&api_key=${tmdbApiKey}`
        })
    })
});

export const {useGetMoviesQuery, useGetGenresQuery } = tmdbApi;