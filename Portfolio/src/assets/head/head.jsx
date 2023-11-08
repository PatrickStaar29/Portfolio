import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";


function Head (){
    useEffect(() => {
    document.documentElement.lang = 'fr';
    }, []);  
    return(
        <HelmetProvider>
            <Helmet>
                <title>Portfolio - Bretones Titouan</title>
                <meta name="description" content="Titouan Bretones, développeur front-end en Bretagne, alliant passion et expertise pour créer des sites web d'exception." />
            </Helmet>
        </HelmetProvider>
    )
}

export default Head