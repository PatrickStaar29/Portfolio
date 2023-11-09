import { Link } from "react-router-dom"
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'


function Card({data}){
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.0
      })
    return(
            <div  ref={ref} className={`projets__display ${inView ? 'projets__display--visible' : ''}`}> 
                <Link to={`/projet/${data.id}`}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="projets__arrow"/>
                    <img className="projets__img" src={data.cover} alt={data.alt} />
                </Link>
            </div>
        
    )
}
export default Card
