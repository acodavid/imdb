import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => (

    <div className="body">
        <Head>
            <title>IMDB</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossOrigin="anonymous" />
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
        <Footer />
    </div>

);

export default Layout;