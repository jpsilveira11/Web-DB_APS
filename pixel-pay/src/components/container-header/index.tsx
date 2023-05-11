import "./index.css"

function ContainerHeader(props: any){
    
    return(
        <>
            <nav className={`container backgroud-color-${props.color} ${props.className}`}>
                 {props.children}
            </nav>
        </>
    );
}

export default ContainerHeader