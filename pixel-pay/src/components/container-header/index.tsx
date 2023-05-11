import "./index.css"

function ContainerHeader(props: any){
    
    return(
        <>
            <div className={`container backgroud-color-${props.color}`}>
            </div>
        </>
    );
}

export default ContainerHeader