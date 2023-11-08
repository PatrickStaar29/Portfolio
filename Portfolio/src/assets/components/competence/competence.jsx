

function Competence({data}){
    return(
        <div className="competence__techno">
            <img src={data.cover} alt={data.alt} className="competence__img"/>
            <h3 className="competence__texte">{data.texte}</h3>
        </div>
    )
}
export default Competence