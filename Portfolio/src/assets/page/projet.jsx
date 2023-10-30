import Header from "../components/header/header"
import Data from "../components/data/data"
import { useParams } from "react-router-dom"
import Footer from "../components/footer/footer"
import Tag from "../components/tag/tag"

function Projet(){
    const { id } = useParams()
    const vitrineData = Data.find((item) => item.id === id)
    return(
        <>
            <Header/>
            <main>
                <div className="vitrine">
                    <img src={vitrineData.cover} className="vitrine__img"/>
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