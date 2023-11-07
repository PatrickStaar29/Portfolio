import { Link } from "react-router-dom"
import { useInView } from 'react-intersection-observer';

function Card({data}){
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.0
      })
    return(
            <div  ref={ref} className={`projets__display ${inView ? 'projets__display--visible' : ''}`}> 
                <Link to={`/projet/${data.id}`}>
                    <img className="projets__img" src={data.cover}/>
                </Link>
            </div>
        
    )
}
export default Card