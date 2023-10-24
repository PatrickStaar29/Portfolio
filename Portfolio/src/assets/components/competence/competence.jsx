import Html from './image/html.webp'
import Css from './image/css.webp'
import Sass from './image/sass.webp'
import Js from './image/js.webp'
import Reactlogo from './image/react.webp'
import Reduxlogo from './image/redux.webp' 

function Competence(){
    return(
        <section className='competence'>
            <h2 className="competence__titre">Mes compétences</h2>
            <div className='competence__skill'> 
                <img src={Html} alt="Logo html" />
                <img src={Css} alt="Logo css" />
                <img src={Sass} alt="Logo sass" />
                <img src={Js} alt="Logo js" />
                <img src={Reactlogo} alt="Logo react" />
                <img src={Reduxlogo} alt="Logo redux" />
            </div>
        </section>
    )
}
export default Competence