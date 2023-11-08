import Competence from "../components/competence/competence"
import Header from "../components/headers/header"
import Parcours from "../components/parcours/parcours"
import Presentation from "../components/presentation/presentation"
import Card from "../components/card/card"
import Tabl from "../components/data/data"
import Footer from "../components/footer/footer"
import CompetenceData from "../components/data/data-competence"



function Home(){
    return(
        <>
            <Header/>
            <main>
                <Presentation/>
                <Parcours/>
                <section className="competence"  id="Competences">
                    <h2 className="competence__titre">Compétences</h2>
                    <div className="competence__placement" >
                        {CompetenceData.map((item, index)=>(
                            <Competence key={index} data={item}/> 
                        ))}
                    </div>
                </section>
                <section className="projet" id='Projets'>
                    <h2 className="projets__titre">Mes projets</h2>
                    {Tabl.map((item)=>(
                        <Card key={item.id} data={item}/>     
                    ))}
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Home