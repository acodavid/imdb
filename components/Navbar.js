import React from 'react';
import Link from 'next/link';

const Navbar = (props) => {



    return (
        <div>
            <nav className="main-navbar">
                <div>
                    <p>IMDB</p>
                </div>


                <div>
                    <p>Sign in</p>
                </div>
            </nav>

            <div className="main-cards">
                <div>
                    <Link href="/"><a>Most popular movies</a></Link>
                </div>
                <div>
                    <Link href="/top-rated"><a>Top rated movies</a></Link>
                </div>
                <div>
                    <Link href="/upcoming"><a>Upcoming movies</a></Link>
                </div>

            </div>
        </div>
    )

};

export default Navbar;