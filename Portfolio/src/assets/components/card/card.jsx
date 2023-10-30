import { Link } from "react-router-dom"

function Card({data}){
    return(
            <div className="projets__display"> 
                <Link to={`/projet/${data.id}`}>
                    <img className="projets__img" src={data.cover}/>
                </Link>
            </div>
        
    )
}
export default Card