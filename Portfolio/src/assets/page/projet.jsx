import { useEffect } from "react"
import HeaderProjet from "../components/headers/header-projet"
import Data from "../components/data/data"
import { useParams, useNavigate } from "react-router-dom"
import Footer from "../components/footer/footer"
import Tag from "../components/tag/tag"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import LienCode from "../components/gitlink/gitlink"
import Head from "../head/head"



function Projet(){
    const { id } = useParams()
    const history = useNavigate()
    const vitrineData = Data.find((item) => item.id === id)

    const redirectToHome = () => {
        history(-1)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <>
            <Head/>
            <HeaderProjet/>
            <main>
                <section className="vitrine">
                    <div className="vitrine__placement">
                            <FontAwesomeIcon onClick={redirectToHome} icon={faArrowLeft} className="vitrine__fleche"/>
                        <img src={vitrineData.cover} className="vitrine__img" alt={vitrineData.alt}/>
                    </div>
                    <div className="vitrine__text">
                        <h2 className="vitrine__titre" id="description">{vitrineData.title}</h2>
                        <p className="vitrine__description">
                            {vitrineData.description}
                        </p>
                    </div>
                </section>
                <section className="tag">
                    <h2 className="tag__titre" id="tag">Technologies utilisées</h2>
                        <div className="tag__placement">
                            {vitrineData.tags.map((tag, index)=>(
                                <Tag key={index} tag={tag}/>     
                            ))}
                        </div>
                </section>
                <LienCode github={vitrineData.github}/>
            </main>
            <Footer/>
        </>
    )
}

export default Projet