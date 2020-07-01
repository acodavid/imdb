import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Movie = props => {

    const { title, release_date, vote_average, poster_path, id } = props.movie;

    const date = release_date.slice(0, 4);

    return (
        <div className="movie">
            <img src={poster_path} alt="Loading Picture..." />
            <p className="movie-title">Title: {title} ({date})</p>

            <Link href={`/movie/${id}`} ><a className="show-movie-details">Show Details</a></Link>
            <p className="vote-average"><i className="fa fa-star"></i> {vote_average}</p>


        </div>
    )
}

Movie.propTypes = {
    movie: PropTypes.object.isRequired
}

export default Movie;
