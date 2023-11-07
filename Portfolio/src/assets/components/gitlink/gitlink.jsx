import { Link } from 'react-router-dom'
import Logo from './image/GitHub.webp'

function LienCode({ github }){
    return(
        <section className='liencode'>
            <Link className='liencode__redirect' to={github} target='_blank'>
                <div className='liencode__card'>
                    <div className='liencode__img'>
                        <img src={Logo} alt=""  className='liencode__gitlogo'/>  
                    </div>
                    <p className='liencode__texte'>Lien vers le code</p>
                </div>
            </Link>
        </section>
        
    )
}

export default LienCode