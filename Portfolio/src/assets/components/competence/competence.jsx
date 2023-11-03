

function Competence({data}){
    return(
        <div className="competence__techno">
            <img src={data.cover} alt="Description" className="competence__img"/>
            <p className="competence__texte">{data.texte}</p>
        </div>
    )
}
export default Competence