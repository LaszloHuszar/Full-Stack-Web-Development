import React from 'react';
import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {

    const { data } = useGetMoviesQuery();

    return (
        <div>
            <h1>Movies Page</h1>
        </div>
    );
};

export default Movies;