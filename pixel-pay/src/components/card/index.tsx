import '../../scss/bootstrap.scss'

function Card(_prop: {content: any}){

    const { content } = _prop;

    if (!content || !content.link) {
        return null; // Retorna null se content ou content.link for null ou undefined
      }    

    const link = content.link.split(' ')[0];

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
               <img className="card-img-top" src={link} alt={content.nom} />  
            </div>
        </>
    )
}

export default Card;

