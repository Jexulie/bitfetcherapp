import Navbar from '../components/Navbar'
import Head from 'next/head'


var Layout = props => {
    return(
        <div>
            <Head>
                <title>Bit-Fetcher App</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css"/>
            </Head>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default Layout;