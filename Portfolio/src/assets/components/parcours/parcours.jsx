import Photo from './Image/photo_du_dev.jpeg'

function Parcours(){
    return(
        <section className='parcours' id='Parcours'>
            <h2 className="parcours__titre">Parcours</h2>
            <div className='parcours__placement'>
                <img src={Photo} className='parcours__photo' alt="Photo de Titouan Bretones" />
                <p className='parcours__biographie'>Je suis Titouan Bretones, un développeur front-end passionné basé en Bretagne. J'ai récemment terminé ma formation d'intégrateur web chez OpenClassroom, 
                    j'adore créer des expériences utilisateur innovantes.
                </p>
            </div>
        </section>
    )
}
export default Parcours