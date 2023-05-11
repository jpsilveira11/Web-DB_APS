import "./index.css"

function ContainerHeader(props: any){
    
    return(
        <>
            <div className={`container backgroud-color-${props.color} ${props.className}`}>
                 <span>{props.children}</span>
            </div>
        </>
    );
}

export default ContainerHeader