import { useState } from 'react';
import { API } from '../config/keys';
import Layout from '../components/Layout';
import Movies from '../components/movies/Movies';
import axios from 'axios';

const App = (props) => {

    const [search, setSearch] = useState('');
    const [popular, setPopular] = useState('');

    const [content, setContent] = useState('');
    const [page, setPage] = useState(1);
    const [arrayNumber, setarrayNumber] = useState(0);
    //console.log(props.popular)

    const showMore = e => {

        const number = page + 1;

        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=${number}`)
            .then(res => {
                setContent({
                    results: res.data.results
                });

            })
            .catch(err => {
                setContent('');
            })
        setPage(number);

    }

    const onChange = e => {
        setSearch(e.target.value);

        if (e.target.value == '') {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`)
                .then(res => {
                    setPopular(res.data);
                })
                .catch(err => {
                    setPopular('');
                })

            return;
        }


        if (search.length > 0) {

            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&page=1&include_adult=false&query=${search}`)
                .then(res => {

                    console.log(res.data);

                    setPopular(res.data);
                })
                .catch(err => {
                    setPopular('');
                });

        }

    }



    return (
        <Layout>
            <div>

                <h3 className="type-heading">Most Popular Movies</h3>

                <div className="search">
                    <input className="search-input" type="text" placeholder="Search" value={search} onChange={onChange} />
                </div>



                {popular !== '' ? (
                    <Movies movies={popular.results} flag={true}></Movies>
                ) : (
                        <Movies movies={props.popular} flag={false}></Movies>
                    )}


                {content !== '' ? (
                    <Movies movies={content.results} flag={false}></Movies>
                ) : null
                }

                {search === '' ? (
                    <div className="button-center">
                        <button className="more-button" onClick={showMore}>View More</button>
                    </div>
                ) : null}




            </div>
        </Layout>
    )
}

App.getInitialProps = async function () {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`);
    const popular = await res.json();

    return {
        popular: popular.results
    }
}

export default App;