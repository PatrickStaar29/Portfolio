import HeaderProjet from "../components/headers/header-projet"
import Data from "../components/data/data"
import { useParams } from "react-router-dom"
import Footer from "../components/footer/footer"
import Tag from "../components/tag/tag"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function Projet(){
    const { id } = useParams()
    const vitrineData = Data.find((item) => item.id === id)
    return(
        <>
            <HeaderProjet/>
            <main>
                <div className="vitrine">
                    <div className="vitrine__placement">
                        <FontAwesomeIcon icon={faArrowLeft} className="vitrine__fleche"/>
                        <img src={vitrineData.cover} className="vitrine__img"/>
                    </div>
                    <div className="vitrine__text">
                        <h2 className="vitrine__titre">{vitrineData.title}</h2>
                        <p className="vitrine__description">
                            {vitrineData.description}
                        </p>
                    </div>
                    <div className="tag">
                        <h2 className="tag__titre">technologie utilisé</h2>
                            <div className="tag__placement">
                                {vitrineData.tags.map((tag, index)=>(
                                    <Tag key={index} tag={tag}/>     
                                ))}
                            </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Projet