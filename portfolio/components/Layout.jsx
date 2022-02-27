import Head from 'next/head'
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return ( 
        <div>
            <Head>
                <title>Tim Cafarella | Portfolio</title>
            </Head>

            <Navbar />
                { children }
            <Footer />
        </div>
     );
}
 
export default Layout;