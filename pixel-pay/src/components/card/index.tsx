import '../../scss/bootstrap.scss'

function Card(_prop: {content: any}){
    
    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
               <img className="card-img-top" src={_prop.content.link} alt={_prop.content.nome} />  
            </div>
        </>
    )
}

export default Card;

