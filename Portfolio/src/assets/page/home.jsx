import Competence from "../components/competence/competence"
import Header from "../components/header/header"
import Parcours from "../components/parcours/parcours"
import Presentation from "../components/presentation/presentation"
import Card from "../components/card/card"
import Tabl from "../components/data/data"



function Home(){
    return(
        <>
            <Header/>
            <main>
                <Presentation/>
                <Parcours/>
                <Competence/>
                <section className="projet">
                    <h2 className="projets__titre">Mes projets</h2>
                    {Tabl.map((item)=>(
                        <Card key={item.id} data={item}/>     
                    ))}
                </section>
                
            </main>
        </>
    )
}

export default Home