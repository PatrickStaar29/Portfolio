import Header from "../components/header/header"
import Parcours from "../components/parcours/parcours"
import Presentation from "../components/presentation/presentation"



function Home(){
    return(
        <>
            <Header/>
            <main>
                <Presentation/>
                <Parcours/>
            </main>
        </>
    )
}

export default Home