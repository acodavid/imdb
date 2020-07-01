import React from 'react'
import PropTypes from 'prop-types'
import Movie from './Movie'

const Movies = props => {

    if (props.flag) {
        props.movies.sort(function (a, b) {
            return b.vote_average - a.vote_average;
        })
    }


    return (
        <div className="movies-list">
            {props.movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
    flag: PropTypes.bool.isRequired
}

export default Movies;
