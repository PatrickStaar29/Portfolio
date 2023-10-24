import { Link } from "react-router-dom"

function Card({data}){
    return(
        <Link to={`/projet/${data.id}`}>
            <div className="projets__display"> 
                <img className="projets__test" src={data.cover}/>
            </div>
        </Link>
    )
}
export default Card