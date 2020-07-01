import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { API } from '../../config/keys';
import axios from 'axios';
import Layout from '../../components/Layout';

const SingleMovie = (props) => {


    const router = useRouter();
    const { movie_id } = router.query;

    const [genres, setGenres] = useState([]);

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API}&language=en-US`)
            .then(res => {
                setMovie(res.data);
                setGenres(res.data.genres)
            })
            .catch(err => {
                console.log(err);
                setMovie({});
            })

    })

    const [movie, setMovie] = useState({});



    return (
        <Layout>
            <div className="movie-container">
                <div className="single-movie">

                    <div className="movie-header">
                        <div>
                            <img src={movie.backdrop_path} alt="Loading Image..." />
                        </div>

                        <div>
                            <h3 className="movie-title-header">{movie.original_title}</h3>
                            <p className="runtime-p">({movie.runtime} minutes)</p>
                        </div>
                    </div>


                    <div className="movie-bottom">
                        <div className="overview-content">
                            <p className='overview'>Overview:</p>
                            <p className="text">{movie.overview}</p>
                        </div>


                        <div className="other">
                            <p className="release-date-p">
                                Release date: {movie.release_date}
                            </p>
                            <p className="genres"><p className="mr-3">Genres: </p>{genres.map(genre => (
                                <p className="mr-3">
                                    {genre.name}
                                </p>))}
                            </p>
                            <p className="popularity">Popularity: {movie.popularity}</p>
                            <p className="number-votes">Number of Votes: {movie.vote_count}</p>
                            <p className="rating">Rating: {movie.vote_average} <i className="fa fa-star"></i></p>

                        </div>
                    </div>



                </div>
            </div>

        </Layout>

    )

}

export default SingleMovie;