import '../../scss/bootstrap.scss'

function ContainerHeader(props: any){
    
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                 {props.children}
            </nav>
        </>
    );
}

export default ContainerHeader